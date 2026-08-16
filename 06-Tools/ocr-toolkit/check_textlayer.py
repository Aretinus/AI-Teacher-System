#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""扫描书库，统计每本 PDF/djvu 的文字层覆盖情况，生成待 OCR 清单。

分类：
    text    — 文字层完好（>80% 页有文字）
    scanned — 纯扫描件（<20% 页有文字）
    partial — 部分有文字层（20%~80%）

用法：
    python check_textlayer.py [根目录] [--min-chars 20]
默认根目录为 02-DATA/books/raw，可指定 Math 或具体子目录缩小范围。
"""
import argparse
import os
import sys

import fitz

EXT = (".pdf", ".djvu")
TEXT_LAYER_MIN_CHARS = 20


def has_text_layer(page, min_chars=TEXT_LAYER_MIN_CHARS):
    return len(page.get_text().strip()) > min_chars


def analyze_file(path, min_chars=TEXT_LAYER_MIN_CHARS):
    try:
        doc = fitz.open(path)
    except Exception as e:
        return {"path": path, "error": str(e)}
    total = doc.page_count
    with_layer = 0
    sampled = max(1, min(40, total))
    step = max(1, total // sampled)
    for pno in range(0, total, step):
        if has_text_layer(doc[pno], min_chars):
            with_layer += 1
    doc.close()
    ratio = with_layer / len(range(0, total, step))
    if ratio > 0.8:
        kind = "text"
    elif ratio < 0.2:
        kind = "scanned"
    else:
        kind = "partial"
    return {"path": path, "pages": total, "ratio": ratio, "kind": kind}


def main():
    ap = argparse.ArgumentParser(description="扫描书库统计文字层覆盖")
    ap.add_argument("root", nargs="?", default="02-DATA/books/raw")
    ap.add_argument("--min-chars", type=int, default=TEXT_LAYER_MIN_CHARS)
    args = ap.parse_args()

    root = os.path.abspath(args.root)
    if not os.path.isdir(root):
        sys.exit(f"目录不存在：{root}")

    rows = []
    for dirpath, _dirs, files in os.walk(root):
        for f in sorted(files):
            if os.path.splitext(f)[1].lower() in EXT:
                rows.append(analyze_file(os.path.join(dirpath, f), args.min_chars))

    by_kind = {"text": [], "scanned": [], "partial": []}
    for r in rows:
        by_kind.setdefault(r.get("kind", "error"), []).append(r)

    print(f"== 扫描结果：{len(rows)} 个文件 ==")
    for kind in ("scanned", "partial", "text"):
        group = by_kind.get(kind, [])
        if not group:
            continue
        print(f"\n## {kind}（{len(group)} 个）")
        for r in sorted(group, key=lambda x: x["path"]):
            if "error" in r:
                print(f"  [err] {r['path']}: {r['error']}")
            else:
                print(f"  {r['kind']:<7} {r['ratio']*100:5.0f}%  {r['pages']:>5}页  {os.path.relpath(r['path'], root)}")


if __name__ == "__main__":
    main()