import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

export function Logo(){
    return(
        <Link href={`/`} className="w-fit p-2 rounded-full hover:bg-blue-100 transition duration-700 cursor-pointer hidden md:block mb-[20px]">
            <FaTwitter className="w-[30px] h-[30px] text-blue-400" />
        </Link>
    
    )
}