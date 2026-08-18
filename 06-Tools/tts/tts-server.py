import io
import logging
import os
import sys
import time
import wave

import numpy as np
import uvicorn
from fastapi import FastAPI
from fastapi.responses import Response

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("tts-server")

MODEL_DIR = os.environ.get(
    "TTS_MODEL_DIR",
    r"E:\Projects\AI-Teacher-System\06-Tools\tts\models\Qwen3-TTS-12Hz-0.6B-CustomVoice",
)
DEFAULT_INSTRUCT = "请用温和、耐心、清晰自然的语气讲课。"

VOICE_MAP = {
    "xiaoxiao": "Serena",
    "xiaoyi": "Cherry",
    "yunxi": "Dylan",
    "yunjian": "Uncle_Fu",
    "yunyang": "John",
    "serena": "Serena",
    "dylan": "Dylan",
    "uncle_fu": "Uncle_Fu",
    "cherry": "Cherry",
    "vivian": "Vivian",
    "john": "John",
}

app = FastAPI()
model = None


@app.on_event("startup")
def load_model():
    global model
    from qwen_tts import Qwen3TTSModel

    log.info("loading model %s", MODEL_DIR)
    t0 = time.time()
    model = Qwen3TTSModel.from_pretrained(MODEL_DIR, device_map="cpu")
    log.info("model loaded in %.1fs", time.time() - t0)


@app.post("/tts")
def synthesize(req: dict):
    text = (req.get("text") or "").strip()
    if not text:
        return Response(status_code=400, content="empty text")
    speaker_raw = req.get("voice") or "xiaoxiao"
    speaker = VOICE_MAP.get(speaker_raw.lower(), "Serena")
    instruct = req.get("instruct") or DEFAULT_INSTRUCT

    log.info("synth voice=%s text=%s", speaker, text[:40])
    t0 = time.time()
    waveform, sr = model.generate_custom_voice(text, language="Chinese", speaker=speaker, instruct=instruct)
    elapsed = time.time() - t0
    log.info("synth done %.1fs sr=%s len=%.2fs", elapsed, sr, len(waveform) / sr)

    buf = io.BytesIO()
    with wave.open(buf, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes((np.clip(np.asarray(waveform, dtype=np.float32), -1, 1) * 32767).astype("int16").tobytes())
    return Response(content=buf.getvalue(), media_type="audio/wav")


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    uvicorn.run(app, host="127.0.0.1", port=port, log_level="warning")