'use client'

import { SourceType, SourceTypes, VariantType } from '@/types/BalloonVariants'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import React, { useState } from 'react'

interface BalloonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: VariantType
  handleClick?: () => void
}

export default function Balloon({ variant, className, handleClick, ...props }: BalloonProps) {
  const [sourceImageType, setSourceImageType] = useState<SourceType>(
    SourceTypes.DEFAULT
  )

  const imageSrc = `/chapter-2/${variant}-${sourceImageType}.png`

  return (
    <div
      {...props}
      onClick={() => {
        setSourceImageType(SourceTypes.CLICK)
        handleClick?.()
      }}
      onMouseEnter={() => setSourceImageType(SourceTypes.HOVER)}
      onMouseLeave={() => setSourceImageType(SourceTypes.DEFAULT)}
      className={cn(
        'transition-all duration-200 cursor-pointer hover:scale-105',
        className
      )}
    >
      <Image
        src={imageSrc}
        width={200}
        height={200}
        alt={`${variant} ${sourceImageType}`}
      />
    </div>
  )
}
