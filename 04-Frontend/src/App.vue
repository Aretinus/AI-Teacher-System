<script>
import { applyTheme, currentTheme } from './utils/theme'

export default {
  onLaunch() {
    console.log('App Launch')
    applyTheme(currentTheme())
  },
}
</script>

<style>
@import './styles/theme.css';

page {
  background-color: var(--bg-page);
  color: var(--text-1);
  font-size: 28rpx;
}
</style>