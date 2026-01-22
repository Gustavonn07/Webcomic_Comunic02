'use client'

import Balloon from '@/components/Balloon'
import ComicImage from '@/components/ComicImage'
import { VariantTypes } from '@/types/BalloonVariants'
import { cn } from '@/utils/cn'
import { useState } from 'react'

export default function Chapter2Page() {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <div className="relative select-none w-[180vh] h-[100vw] lg:w-11/12 lg:h-full">
      <ComicImage
        src="/chapter-2/Prancheta-6.png"
        alt="Painel 6"
        width={720}
        height={405}
        className={cn('w-[180vh] lg:w-full lg:h-full h-[300vw]')}
        onLoaded={() => setLoaded(true)}
      />
      { loaded && (<><Balloon variant={VariantTypes.WAVE} className='absolute bottom-[45vh] left-[48vw] scale-100 hover:scale-105 3xl:scale-125 hover:3xl:scale-150' />
      <Balloon variant={VariantTypes.WALK} className='absolute bottom-[45vh] left-[32.5vw] scale-100 hover:scale-105 3xl:scale-125 hover:3xl:scale-150' />
      <Balloon variant={VariantTypes.SCREAM} className='absolute bottom-[50vh] left-[60vw] scale-100 hover:scale-105 3xl:scale-125 hover:3xl:scale-150' /></>)}
    </div>
  )
}
