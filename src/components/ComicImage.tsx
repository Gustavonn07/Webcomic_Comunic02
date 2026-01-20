'use client'

import Image from 'next/image'
import { cn } from '@/utils/cn'

interface ComicImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ComicImage({
  className,
  alt,
  ...props
}: ComicImageProps) {
  return (
    <figure className={cn('w-full h-screen', className)}>
      <Image
        {...props}
        alt={alt}
        className="rounded-none w-full h-screen"
      />
    </figure>
  )
}
