'use client'

import Balloon from '@/components/Balloon'
import ComicImage from '@/components/ComicImage'
import { VariantTypes } from '@/types/BalloonVariants'
import { cn } from '@/utils/cn'
import { useState } from 'react'

export default function Chapter2Page() {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <div className="relative select-none w-[180vh] h-[100vw] md:w-11/12 md:h-full">
      <ComicImage
        src="/chapter-2/Prancheta-6.png"
        alt="Painel 6"
        width={720}
        height={405}
        className={cn('w-[180vh] md:w-full md:h-full h-[300vw]')}
        onLoaded={() => setLoaded(true)}
      />
      {loaded && (
      <>
        <Balloon
            variant={VariantTypes.WAVE}
            className="
              absolute

              portrait:left-[46%]
              portrait:bottom-[13%]

              landscape:left-[46%]
              sm:landscape:bottom-[-169%]
              md:landscape:bottom-[7%]
              lg:landscape:bottom-[11%]

              scale-80
              md:scale-60
              lg:scale-100
              hover:scale-105
              3xl:scale-120
            "
          />

          <Balloon
            variant={VariantTypes.WALK}
            className="
              absolute

              portrait:left-[32%]
              portrait:bottom-[10%]

              landscape:left-[60%]
              sm:landscape:bottom-[-170%]
              md:landscape:bottom-[8%]
              lg:landscape:bottom-[10.5%]

              scale-80
              md:scale-60
              lg:scale-100
              hover:scale-105
              3xl:scale-120
            "
          />

          <Balloon
            variant={VariantTypes.SCREAM}
            className="
              absolute

              portrait:left-[60%]
              portrait:bottom-[9%]

              landscape:left-[31%]
              sm:landscape:bottom-[-170.5%]
              md:landscape:bottom-[8.5%]
              lg:landscape:bottom-[11%]

              scale-80
              sm:scale-70
              md:scale-60
              lg:scale-100
              hover:scale-105
              3xl:scale-120
            "
          />
      </>
    )}
    </div>
  )
}
