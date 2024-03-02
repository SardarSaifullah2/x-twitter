'use client'
import { RedirectType, redirect, usePathname } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";
import { HomeIcon as SolidHomeIcon} from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { HashtagIcon as SolidHashtagIcon } from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline"; 
import { BellAlertIcon as SolidBellAlertIcon} from "@heroicons/react/24/solid"; 
import { UserIcon } from "@heroicons/react/24/outline";  
import { UserIcon as SolidUserIcon } from "@heroicons/react/24/solid";  
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { user } from "@/type/type";
import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import PostUpload from "@/components/postUpload";
import Link from "next/link";

export function Menu({currentUser}:{currentUser:user}){
    const [Post , setPost] = useState(false)
    const pathname  = usePathname()
     if(!currentUser){
        return redirect('/login' , RedirectType.replace)
    }
    const menus = [
        {
            label : "Home" ,
            link : "/" ,
            icons : HomeIcon ,
            Solid : SolidHomeIcon ,

        },
        {
            label : "Explore",
            link : `/explore`,
            icons : HashtagIcon ,
            Solid : SolidHashtagIcon ,
            cursor : 'cursor-not-allowed'
        } ,
        {
            label : "Notification",
            link : `/notification`,
            icons : BellAlertIcon ,
            Solid : SolidBellAlertIcon ,
            auth : true,
            cursor : 'cursor-not-allowed'
        } ,
        {
            label : "Profile",
            link : `/${currentUser?.username}`,
            icons : UserIcon ,
            Solid : SolidUserIcon ,
            auth : true,

        } ,
        {
            label : "Message",
            link : `/message`,
            icons : EnvelopeIcon ,
            Solid: EnvelopeIcon,
            auth : true,
            cursor : 'cursor-not-allowed'
        } ,
    ] 
    //  Button Click Function 
    const tweetHandle=()=>{
        setPost(!Post)
    }
    const onPost = () =>{
        setPost(!Post)
    }
    return(
            <div className="flex flex-row md:flex-col items-center md:items-start justify-around md:justify-start gap-3 mt-3 fixed bottom-0  md:relative  w-full bg-white  ">
                {menus && menus.map((item , index)=>{
                    const activePath = pathname === item?.link
                    const Icon = item.icons
                    const Solid = item.Solid
                
                    return(
                        <Link href={item.link} className={`flex flex-row gap-2 items-center p-2 w-fit rounded-full ${item.cursor || 'cursor-pointer'} transition duration-1000 hover:bg-[#e5e7eb]/60 `} key={index}>
                            <div className="w-fit h-fit">{activePath ? <Solid className={`w-[28px] h-[28px]`}  />:<Icon className={`w-[28px] h-[28px]`} />}</div>
                            <div className="text-[16px] text-black font-normal hidden lg:block">{item.label}</div>
                        </Link>
                    )
                })}

                {/* popUPload popup */}
                <div className="hidden lg:block">
                    <Dialog open={Post} onClose={onPost}>
                    <DialogTitle>Upload Post!</DialogTitle>
                    <DialogContent>
                    <div className="w-[500px] mx-auto">
                        <PostUpload  setComment={setPost}/>
                    </div>

                    </DialogContent>
                    </Dialog>
                        <Button title="Tweet" sumbit={tweetHandle}/>
                </div>

            </div>        
    )
}
