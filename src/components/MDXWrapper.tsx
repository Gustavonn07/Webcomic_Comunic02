'use client'

import { MDXProvider } from '@mdx-js/react'
import Balloon from './Balloon'
import ComicImage from './ComicImage'

const components = {
  Balloon,
  ComicImage,
}

export default function MDXWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
