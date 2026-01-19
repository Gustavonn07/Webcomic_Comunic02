'use client'

import MDXWrapper from '@/components/MDXWrapper'

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '2rem',
        lineHeight: 1.7,
        fontSize: '1.1rem',
      }}
    >
      <MDXWrapper>{children}</MDXWrapper>
    </body>
  )
}
