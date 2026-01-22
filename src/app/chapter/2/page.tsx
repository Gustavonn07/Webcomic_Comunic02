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
        src="/chapter-2/Prancheta-1-full.png"
        alt="Painel 6"
        width={720}
        height={405}
        className={cn('w-[180vh] lg:w-full lg:h-full h-[300vw]')}
        onLoaded={() => setLoaded(true)}
      />
      { loaded && (<><Balloon variant={VariantTypes.WAVE} className='absolute lg:bottom-94 lg:left-118.75 lg:scale-100 scale-65 bottom-[-160vw] left-[23.5vw]' />
      <Balloon variant={VariantTypes.WALK} className='absolute lg:bottom-90 lg:left-230 lg:scale-100 scale-65 bottom-[-165vw] left-[52.5vw]' />
      <Balloon variant={VariantTypes.SCREAM} className='absolute lg:bottom-68 lg:left-170 lg:scale-100 scale-65 bottom-[-171vw] left-[35vw]' /></>)}
    </div>
  )
}
