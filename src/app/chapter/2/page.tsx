'use client'

import { panels } from './pannels'
import ComicImage from '@/components/ComicImage'
import Balloon from '@/components/Balloon'
import { useState } from 'react'
import Image from 'next/image'

export default function Chapter1Page() {
  const [index, setIndex] = useState(1)
  const [panel, setPanel] = useState(0)

  // const change = () => {
  //   const isAfter6thPanel = index >= 5;
  //   const isEvenIndex = index % 2 === 0;

  //   if(isEvenIndex && !isAfter6thPanel) {
  //     setPanel(0)
  //   }

  //   if(!isEvenIndex && !isAfter6thPanel) {
  //     setPanel(1)
  //   }

  //   if(isAfter6thPanel) {
  //     setPanel(prev => prev + 1)
  //   }

  //   setIndex(prev => prev + 1)
  // }

  // const reverse = (e: React.MouseEvent) => {
  //   e.preventDefault()

  //   if(panel <= 0) return

  //   setPanel(prev => prev - 1)
  //   setIndex(prev => prev - 1)
  // }

  return (
    <div className="relative inline-block select-none">
      <ComicImage {...panels[panel]} />
      <div className="absolute bottom-4 left-4 z-10 max-w-xs">
        <Balloon>
          <Image 
            src="/chapter-2/Acenar-Default.png" 
            alt="Descrição"
            width={150}
            height={80}
            className="w-full rounded"
          />
        </Balloon>

        <Balloon>
          <Image 
            src="/chapter-2/Andar-Default.png" 
            alt="Descrição"
            width={150}
            height={80}
            className="w-full rounded"
          />
        </Balloon>
        
        <Balloon>
          <Image 
            src="/chapter-2/Gritar-Default.png" 
            alt="Descrição"
            width={150}
            height={80}
            className="w-full rounded"
          />
        </Balloon>
      </div>
    </div>
  )
}
