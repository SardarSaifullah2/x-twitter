'use client'
import { FaApple, FaGoogle } from "react-icons/fa6"
import {signIn} from 'next-auth/react'
import googleIcon from '../../public/goole.svg'
import githubIcon from '../../public/github.svg'
import Image from 'next/image'
export const LoginComponent = () =>{
    return(
        <div className="flex flex-col gap-3">
             <div className="bg-white flex items-center max-w-[350px] gap-4 justify-center py-[15px] px-[50px] border-2 border-[#E4EAED] rounded-full cursor-pointer hover:text-black" onClick={()=> signIn('google')} >
                <Image src={googleIcon} width={30} height={30} alt="image"></Image>
                <h5 className="text-[#0f1419] font-medium text-[20px]">Sign up with Google</h5>
             </div>
             <div className="bg-white flex items-center max-w-[350px] gap-4 justify-center py-[15px] px-[50px] border-2 border-[#E4EAED] rounded-full cursor-pointer hover:text-black" onClick={()=> signIn('github')} >
                <Image src={githubIcon} width={30} height={30} alt="image"></Image>
                <h5 className="text-[#0f1419] font-medium text-[20px]">Sign up with Github</h5>
             </div>
        </div>
    )
}