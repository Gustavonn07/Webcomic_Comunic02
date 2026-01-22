'use client'

import ComicImage from '@/components/ComicImage'
import ComicVideo from '@/components/ComicVideo'
import { cn } from '@/utils/cn'

export default function Chapter3Page() {

  return (
    <div className="relative select-none max-w-450 md:w-11/12 md:h-full">
        <ComicImage
            src="/chapter-3/Prancheta-7.png"
            alt="Painel 6"
            width={720}
            height={405}
            className={cn('max-h-400 h-[190vh]')}
        />

        <div className="absolute h-175 w-175 -bottom-5 right-8 overflow-hidden">
            <ComicVideo
                src="/chapter-3/volney-molhado.mp4"
                className="w-full h-full"
                autoPlay
                muted
                loop
            />
        </div>
    </div>
  )
}
