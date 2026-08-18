import { useEffect } from 'react'

// SPA route change doesn't touch <head>, so each page sets its own
// title/description on mount.
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}
