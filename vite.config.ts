import { defineConfig } from 'vite'
export default defineConfig({
  esbuild: {
    jsxInject:
      "import { h, Fragment } from './jsx/jsxFactory'",
  },
  server: {
    open: true,
  },
})
