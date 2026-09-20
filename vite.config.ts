import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

// vite-plugin-prerender ships a broken ESM build (its dist/index.mjs calls
// `require`), so load the CJS entry through the package's `require` condition.
const cjsRequire = createRequire(import.meta.url)
const vitePrerender = cjsRequire('vite-plugin-prerender') as typeof import('vite-plugin-prerender').default

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // The prerenderer drives puppeteer 1.x (Chromium 76), which cannot parse
  // optional chaining / nullish coalescing.
  build: {
    target: 'es2019',
  },
  plugins: [
      react(),
      Sitemap({
        hostname: 'https://vincentcadicamo.dev',
        dynamicRoutes: ['/projects'],
      }),
      vitePrerender({
          // The path to the vite-outputted app to prerender
          staticDir: path.join(rootDir, 'dist'),

          routes: ['/', '/projects'],

          renderer: new vitePrerender.PuppeteerRenderer({
              headless: true,
              maxConcurrentRoutes: 2,
              // Matches the event dispatched from src/main.tsx
              renderAfterDocumentEvent: 'custom-render-trigger',
          }),
      })
  ],
})