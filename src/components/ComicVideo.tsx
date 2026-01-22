'use client'

import { cn } from '@/utils/cn'

interface ComicVideoProps {
  src: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  onEnded?: () => void
}

export default function ComicVideo({
  src,
  className,
  autoPlay = true,
  loop = false,
  muted = true,
  controls = false,
  onEnded,
}: ComicVideoProps) {
  return (
    <video
      className={cn(
        'w-full h-full object-contain select-none',
        className
      )}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
      preload="auto"
      onEnded={onEnded}
    />
  )
}
