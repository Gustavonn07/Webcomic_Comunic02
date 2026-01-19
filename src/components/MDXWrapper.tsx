'use client'

import { MDXProvider } from '@mdx-js/react'
import Balloon from './Balloon'

const components = {
  Balloon,
}

export default function MDXWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
