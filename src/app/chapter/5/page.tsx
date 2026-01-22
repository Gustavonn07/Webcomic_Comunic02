'use client'

import ComicImage from '@/components/ComicImage'
import { cn } from '@/utils/cn'

export default function Chapter5Page() {

  return (
    <div className="relative select-none max-w-450 md:w-11/12 md:h-full">
        <ComicImage
            src="/chapter-5/Prancheta-9-5-2.jpeg"
            alt="Painel 9"
            width={720}
            height={405}
            className={cn('h-[310vh]')}
        />
    </div>
  )
}
