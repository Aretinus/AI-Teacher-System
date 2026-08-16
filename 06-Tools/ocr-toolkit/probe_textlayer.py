#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""快速探测 PDF/djvu 文字层：stdin 逐行读入绝对路径，逐行输出 json。

分类：
    text    — 文字层完好（>80% 页有文字）
    scanned — 纯扫描件（<20% 页有文字）
    partial — 部分有文字层（20%~80%）

每次文件只抽样最多 12 页，快速返回；供 ocrService 扫描时标注
「无需 OCR」/「需 OCR」，避免全库逐个完整检查。
"""
import json
import sys

import fitz

TEXT_LAYER_MIN_CHARS = 20


def probe(path):
    try:
        doc = fitz.open(path)
    except Exception as e:
        return {"kind": "error", "error": str(e)}
    total = doc.page_count
    sampled = max(1, min(12, total))
    step = max(1, total // sampled)
    with_layer = 0
    for pno in range(0, total, step):
        if len(doc[pno].get_text().strip()) > TEXT_LAYER_MIN_CHARS:
            with_layer += 1
    doc.close()
    ratio = with_layer / len(range(0, total, step))
    if ratio > 0.8:
        kind = "text"
    elif ratio < 0.2:
        kind = "scanned"
    else:
        kind = "partial"
    return {"pages": total, "ratio": round(ratio, 3), "kind": kind}


def main():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            r = probe(line)
        except Exception as e:
            r = {"kind": "error", "error": str(e)}
        r["path"] = line
        print(json.dumps(r, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()