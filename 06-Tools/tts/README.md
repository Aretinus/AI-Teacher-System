# 本地 TTS（Qwen3-TTS）

本地文本转语音服务，后端 `/api/tts` 的本地引擎（`engine: auto` 时优先，失败自动回落 Edge）。

## 组成

| 路径 | 内容 | 入库 |
|---|---|---|
| `tts-server.py` | FastAPI 服务：`POST /tts` → 24000Hz 单声道 16-bit WAV | 是 |
| `venv/` | Python 3.12 虚拟环境（torch CPU + qwen-tts + modelscope） | 否（拷贝或重建） |
| `models/Qwen3-TTS-12Hz-0.6B-CustomVoice/` | 模型权重（约 1.7GB safetensors，ModelScope 下载） | 否 |

## 环境搭建

```bat
:: 1. Python 3.12（需管理员权限安装：系统策略可能阻止普通权限安装，报错 0x659=1625 时用 RunAs）
:: 2. 创建 venv 并安装依赖（torch CPU 版从清华镜像下载）
cd 06-Tools\tts
py -3.12 -m venv venv
venv\Scripts\pip install -i https://pypi.tuna.tsinghua.edu.cn/simple torch torchaudio --index-url https://download.pytorch.org/whl/cpu
venv\Scripts\pip install -i https://pypi.tuna.tsinghua.edu.cn/simple qwen-tts modelscope fastapi uvicorn
```

> 提示：`flash-attn` 未安装（Windows 无预编译包）会打印 SoX 相关警告，可忽略；CPU 推理可用。

## 模型下载

```bat
venv\Scripts\python -m modelscope download --model Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice --local_dir models\Qwen3-TTS-12Hz-0.6B-CustomVoice
```

## 启动服务

```bat
venv\Scripts\python tts-server.py
:: 监听 http://127.0.0.1:8765
```

模型目录可用环境变量覆盖（便于 R7000 GPU 机迁移）：

```bat
set TTS_MODEL_DIR=E:\Models\Qwen3-TTS-12Hz-0.6B-CustomVoice
venv\Scripts\python tts-server.py
```

## 接口

```
POST /tts
body: { "text": "你好", "voice": "xiaoxiao" }   # voice 可选，VOICE_MAP 中不存在时回落默认
resp: WAV 音频（24000Hz mono 16bit）
```

内置音色映射（简名 → 模型音色）：`xiaoxiao→Serena`、`yunxi→Dylan`、`yunjian→Uncle_Fu`、`xiaoyi→Cherry` 等。

## 性能与策略

| 场景 | 耗时 |
|---|---|
| 15 字 | ~29s（CPU） |
| 34 字 | ~34s（CPU） |
| 62 字 | ~127s（CPU） |

CPU（i5-8250U）下实时性不可用，因此默认策略为 **engine: auto**（见 `03-Backend/tts-config.json`）：

- 不开本服务 → 后端自动走 Edge（免费在线 TTS，约 2.5s）
- 开本服务 → 后端先请求本地（超时 180s），失败再回落 Edge
- **R7000 GPU 机**：装好依赖后启动本服务即自动启用本地音色，代码零改动

## 与前端的关系

- 音色**选择**由前端负责（`localStorage.ttsVoice`，22 个 Edge 音色 + 本地映射）
- 音色**不可用**时前端自动提示并切回默认（晓晓），见 `04-Frontend/src/services/tts.js`