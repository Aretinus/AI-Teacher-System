# djvulibre（DjVuLibre 3.5.29）

DjVu 文本层抽取工具，供 `tools/acquire/book_formats.py` 的 `_djvu_sections()` 在 PyMuPDF 无法抽取 DjVu 文本时降级调用（`_find_djvutxt()` 优先本项目 `vendor/djvulibre/`，其次系统 PATH）。

## 为什么需要

- PyMuPDF 官方 wheel 不含 DjVu 解码；新版能打开 DjVu 文件但抽不出隐藏文本层（返回空）。
- DjVu 分两种：带隐藏文本层（TXTz 块）的可直接蒸馏；纯扫描（仅图像块）的必须先经 OCR（见 `06-Tools/ocr-toolkit/`）。
- 本目录只放蒸馏侧需要的 `djvutxt.exe` + 依赖 DLL；完整工具集（ddjvu/djvudump 等）在 `06-Tools/ocr-toolkit/bin/`。

## 文件说明

| 文件 | 说明 |
|---|---|
| `djvutxt.exe` | 提取 DjVu 隐藏文本层（DjVuLibre 3.5.29 官方 Windows 构建） |
| `libdjvulibre.dll` | 核心解码库 |
| `libcrypto-1_1.dll` / `libssl-1_1.dll` | 加密/证书依赖 |
| `libjpeg.dll` / `libtiff.dll` / `libz.dll` | 图像/压缩依赖 |

## 验证

```bash
python -c "import sys; sys.path.insert(0, 'tools/acquire'); from book_formats import _find_djvutxt; print(_find_djvutxt())"
# 输出本目录 djvutxt.exe 路径即生效
```

## 更新

升级版本时从 https://sourceforge.net/projects/djvu/ 下载新安装包解包，同步替换 `djvutxt.exe` 与全部依赖 DLL，并保持 `06-Tools/ocr-toolkit/bin/` 版本一致。
