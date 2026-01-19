'use client'

import { MDXProvider } from '@mdx-js/react'

export default function MDXWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <MDXProvider>{children}</MDXProvider>
}
