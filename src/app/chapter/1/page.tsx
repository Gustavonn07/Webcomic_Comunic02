'use client'

import { panels } from './pannels'
import ComicImage from '@/components/ComicImage'
import { useState } from 'react'

export default function Chapter1Page() {
  const [index, setIndex] = useState(0)
  const [panel, setPanel] = useState(0)

  const change = () => {
    const isAfter6thPanel = index >= 5;
    const isEvenIndex = index % 2 === 0;

    if(isEvenIndex && !isAfter6thPanel) {
      setPanel(0)
    }

    if(!isEvenIndex && !isAfter6thPanel) {
      setPanel(1)
    }

    if(isAfter6thPanel) {
      setPanel(prev => prev + 1)
    }

    setIndex(prev => prev + 1)
  }

  return (
    <div
      onClick={change}
      className="cursor-pointer select-none"
    >
      <ComicImage {...panels[panel]} />
    </div>
  )
}
