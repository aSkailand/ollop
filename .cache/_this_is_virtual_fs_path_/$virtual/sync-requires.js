
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/skailand/dev/ollop/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/skailand/dev/ollop/src/pages/404.tsx")),
  "component---src-pages-auth-tsx": preferDefault(require("/Users/skailand/dev/ollop/src/pages/auth.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/skailand/dev/ollop/src/pages/index.tsx"))
}

