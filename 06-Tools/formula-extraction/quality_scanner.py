#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
quality_scanner.py — 阶段2：质检器（页级 md → 打分 → 可疑页清单）

用法：
    python quality_scanner.py --md-dir ./distill/ [--threshold 30] [--out suspicious.json]

产物：
    <out>/report.json      每页明细（命中规则 + 分数）
    <out>/suspicious.json  可疑页清单（页码 + 命中规则 + 分数）

规则（基于 P2T 实测噪声特征，见 06-Tools/formula-extraction/README.md 第七章）：
    1. replacement_char  U+FFFD � 替换符                      权重 40/次（上限 100）
    2. noise_symbol      非 CJK/ASCII/LaTeX 的罕见符号（￠ꚕ⬥ 等）  权重 30/次（上限 100）
    3. formula_broken    $ 不成对 / 公式内 \ Y、^ { } 空组、Y] 错位  权重 25/处（上限 100）
    4. orphan_chars      孤立单字符残渣（t t $f$、s $f$ 模式）     权重 20/处（上限 60）
    5. text_garbage      连续汉字串含异常拼音残渣模式（弱检测）    权重 15/处（上限 45）
    6. caption_misplaced 独立行「图 N」夹在正文中间              权重 10/处（上限 20）
    7. cjk_ratio_low     中文字符占比异常低（扫描中文书页）       权重 15（单次）

