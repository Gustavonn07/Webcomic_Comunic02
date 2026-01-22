'use client'

import { cn } from '@/utils/cn'
import React, { useState, ReactNode } from 'react'

interface BalloonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Balloon({ children, ...props }: BalloonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    alert("Click");
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    alert("Hover");
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      {...props}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "rounded-lg border border-gray-800 bg-transparent p-2 shadow-md transition-all duration-200 cursor-pointer",
        isHovered && "shadow-lg scale-105",
        props.className
      )}
    >
      {children}
    </div>
  )
}
