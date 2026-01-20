'use client'
import '@/styles/global.css'
import MDXWrapper from '@/components/MDXWrapper'

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const style = {
    lineHeight: 1.7,
    fontSize: '1.1rem',
  }

  return (
    <html>
      <body
        style={style}
      >
        <MDXWrapper>{children}</MDXWrapper>
      </body>
    </html>
  )
}
