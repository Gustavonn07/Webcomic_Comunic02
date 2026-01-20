'use client'

import { useEffect, useState } from 'react'

/**
 * Hook personalizado para obter as dimensões da tela e pontos de breakpoints.
 * @returns {{
*   pageWidth: number;
*   pageHeight: number;
*   isSm: boolean;
*   isXl: boolean;
* }} Retorna as dimensões da tela e booleanos indicando os breakpoints.
*/

export const useViewport = () => {
  const [pageWidth, setPageWidth] = useState<number | null>(null)
  const [pageHeight, setPageHeight] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth)
      setPageHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    pageWidth,
    pageHeight,
    isSm: pageWidth !== null && pageWidth <= 770,
    isXl: pageWidth !== null && pageWidth > 770,
  }
}
