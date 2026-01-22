'use client'
import '@/styles/global.css'
import MDXWrapper from '@/components/MDXWrapper'
import { cn } from '@/utils/cn'
import { useOrientation } from '@/utils/hooks/useOrientation'
import { GoBack } from '@/components/GoBack'

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const style = {
    lineHeight: 1.7,
    fontSize: '1.1rem',
  }

  const isPortrait = useOrientation()

  return (
    <html>
      <title>Turma do Volney | Webcomic</title>
      <body
        style={style}
        className={cn('flex w-full justify-center bg-primary', {'rotate-90 justify-start': isPortrait})}
      >
        <GoBack />
        <MDXWrapper>{children}</MDXWrapper>
      </body>
    </html>
  )
}
