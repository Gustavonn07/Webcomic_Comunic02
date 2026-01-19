'use client'

import { cn } from '@/utils/cn'
import React from 'react'

interface BalloonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Balloon({ children, ...props }: BalloonProps) {
  return (
    <div
      {...props}
      className={cn("rounded-lg border border-gray-800 bg-white p-4 shadow-md", props.className)}
    >
      {children}
    </div>
  )
}
