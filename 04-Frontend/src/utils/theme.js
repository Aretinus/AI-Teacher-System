// 主题（浅色/深色）：持久化到 localStorage，应用到 <html data-theme>
export function applyTheme(t) {
  try {
    if (t === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      uni.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#14161c' })
    } else {
      document.documentElement.removeAttribute('data-theme')
      uni.setNavigationBarColor({ frontColor: '#000000', backgroundColor: '#ffffff' })
    }
  } catch (e) { /* 非 H5 环境或页面未就绪时忽略 */ }
}

export function currentTheme() {
  try { return uni.getStorageSync('appTheme') || 'light' } catch (e) { return 'light' }
}

export function setTheme(t) {
  try { uni.setStorageSync('appTheme', t) } catch (e) { /* 忽略 */ }
  applyTheme(t)
}
