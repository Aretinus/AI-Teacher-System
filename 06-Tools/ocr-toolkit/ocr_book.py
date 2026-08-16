#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OCR 扫描版 PDF：逐页渲染 + RapidOCR 识别，生成带隐形文字层的 _OCR.pdf。

产物直接可供 teach.py（蒸馏）与 RAG 切分使用，无需改下游流程。

策略：
- OCR 结果逐页缓存到 <书名>_ocr_cache.json，随时中断、重跑自动续跑（已识别页跳过）
- 全部识别完成后统一组装 _OCR.pdf：源页复制 + 按检测框坐标写隐形文字层（render_mode=3，
  文本层可提取但视觉不变）

用法：
    python ocr_book.py "<pdf路径>" [--dpi 200] [--pages 10-20] [--out <输出目录>]
    --pages 限定页范围（如 10-20，含两端）；--out 指定输出目录（默认镜像到
    02-DATA/books/ocr/<相对 raw 的路径>，不污染源数据）
"""
import argparse
import json
import os
import sys
import time

import fitz
from rapidocr import RapidOCR

TEXT_LAYER_MIN_CHARS = 20

TOOLKIT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(TOOLKIT_DIR, "..", ".."))
RAW_ROOT = os.path.join(PROJECT_ROOT, "02-DATA", "books", "raw")
OCR_ROOT = os.path.join(PROJECT_ROOT, "02-DATA", "books", "ocr")


def default_out_dir(src):
    """默认输出到 02-DATA/books/ocr/<与 raw 相同的相对路径>，不污染源数据。"""
    src_abs = os.path.abspath(src)
    raw_abs = os.path.abspath(RAW_ROOT)
    if src_abs.startswith(raw_abs + os.sep):
        rel_dir = os.path.dirname(os.path.relpath(src_abs, raw_abs))
        return os.path.join(OCR_ROOT, rel_dir)
    return os.path.dirname(src_abs)


def has_text_layer(page):
    return len(page.get_text().strip()) > TEXT_LAYER_MIN_CHARS


def ocr_image(engine, png_path):
    """OCR 单张图片，返回 [(x0,y0,x1,y1,text), ...]（按检测框坐标）。"""
    result = engine(png_path)
    if result is None:
        return []
    boxes = getattr(result, "boxes", None)
    scores = getattr(result, "scores", None)
    txts = getattr(result, "txts", None)
    if boxes is None or txts is None:
        return []
    out = []
    for box, score, txt in zip(boxes, scores, txts):
        text = str(txt).strip()
        if not text:
            continue
        if score is not None and float(score) < 0.5:
            continue
        xs = [float(p[0]) for p in box]
        ys = [float(p[1]) for p in box]
        out.append([round(min(xs), 1), round(min(ys), 1), round(max(xs), 1), round(max(ys), 1), text])
    return out


def _cluster_lines(lines, page_h):
    """OCR 行按 (y0,x0) 排序后按 y 间隙聚类成段落，返回 [ [line,...], ... ]。

    下游 book_formats._page_text_clean 按文本块切段，逐行 insert_text 会生成
    上百个块 → 每行成"一段" → 蒸馏时切出大量碎片节。聚类成段后每段写成一个
    文本块，切分粒度回到"页内段落"，章节切分才能正常。
    """
    if not lines:
        return []
    ordered = sorted(lines, key=lambda l: (l[1], l[0]))
    median_h = sorted(l[3] - l[1] for l in ordered)[len(ordered) // 2] or 12
    gap = max(median_h * 1.6, 12.0)
    paras = []
    cur = [ordered[0]]
    for l in ordered[1:]:
        if l[1] - cur[-1][3] > gap:
            paras.append(cur)
            cur = [l]
        else:
            cur.append(l)
    if cur:
        paras.append(cur)
    return paras


def write_text_layer(page, lines):
    """把 OCR 行聚类成段落，每段一次 insert_textbox 写入隐形文字层。

    render_mode=3：只入文本层、不显示。fontsize 自适应缩小直到整段放下，
    保证每段恰好一个文本块（下游按块切分才合理）。
    """
    n = 0
    pw, ph = page.rect.width, page.rect.height
    rect = fitz.Rect(0, 0, pw, ph)
    for para in _cluster_lines(lines, ph):
        text = "\n".join(l[4] for l in para)
        if not text.strip():
            continue
        fs = min(48.0, max(3.0, (para[0][3] - para[0][1]) * 0.9))
        for _ in range(8):
            rc = page.insert_textbox(
                rect, text, fontsize=fs, fontname="china-ss",
                render_mode=3, overlay=True,
            )
            if rc >= 0:
                n += 1
                break
            fs *= 0.75
    return n


def load_cache(path):
    if not os.path.exists(path):
        return {}
    try:
        with open(path, "r", encoding="utf-8") as f:
            return {str(k): v for k, v in json.load(f).items()}
    except Exception:
        return {}


def save_cache(path, cache):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(cache, f, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser(description="扫描版 PDF OCR -> 带文字层 _OCR.pdf")
    ap.add_argument("pdf")
    ap.add_argument("--dpi", type=int, default=200)
    ap.add_argument("--pages", default=None, help="如 10-20（含两端），默认全部")
    ap.add_argument("--out", default=None, help="输出目录（默认与源文件同目录）")
    args = ap.parse_args()

    src = os.path.abspath(args.pdf)
    if not os.path.exists(src):
        sys.exit(f"文件不存在：{src}")
    src_name = os.path.basename(src)
    stem, _ = os.path.splitext(src_name)
    out_dir = os.path.abspath(args.out) if args.out else default_out_dir(src)
    os.makedirs(out_dir, exist_ok=True)
    out_pdf = os.path.join(out_dir, f"{stem}_OCR.pdf")
    cache_path = os.path.join(out_dir, f"{stem}_ocr_cache.json")

    pno_range = None
    if args.pages:
        try:
            a, b = args.pages.split("-")
            pno_range = (int(a), int(b))
        except ValueError:
            sys.exit(f"--pages 格式错误：{args.pages}（应为 10-20）")

    pdf = fitz.open(src)
    pages = range(pdf.page_count)
    if pno_range:
        pages = range(min(pno_range[0], pdf.page_count - 1), min(pno_range[1], pdf.page_count - 1) + 1)

    engine = RapidOCR()
    cache = load_cache(cache_path)

    # 阶段 1：OCR（逐页缓存，可中断续跑）
    t0 = time.time()
    recognized = 0
    for pno in pages:
        if str(pno) in cache:
            continue
        page = pdf[pno]
        if has_text_layer(page):
            cache[str(pno)] = []
            save_cache(cache_path, cache)
            continue
        pix = page.get_pixmap(dpi=args.dpi)
        tmp = os.path.join(os.environ.get("TEMP", "."), f"_ocr_tmp_{os.getpid()}.png")
        pix.save(tmp)
        t1 = time.time()
        lines = ocr_image(engine, tmp)
        os.remove(tmp)
        cache[str(pno)] = lines
        save_cache(cache_path, cache)
        recognized += 1
        print(f"  [{pno}] OCR {len(lines)} 段 ({time.time()-t1:.1f}s)")
    print(f"OCR 阶段：识别 {recognized} 页，缓存 {len(cache)} 页，耗时 {(time.time()-t0)/60:.1f} 分钟")

    # 阶段 2：组装 PDF（一次性生成，遍历全书；未 OCR 页写入空文字层）
    t0 = time.time()
    out_doc = fitz.open()
    total_texts = 0
    for pno in range(pdf.page_count):
        lines = cache.get(str(pno), [])
        out_doc.insert_pdf(pdf, from_page=pno, to_page=pno)
        total_texts += write_text_layer(out_doc[-1], lines)
    out_doc.save(out_pdf)
    n_pages = out_doc.page_count
    out_doc.close()
    pdf.close()
    print(f"组装完成：{out_pdf}（{n_pages} 页，写入 {total_texts} 段文字层，{(time.time()-t0)/60:.1f} 分钟）")


if __name__ == "__main__":
    main()