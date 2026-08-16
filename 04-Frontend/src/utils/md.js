import katex from 'katex'
import { marked } from 'marked'
import 'katex/dist/katex.min.css'

marked.setOptions({
  gfm: true,
  breaks: true,
})

const katexOpts = { throwOnError: false, strict: false }

const SAFE_TAGS = new Set([
  'div', 'span', 'p', 'b', 'i', 'em', 'strong', 'u', 's', 'br', 'hr', 'a', 'img',
  'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'blockquote',
  'pre', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sup', 'sub', 'mark',
  'del', 'ins', 'small', 'abbr', 'details', 'summary', 'kbd', 'caption',
])

function sanitizeHtml(raw) {
  return raw.replace(/<([a-zA-Z][a-zA-Z0-9-]*)([^>]*)>/g, (full, name, rest) => {
    const n = name.toLowerCase()
    if (!SAFE_TAGS.has(n)) return full.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    if (full.startsWith('</') || !rest.trim()) return `<${n}>`
    let keep = ''
    const attrs = [
      { name: 'href', test: (v) => /^(#|https?:|mailto:)/i.test(v) },
      { name: 'src', test: (v) => /^(https?:|data:image\/|blob:)/i.test(v) },
      { name: 'alt' },
      { name: 'colspan' },
      { name: 'rowspan' },
    ]
    for (const a of attrs) {
      const m = rest.match(new RegExp(`\\b${a.name}=("[^"]*"|'[^']*'|[^\\s>]+)`))
      if (!m) continue
      const v = m[1].replace(/^["']|["']$/g, '')
      if (a.test && !a.test(v)) continue
      keep += ` ${a.name}="${v.replace(/"/g, '&quot;')}"`
    }
    return `<${n}${keep}>`
  })
}

marked.use({
  renderer: {
    html(token) {
      return sanitizeHtml(token.text)
    },
  },
})

/**
 * 将 Markdown 文本渲染为 HTML：公式（$$...$$ 块级、$...$ 行内）用 KaTeX 渲染；
 * 原始 HTML 仅放行白名单标签，防止注入 style/script 破坏页面。
 * 流程：公式先替换为占位符 -> marked 渲染 -> 占位符替换为 KaTeX HTML。
 */
export function renderMarkdown(text) {
  if (!text) return ''
  const placeholders = []

  let t = String(text)
  t = t.replace(/\$\$([\s\S]+?)\$\$/g, (_, formula) => {
    placeholders.push(katex.renderToString(formula.trim(), { ...katexOpts, displayMode: true }))
    return `@@KATEX${placeholders.length - 1}@@`
  })
  t = t.replace(/\$([^$\n]+?)\$/g, (_, formula) => {
    placeholders.push(katex.renderToString(formula.trim(), { ...katexOpts, displayMode: false }))
    return `@@KATEX${placeholders.length - 1}@@`
  })

  let html = marked.parse(t)

  html = html.replace(/<p>@@KATEX(\d+)@@<\/p>/g, (_, i) => {
    return `<div class="katex-block">${placeholders[Number(i)]}</div>`
  })
  html = html.replace(/@@KATEX(\d+)@@/g, (_, i) => placeholders[Number(i)])
  return html
}