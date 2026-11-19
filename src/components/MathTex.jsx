import React, { useMemo } from 'react'
import katex from 'katex'

export function M({ tex, className = '' }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { throwOnError: false, displayMode: false })
    } catch {
      return tex
    }
  }, [tex])

  return (
    <span
      className={`inline-block align-baseline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export function MBlock({ tex, className = '' }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { throwOnError: false, displayMode: true })
    } catch {
      return tex
    }
  }, [tex])

  return (
    <div
      className={`my-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 border-l-4 border-l-blue-700 overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
