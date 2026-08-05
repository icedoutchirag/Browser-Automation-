"use client"

import * as Sentry from "@sentry/nextjs"
import NextError from "next/error"
import { useEffect } from "react"

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center p-6 bg-black text-white font-sans">
        <div className="max-w-md rounded-lg border border-red-500/30 bg-red-950/20 p-6 space-y-4">
          <h1 className="text-xl font-semibold text-red-400">Application Error</h1>
          <p className="text-sm font-mono text-gray-300 break-words">{error?.message || "An unexpected error occurred."}</p>
        </div>
      </body>
    </html>
  )
}