页分 ≥ threshold → 可疑页。
"""
import argparse
import json
import os
import re
import sys


RULES = ("replacement_char", "noise_symbol", "formula_broken",
         "orphan_chars", "text_garbage", "long_cjk_run", "caption_misplaced",
         "cjk_ratio_low")

# U+FFFD 及常见 OCR 替换符
_REPLACEMENT_RE = re.compile(r"[\ufffd\ufffe\uffff]")
# 罕见符号：白名单为 ASCII + CJK + 全角标点（\uff01-\uff5e）+ ￥（\uffe5）
#           + 中文标点/引号/数学常用符号；其余（￠=U+FFE0、⊥ 等）判为噪声
_NOISE_RE = re.compile(r"[^\x00-\x7f\u4e00-\u9fff\u3400-\u4dbf\uff01-\uff5e\uffe5"
                       r"\u3000-\u303f\u2018-\u201d\u2014\u2026\u00b7\u00d7\u00f7"
                       r"\u2212\u00b1\u00d7\u00f7\u2260\u2264\u2265\u2208\u2209"
                       r"\u2229\u222a\u2282\u2283\u22a5\u221e\u2211\u220f\u221a]")
# 公式错误模式：单反斜杠（排除 \\ 换行）后跟空白/Y/} 错位、空组、`Y]` 等
_FORMULA_RE = re.compile(r"(?<!\\)\\(?!\\)\s*[\sY}]|\^ \{ \} |_ \{ \} |\)\s*Y\]|\$\s*\\to\s*$")
# 公式间孤立字符残渣（如 `$g \circ f$ t t $f$`）与行首孤立字母（如 `s $f$`）
_ORPHAN_RE = re.compile(r"\$\s+\S\s+\S\s+\$|^\s*[a-zA-Z]\s+\$", re.M)
# 拼音残渣：连续汉字夹 1-2 个异常字母（弱）
_GARBAGE_RE = re.compile(r"[\u4e00-\u9fff]{3,}[a-zA-Z]{1,2}[\u4e00-\u9fff]{2,}")
# 超长无标点汉字串（≥10 字，如「金用监下公鞋客上国团」）
_LONG_CJK_RE = re.compile(r"[\u4e00-\u9fff]{10,}")
# 独立行图注
_CAPTION_RE = re.compile(r"^\s*(图|Fig\.?)\s*\d+\s*[、.．:：]?\s*$", re.M)


def _count_dollars(text):
    """统计 $ 数量（跳过 \\$ 转义）。"""
    return len(re.findall(r"(?<!\\)\$", text))


def scan_page(text, check_cjk_ratio=True):
    """对单页 md 打分。返回 (score, hits)，hits: {rule: count}。

    check_cjk_ratio=False 用于英文书（全书 latin 主导），禁用 cjk_ratio_low。
    """
    hits = {}
    score = 0

    n_rep = len(_REPLACEMENT_RE.findall(text))
    if n_rep:
        hits["replacement_char"] = n_rep
        score += min(n_rep * 40, 100)

    noise = [c for c in _NOISE_RE.findall(text) if c not in ("\u3000",)]
    if noise:
        hits["noise_symbol"] = len(noise)
        score += min(len(noise) * 30, 100)

    # 公式配对：分别数 $ 与 $$
    n_dollar = _count_dollars(text)
    n_dd = text.count("$$")
    unpaired = (n_dollar - n_dd * 2) % 2
    broken_formula = 0
    for m in _FORMULA_RE.finditer(text):
        broken_formula += 1
    if unpaired:
        broken_formula += 1
    if broken_formula:
        hits["formula_broken"] = broken_formula
        score += min(broken_formula * 25, 100)

    n_orphan = len(_ORPHAN_RE.findall(text))
    if n_orphan:
        hits["orphan_chars"] = n_orphan
        score += min(n_orphan * 20, 60)

    n_garb = len(_GARBAGE_RE.findall(text))
    if n_garb:
        hits["text_garbage"] = n_garb
        score += min(n_garb * 15, 45)

    n_long = len(_LONG_CJK_RE.findall(text))
    if n_long:
        hits["long_cjk_run"] = n_long
        score += min(n_long * 10, 20)

    n_cap = len(_CAPTION_RE.findall(text))
    if n_cap:
        hits["caption_misplaced"] = n_cap
        score += min(n_cap * 10, 20)

    cjk = len(re.findall(r"[\u4e00-\u9fff]", text))
    total = len(text)
    if check_cjk_ratio and total > 200 and cjk / total < 0.05:
        hits["cjk_ratio_low"] = 1
        score += 15

    return score, hits


def main():
    ap = argparse.ArgumentParser(description="质检器：页级 md → 打分 → 可疑页清单")
    ap.add_argument("--md-dir", required=True, help="页级 md 目录（p2t_batch 产物）")
    ap.add_argument("--threshold", type=int, default=30, help="可疑页分数阈值（默认 30）")
    ap.add_argument("--out", default="suspicious.json", help="输出清单文件")
    ap.add_argument("--report", default="report.json", help="明细报告文件")
    args = ap.parse_args()

    if not os.path.isdir(args.md_dir):
        sys.exit(f"目录不存在: {args.md_dir}")

    pages = {}
    cjk_total = 0
    latin_total = 0
    for fn in sorted(os.listdir(args.md_dir)):
        m = re.match(r"page_(\d{4})\.md$", fn)
        if not m:
            continue
        pno = int(m.group(1))
        with open(os.path.join(args.md_dir, fn), encoding="utf-8",
                  errors="replace") as f:
            text = f.read()
        cjk_total += len(re.findall(r"[\u4e00-\u9fff]", text))
        latin_total += len(re.findall(r"[a-zA-Z]", text))
        pages[pno] = text

    # 语言感知：全书 latin 主导（英文书）→ 禁用 cjk_ratio_low，避免误报
    check_cjk_ratio = cjk_total > latin_total * 0.1

    for pno, text in pages.items():
        score, hits = scan_page(text, check_cjk_ratio=check_cjk_ratio)
        pages[pno] = {"score": score, "hits": hits}

    suspicious = {p: v for p, v in pages.items() if v["score"] >= args.threshold}

    with open(args.report, "w", encoding="utf-8") as f:
        json.dump({"pages": pages}, f, ensure_ascii=False, indent=1)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump({"threshold": args.threshold,
                   "pages": suspicious}, f, ensure_ascii=False, indent=1)

    print(f"共 {len(pages)} 页，可疑 {len(suspicious)} 页（阈值 {args.threshold}）")
    for pno, v in sorted(suspicious.items()):
        print(f"  页 {pno:4d}  分 {v['score']:3d}  {v['hits']}")
    print(f"清单 -> {args.out}")


if __name__ == "__main__":
    main()