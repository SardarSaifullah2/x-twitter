'use client'

import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"

export const ProfileMenu = ({link , children }:{link : any , children : any}) =>{
    const segment = useSelectedLayoutSegment()
    const pathname = usePathname()
    const isActive = pathname === link 
    return(
        <div className="w-full">
            <li className="w-full p-[15px] hover:bg-gray/10">
            <div className={`w-fit mx-auto relative after:absolute after:content-[''] after:w-full after:h-[3px] ${ isActive && 'after:bg-blue-400'} after:bottom-[-15px] after:left-0`}>
                {link && <Link href={link}>{children}</Link>}
            </div>
          </li>
        </div>
    )
}