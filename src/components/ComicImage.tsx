'use client'

import Image from 'next/image'
import { cn } from '@/utils/cn'
import { useViewport } from '@/utils/hooks/useViewport'

interface ComicImageProps {
    src: string
    alt: string
    width: number
    height: number
    className?: string
}

export default function ComicImage({
    className,
    alt,
    ...props
}: ComicImageProps) {

    const viewport = useViewport();

    return (
        <figure className={cn({'w-full h-screen': viewport.isXl, 'w-[100vh] h-[100vw]': viewport.isSm}, className)}>
            <Image
                {...props}
                alt={alt}
                width={1300}
                className={cn("rounded-none", {'w-full h-screen': viewport.isXl, 'w-[100vh] h-[100vw]': viewport.isSm})}
            />
        </figure>
    )
}
