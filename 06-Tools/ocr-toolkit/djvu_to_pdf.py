#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""djvu → pdf 转换工具（含文字层组装）。

ddjvu.exe 的 PDF 输出不含文字层，故转换后用 djvutxt.exe 提取原文，
再用 PyMuPDF 把文本写入隐形文字层（render_mode=3），使产物可直接检索。

依赖：
    ddjvu.exe / djvutxt.exe（DjVuLibre 命令行工具），查找顺序：
        1. 本目录 bin/（含配套 DLL）
        2. 01-Skills/vendor/djvulibre/
        3. 系统 PATH

用法：
    python djvu_to_pdf.py "<djvu路径>" [--mode color] [--dpi 150]
--mode: color（默认，保留彩色）| black（黑白）| foreground（前景）
"""
import argparse
import os
import shutil
import subprocess
import sys

import fitz

TOOLKIT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(TOOLKIT_DIR, "..", ".."))
RAW_ROOT = os.path.join(PROJECT_ROOT, "02-DATA", "books", "raw")
OCR_ROOT = os.path.join(PROJECT_ROOT, "02-DATA", "books", "ocr")
PAGE_SEP = "\f"  # djvutxt 页分隔符


def default_out_dir(src):
    """默认输出到 02-DATA/books/ocr/<与 raw 相同的相对路径>，不污染源数据。"""
    src_abs = os.path.abspath(src)
    raw_abs = os.path.abspath(RAW_ROOT)
    if src_abs.startswith(raw_abs + os.sep):
        rel_dir = os.path.dirname(os.path.relpath(src_abs, raw_abs))
        return os.path.join(OCR_ROOT, rel_dir)
    return os.path.dirname(src_abs)


def find_tool(name):
    cands = [
        os.path.join(TOOLKIT_DIR, "bin", name),
        os.path.join(TOOLKIT_DIR, "..", "..", "01-Skills", "vendor", "djvulibre", name),
    ]
    for c in cands:
        if os.path.exists(c):
            return c
    return shutil.which(name)


def extract_text_by_page(djvutxt, src):
    r = subprocess.run(
        [djvutxt, src], capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    if r.returncode != 0:
        sys.exit(f"djvutxt 失败（{r.returncode}）：{r.stderr[:300]}")
    return [p.strip() for p in r.stdout.split(PAGE_SEP) if p.strip()]


def add_text_layer(pdf_path, pages_text):
    """把每页文本写入隐形文字层，逐行 insert_text。"""
    doc = fitz.open(pdf_path)
    n = 0
    for pno, text in enumerate(pages_text):
        if pno >= doc.page_count:
            break
        page = doc[pno]
        rect = page.rect
        fontsize = 12.0
        y = rect.y0 + fontsize
        for line in text.splitlines():
            line = line.rstrip()
            if not line.strip():
                continue
            rc = page.insert_text(
                fitz.Point(rect.x0 + 2, y),
                line,
                fontsize=fontsize,
                fontname="china-ss",
                render_mode=3,
                overlay=True,
            )
            if rc >= 0:
                n += 1
            y += fontsize * 1.25
            if y > rect.y1 - fontsize:
                break
    doc.save(pdf_path, incremental=True, encryption=fitz.PDF_ENCRYPT_KEEP)
    doc.close()
    return n


def main():
    ap = argparse.ArgumentParser(description="djvu 转 pdf（含文字层）")
    ap.add_argument("djvu")
    ap.add_argument("--mode", default="color", choices=["color", "black", "foreground"])
    args = ap.parse_args()

    src = os.path.abspath(args.djvu)
    if not os.path.exists(src):
        sys.exit(f"文件不存在：{src}")
    stem, _ = os.path.splitext(src)
    out_dir = default_out_dir(src)
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, f"{os.path.basename(stem)}_转PDF.pdf")

    ddjvu = find_tool("ddjvu.exe")
    djvutxt = find_tool("djvutxt.exe")
    if not ddjvu:
        sys.exit("未找到 ddjvu.exe：请将 DjVuLibre 工具放入 06-Tools/ocr-toolkit/bin/（或安装到系统 PATH）")

    if os.path.exists(out):
        os.remove(out)
    r = subprocess.run(
        [ddjvu, "-format=pdf", f"-mode={args.mode}", src, out],
        capture_output=True, text=True, encoding="utf-8", errors="replace",
    )
    if r.returncode != 0:
        sys.exit(f"ddjvu 失败（{r.returncode}）：{r.stderr[:300]}")
    print(f"转换完成：{out}（{os.path.getsize(out)/1024/1024:.1f} MB）")

    if djvutxt:
        pages_text = extract_text_by_page(djvutxt, src)
        n = add_text_layer(out, pages_text)
        print(f"文字层：{len(pages_text)} 页 / {n} 行")
    else:
        print("警告：未找到 djvutxt.exe，产物无文字层")


if __name__ == "__main__":
    main()