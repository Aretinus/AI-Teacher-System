#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
mineru_refine.py — 阶段3：MinerU 云端精修可疑页 + 替换合并（免费 Agent API，免 Token）

用法：
    python mineru_refine.py --pdf 书.pdf --md-dir ./distill/ --suspicious suspicious.json
                            [--out ./refined/ --language ch --max-gap 2 --timeout 900]

流程：
    1. 读可疑页清单，将相邻页（间隔 ≤ max-gap）聚成连续区间，减少请求数；
    2. 对每个区间调用 MinerU Agent 轻量 API（签名上传 → 轮询 → 下载 full.md）；
    3. 区间结果替换原 P2T 页，其余页原样保留；
    4. 按页码排序合并 → <out>/book.md + <out>/refined_pages.json（区间明细）。

限制：单区间 ≤20 页且文件 ≤10MB（按区间截取 PDF 子文件再上传）；
      中文书务必传 --language ch（en 模式中文全乱）。
"""
import argparse
import json
import os
import re
import sys
import time

API_BASE = "https://mineru.net/api/v1/agent"


def cluster_pages(pages, max_gap=2):
    """把页码聚成连续区间，区间内相邻间隔 ≤ max_gap。返回 [(start, end), ...]。"""
    pages = sorted(pages)
    ranges = []
    if not pages:
        return ranges
    s = p = pages[0]
    for x in pages[1:]:
        if x - p <= max_gap:
            p = x
        else:
            ranges.append((s, p))
            s = p = x
    ranges.append((s, p))
    return ranges


def make_pdf_range(src_pdf, start, end, out_pdf):
    """用 PyMuPDF 截取 src_pdf 的 [start, end] 页到 out_pdf（1 基，含两端）。"""
    import fitz
    doc = fitz.open(src_pdf)
    nd = fitz.open()
    try:
        for i in range(start - 1, end):
            nd.insert_pdf(doc, from_page=i, to_page=i)
        nd.save(out_pdf)
    finally:
        nd.close()
        doc.close()


def refine_range(pdf, start, end, out_md, language="ch", timeout=900, interval=5):
    """对 [start, end] 区间提交 MinerU Agent API，下载结果 md 到 out_md。"""
    import requests

    page_range = f"{start}-{end}"
    data = {"file_name": os.path.basename(pdf), "language": language,
            "page_range": page_range, "enable_formula": True, "enable_table": True}
    r = requests.post(f"{API_BASE}/parse/file", json=data, timeout=60)
    r.raise_for_status()
    j = r.json()
    if j["code"] != 0:
        raise RuntimeError(f"提交失败: {j.get('msg')}")
    task_id = j["data"]["task_id"]
    file_url = j["data"]["file_url"]
    with open(pdf, "rb") as f:
        put = requests.put(file_url, data=f, timeout=120)
    if put.status_code not in (200, 201):
        raise RuntimeError(f"上传失败 HTTP {put.status_code}")

    start = time.time()
    while time.time() - start < timeout:
        q = requests.get(f"{API_BASE}/parse/{task_id}", timeout=60).json()
        state = q.get("data", {}).get("state")
        if state == "done":
            md_url = q["data"]["markdown_url"]
            md = requests.get(md_url, timeout=120).text
            with open(out_md, "w", encoding="utf-8") as f:
                f.write(md)
            return True
        if state == "failed":
            raise RuntimeError(f"解析失败: {q['data'].get('err_msg')} "
                               f"code={q['data'].get('err_code')}")
        time.sleep(interval)
    raise RuntimeError(f"轮询超时（{timeout}s），task_id={task_id}")


def split_range_md(md_text, n_pages):
    """把 MinerU 区间 md 粗切为 n_pages 块（按空行均分），供页级替换预览。"""
    blocks = [b for b in re.split(r"\n\s*\n", md_text) if b.strip()]
    if not blocks:
        return [md_text] if n_pages == 1 else [""] * n_pages
    if len(blocks) < n_pages:
        blocks += [""] * (n_pages - len(blocks))
    step = len(blocks) / n_pages
    parts = []
    for i in range(n_pages):
        s = int(i * step)
        e = int((i + 1) * step)
        parts.append("\n\n".join(blocks[s:e]))
    return parts


def main():
    ap = argparse.ArgumentParser(description="MinerU 云端精修可疑页 + 替换合并")
    ap.add_argument("--pdf", required=True, help="原 PDF 路径")
    ap.add_argument("--md-dir", required=True, help="P2T 页级 md 目录")
    ap.add_argument("--suspicious", required=True, help="suspicious.json（quality_scanner 产物）")
    ap.add_argument("--out", default="refined", help="输出目录")
    ap.add_argument("--language", default="ch", help="MinerU 解析语言（默认 ch）")
    ap.add_argument("--max-gap", type=int, default=2, help="区间合并间隔阈值（默认 2）")
    ap.add_argument("--timeout", type=int, default=900, help="单区间轮询超时秒数")
    ap.add_argument("--dry-run", action="store_true", help="只列区间计划，不调用 API")
    args = ap.parse_args()

    if not os.path.isfile(args.pdf) or not os.path.isdir(args.md_dir):
        sys.exit("--pdf 或 --md-dir 无效")
    with open(args.suspicious, encoding="utf-8") as f:
        susp = json.load(f)
    pages = sorted(int(p) for p in susp.get("pages", {}))
    if not pages:
        print("无可疑页，无需精修（合并仍会执行）")
        pages = []

    ranges = cluster_pages(pages, args.max_gap)
    print(f"可疑页 {len(pages)} 个，聚为 {len(ranges)} 个区间：{ranges}")

    os.makedirs(args.out, exist_ok=True)
    tmpdir = os.path.join(args.out, "_tmp")
    os.makedirs(tmpdir, exist_ok=True)

    # 清理历史精修页文件，避免残留旧区间产物污染本次合并
    for fn in os.listdir(args.out):
        if re.match(r"page_\d{4}\.md$", fn):
            os.remove(os.path.join(args.out, fn))

    refined = {}
    try:
        for i, (s, e) in enumerate(ranges, 1):
            seg_pdf = os.path.join(tmpdir, f"seg_{s:04d}-{e:04d}.pdf")
            seg_md = os.path.join(tmpdir, f"seg_{s:04d}-{e:04d}.md")
            make_pdf_range(args.pdf, s, e, seg_pdf)
            size_mb = os.path.getsize(seg_pdf) / 1024 / 1024
            n_pages = e - s + 1
            if n_pages > 20 or size_mb > 10:
                print(f"  [{s}-{e}] 超出轻量 API 限制（{n_pages}页/{size_mb:.1f}MB），拆半重聚")
                half = (s + e) // 2
                ranges[i:i] = [(s, half), (half + 1, e)]
                continue
            if args.dry_run:
                print(f"  [{s}-{e}] {n_pages}页/{size_mb:.1f}MB -> 将提交 MinerU")
                refined[(s, e)] = {"dry_run": True}
                continue
            print(f"  [{s}-{e}] 提交 MinerU（{n_pages}页/{size_mb:.1f}MB）...", flush=True)
            t0 = time.time()
            refine_range(seg_pdf, s, e, seg_md, language=args.language,
                         timeout=args.timeout)
            parts = split_range_md(open(seg_md, encoding="utf-8").read(), n_pages)
            for j, pno in enumerate(range(s, e + 1)):
                out_fp = os.path.join(args.out, f"page_{pno:04d}.md")
                with open(out_fp, "w", encoding="utf-8") as f:
                    f.write(parts[j])
            refined[(s, e)] = {"pages": list(range(s, e + 1)),
                               "seconds": round(time.time() - t0, 1)}
            print(f"  [{s}-{e}] 完成 {time.time()-t0:.1f}s", flush=True)

        # 合并：精修页优先，其余用 P2T 原页
        book_lines = []
        for fn in sorted(os.listdir(args.md_dir)):
            m = re.match(r"page_(\d{4})\.md$", fn)
            if not m:
                continue
            pno = int(m.group(1))
            refined_fp = os.path.join(args.out, f"page_{pno:04d}.md")
            src_fp = refined_fp if os.path.isfile(refined_fp) else os.path.join(args.md_dir, fn)
            with open(src_fp, encoding="utf-8", errors="replace") as f:
                book_lines.append(f"\n\n<!-- page {pno} -->\n\n" + f.read().strip())
        book_fp = os.path.join(args.out, "book.md")
        with open(book_fp, "w", encoding="utf-8") as f:
            f.write("\n".join(book_lines))
        print(f"整书合并 -> {book_fp}")
    finally:
        import shutil
        shutil.rmtree(tmpdir, ignore_errors=True)

    with open(os.path.join(args.out, "refined_pages.json"), "w", encoding="utf-8") as f:
        json.dump({"ranges": {f"{s}-{e}": v for (s, e), v in refined.items()}},
                  f, ensure_ascii=False, indent=1)
    print("区间明细 ->", os.path.join(args.out, "refined_pages.json"))


if __name__ == "__main__":
    main()