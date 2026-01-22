'use client'

import { usePathname, useRouter } from "next/navigation"

export const GoBack = () => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if(pathname == '/chapter/1') {
            window.location.href = '/chapter/1'
            return
        }
        router.push('/chapter/1')
    }

    return (
        <div 
            className="fixed top-2 right-4 flex justify-center items-center z-100 cursor-pointer hover:-rotate-180 duration-150" onClick={handleClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#012E40" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8"/></svg>
        </div>
    )
}
