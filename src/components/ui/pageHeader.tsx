'use client'
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
interface PageHeaderInt {
    title : string ;
    send? : boolean;
}
const PageHeader: React.FC<PageHeaderInt> = ({title , send}) =>{
    const router = useRouter()
    return(
        <div className="sticky top-0 left-0 z-[99]">
            <div className="z-10 px-4 backdrop-blur-md sticky top-0 flex items-center p-4 gap-2 border-b border-gray/20">
            {send === true && <ArrowLeftIcon width={30} height={30} className="p-2 hover:bg-gray/15 transition duration-500 cursor-pointer rounded-full" onClick={() => router.back()}/>}
            <h5 className=" text-[20px] font-bold capitalize " >{title}</h5>
        </div>
        </div>
    )
}

export default PageHeader;