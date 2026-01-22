'use client'

import ComicImage from '@/components/ComicImage'
import { cn } from '@/utils/cn'

export default function Chapter4Page() {

  return (
    <div className="relative select-none max-w-450 md:w-11/12 md:h-full">
        <ComicImage
            src="/chapter-4/cv-4.png"
            alt="Painel 8"
            width={720}
            height={405}
            className={cn('max-h-400 h-[190vh]')}
        />
    </div>
  )
}
