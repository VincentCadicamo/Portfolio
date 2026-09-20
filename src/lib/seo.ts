import { useEffect } from 'react'

const SITE = 'https://vincentcadicamo.dev'

function setTag(selector: string, create: () => HTMLElement, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) el = document.head.appendChild(create())
  el.setAttribute(selector.startsWith('link') ? 'href' : 'content', value)
}

/** Writes per-route <head> tags. The prerenderer bakes these into the static HTML. */
export function useSeo({ title, description, ogDescription, path }: {
  title: string
  /** Search-result snippet. Keep under ~155 chars. */
  description: string
  /** Social card copy. Defaults to `description`. */
  ogDescription?: string
  path: string
}) {
  useEffect(() => {
    document.title = title

    const meta = (name: string, attr: 'name' | 'property') => () => {
      const m = document.createElement('meta')
      m.setAttribute(attr, name)
      return m
    }

    setTag('meta[name="description"]', meta('description', 'name'), description)
    setTag('meta[property="og:title"]', meta('og:title', 'property'), title)
    setTag('meta[property="og:description"]', meta('og:description', 'property'), ogDescription ?? description)
    setTag('meta[property="og:url"]', meta('og:url', 'property'), SITE + path)
    setTag('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.rel = 'canonical'
      return l
    }, SITE + path)
  }, [title, description, ogDescription, path])
}
