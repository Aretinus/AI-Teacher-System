#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
p2t_batch.py — 阶段1：Pix2Text 本地批量蒸馏（PDF → 页级 md）

用法：
    python p2t_batch.py --pdf 书.pdf --out ./distill/ [--start 1 --end 300 --dpi 150 --languages en,ch_sim]

产物：
    <out>/page_001.md ...  （每页一个 md，文件名为 4 位零填充页码）
    <out>/meta.json        （每页耗时等元信息）

说明：
    - 整页识别必须走 p2t.recognize(img, file_type="page") + page.to_markdown()
      （默认 text_formula 模式在 v1.1.6 会退化为逐字符输出，勿用）。
    - 模型首次运行自动下载（HF 国内设置 HF_ENDPOINT=https://hf-mirror.com）。
    - 本机 CPU 速度参考：i5-8250U 约 100 秒/页，300 页约 8 小时，适合挂机批量。
"""
import argparse
import json
import os
import sys
import time


def parse_args():
    ap = argparse.ArgumentParser(description="Pix2Text 本地批量蒸馏 PDF → 页级 md")
    ap.add_argument("--pdf", required=True, help="输入 PDF 路径")
    ap.add_argument("--out", required=True, help="输出目录（页级 md + meta.json）")
    ap.add_argument("--start", type=int, default=1, help="起始页（1 基，含）")
    ap.add_argument("--end", type=int, default=0, help="结束页（1 基，含；0=到最后一页）")
    ap.add_argument("--dpi", type=int, default=150, help="渲染分辨率（默认 150）")
    ap.add_argument("--resized-shape", type=int, default=768, help="识别前缩放宽度（默认 768）")
    ap.add_argument("--languages", default="en,ch_sim", help="OCR 语言，逗号分隔")
    ap.add_argument("--skip-existing", action="store_true", help="跳过已存在的页文件")
    ap.add_argument("--hf-endpoint", default="https://hf-mirror.com", help="HF 镜像")
    return ap.parse_args()


def main():
    args = parse_args()
    if not os.path.isfile(args.pdf):
        sys.exit(f"PDF 不存在: {args.pdf}")
    os.makedirs(args.out, exist_ok=True)

    os.environ.setdefault("HF_ENDPOINT", args.hf_endpoint)

    import fitz  # PyMuPDF
    from pix2text import Pix2Text

    doc = fitz.open(args.pdf)
    total = doc.page_count
    end = args.end or total
    if args.start < 1 or end > total or args.start > end:
        sys.exit(f"页码范围非法: start={args.start} end={end} total={total}")

    langs = tuple(s.strip() for s in args.languages.split(",") if s.strip())
    t0 = time.time()
    p2t = Pix2Text(languages=langs)
    print(f"模型加载 {time.time()-t0:.1f}s，开始蒸馏页 {args.start}-{end}/{total} ...", flush=True)

    meta = {"pdf": args.pdf, "languages": list(langs), "pages": {}}
    tmpdir = os.path.join(args.out, "_tmp_png")
    os.makedirs(tmpdir, exist_ok=True)

    try:
        for pno in range(args.start, end + 1):
            md_fp = os.path.join(args.out, f"page_{pno:04d}.md")
            if args.skip_existing and os.path.isfile(md_fp):
                print(f"[{pno}] 跳过（已存在）", flush=True)
                continue
            img_fp = os.path.join(tmpdir, f"p{pno:04d}.png")
            doc[pno - 1].get_pixmap(dpi=args.dpi).save(img_fp)
            t0 = time.time()
            try:
                page = p2t.recognize(img_fp, file_type="page",
                                     resized_shape=args.resized_shape)
                text = page.to_markdown(os.path.join(tmpdir, "md"))
            except Exception as e:
                print(f"[{pno}] 识别失败: {e}", flush=True)
                meta["pages"][pno] = {"ok": False, "error": str(e)}
                continue
            elapsed = time.time() - t0
            with open(md_fp, "w", encoding="utf-8") as f:
                f.write(text)
            meta["pages"][pno] = {"ok": True, "seconds": round(elapsed, 1),
                                  "chars": len(text)}
            print(f"[{pno}] {elapsed:.1f}s {len(text)} chars -> {md_fp}", flush=True)
    finally:
        doc.close()
        import shutil
        shutil.rmtree(tmpdir, ignore_errors=True)

    with open(os.path.join(args.out, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    n_ok = sum(1 for v in meta["pages"].values() if v.get("ok"))
    n_fail = len(meta["pages"]) - n_ok
    print(f"完成：{n_ok} 页成功，{n_fail} 页失败，meta -> {os.path.join(args.out, 'meta.json')}")


if __name__ == "__main__":
    main()