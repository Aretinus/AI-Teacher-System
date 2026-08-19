#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
run_pipeline.py — 公式书蒸馏调度：P2T 本地初蒸 → 质检 → MinerU 云端精修

用法：
    python run_pipeline.py --pdf 书.pdf --out ./work/
                           [--skip-p2t] [--dry-run] [--threshold 30]
                           [--start 1 --end 0] [--language ch]

产物（--out 下）：
    distill/page_XXXX.md   P2T 页级 md
    distill/meta.json      P2T 元信息
    suspicious.json        可疑页清单
    refined/book.md        最终整书 md（精修页已替换）
    refined/refined_pages.json  精修区间明细
"""
import argparse
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def run(cmd, step):
    print(f"\n=== [{step}] {cmd[0]} {' '.join(cmd[1:])} ===", flush=True)
    r = subprocess.run([sys.executable] + cmd, cwd=HERE)
    if r.returncode != 0:
        sys.exit(f"[{step}] 失败（exit {r.returncode}）")
    print(f"=== [{step}] 完成 ===\n", flush=True)


def main():
    ap = argparse.ArgumentParser(description="公式书蒸馏调度：P2T 初蒸 → 质检 → MinerU 精修")
    ap.add_argument("--pdf", required=True, help="输入 PDF")
    ap.add_argument("--out", required=True, help="工作目录")
    ap.add_argument("--skip-p2t", action="store_true", help="跳过 P2T 阶段（已有 distill/）")
    ap.add_argument("--dry-run", action="store_true", help="精修阶段只列区间计划")
    ap.add_argument("--threshold", type=int, default=30, help="可疑页阈值（默认 30）")
    ap.add_argument("--start", type=int, default=1, help="P2T 起始页")
    ap.add_argument("--end", type=int, default=0, help="P2T 结束页（0=全书）")
    ap.add_argument("--language", default="ch", help="MinerU 解析语言（默认 ch）")
    ap.add_argument("--languages", default="en,ch_sim", help="P2T OCR 语言")
    args = ap.parse_args()

    if not os.path.isfile(args.pdf):
        sys.exit(f"PDF 不存在: {args.pdf}")
    os.makedirs(args.out, exist_ok=True)
    distill = os.path.join(args.out, "distill")
    refined = os.path.join(args.out, "refined")
    os.makedirs(distill, exist_ok=True)
    os.makedirs(refined, exist_ok=True)

    if not args.skip_p2t:
        run(["p2t_batch.py", "--pdf", args.pdf, "--out", distill,
             "--start", str(args.start), "--end", str(args.end),
             "--languages", args.languages], "阶段1 P2T 本地蒸馏")

    susp = os.path.join(args.out, "suspicious.json")
    run(["quality_scanner.py", "--md-dir", distill, "--threshold",
         str(args.threshold), "--out", susp,
         "--report", os.path.join(args.out, "report.json")], "阶段2 质检")

    cmd = ["mineru_refine.py", "--pdf", args.pdf, "--md-dir", distill,
           "--suspicious", susp, "--out", refined, "--language", args.language]
    if args.dry_run:
        cmd.append("--dry-run")
    run(cmd, "阶段3 MinerU 云端精修")

    print("\n完成。最终整书：", os.path.join(refined, "book.md"))


if __name__ == "__main__":
    main()