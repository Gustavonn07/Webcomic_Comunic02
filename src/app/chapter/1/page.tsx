'use client'

import { panels } from './pannels'
import ComicImage from '@/components/ComicImage'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Chapter1Page() {
  const router = useRouter();
  const [index, setIndex] = useState(1)
  const [panel, setPanel] = useState(0)

  const change = () => {
    const isAfter6thIndex = index >= 5;
    const isEvenIndex = index % 2 === 0;

    if(panel == 4) {
      router.replace('/chapter/2')
      return
    }

    if(isEvenIndex && !isAfter6thIndex) {
      setPanel(0)
    }

    if(!isEvenIndex && !isAfter6thIndex) {
      setPanel(1)
    }

    if(isAfter6thIndex) {
      setPanel(prev => prev + 1)
    }

    setIndex(prev => prev + 1)
  }

  const reverse = (e: React.MouseEvent) => {
    e.preventDefault()

    if(panel <= 0) return

    setPanel(prev => prev - 1)
    setIndex(prev => prev - 1)
  }

  return (
    <div
      onClick={change}
      onContextMenu={reverse}
      className="cursor-pointer select-none "
    >
      <ComicImage {...panels[panel]} />
    </div>
  )
}
