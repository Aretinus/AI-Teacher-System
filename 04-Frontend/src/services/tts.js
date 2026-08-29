export const DEFAULT_TTS_VOICE = 'xiaoxiao'
export const DEFAULT_TTS_ENGINE = 'edge' // edge=微软云端（快）/ local=Qwen3 本地（音质好但单次要几十秒）

export function getTtsVoice() {
  return uni.getStorageSync('ttsVoice') || DEFAULT_TTS_VOICE
}

export function setTtsVoice(v) {
  uni.setStorageSync('ttsVoice', v)
}

export function getTtsEngine() {
  return uni.getStorageSync('ttsEngine') || DEFAULT_TTS_ENGINE
}

export function setTtsEngine(e) {
  uni.setStorageSync('ttsEngine', e)
}

// 生成统一的 /api/tts 请求体：附带当前引擎选择
export function ttsBody(text, voice) {
  return JSON.stringify({ text, voice: voice || getTtsVoice(), engine: getTtsEngine() })
}

// 当前音色合成失败时调用：切换默认音色并提示，返回 true 表示已切换（可重试）
export function onTtsFail() {
  const cur = getTtsVoice()
  if (cur === DEFAULT_TTS_VOICE) return false
  setTtsVoice(DEFAULT_TTS_VOICE)
  uni.showToast({ title: '当前音色不可用，已切换为默认音色', icon: 'none' })
  return true
}