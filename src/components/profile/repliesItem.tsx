'use client'
import { PostInt, user } from "@/type/type";
import PostBar from "../ui/postBar";
import Image from "next/image";
import { RedirectType, redirect } from "next/navigation";

const RepliesItem = ({item , CurrentUser}:{item:any , CurrentUser:user}) =>{
  if(!CurrentUser){
    return redirect('/login' , RedirectType.replace)
}
  return(
        <div>
            <div className="p-6 bg-gray-600/40">
        <div className="flex flex-row w-full items-start gap-2 relative">
          <div className="imageContainer">
            <Image
              src={item?.parent?.userId?.image}
              alt="Next.js Logo"
              className="w-[50px] h-[50px] rounded-full"
              width={50} height={50}
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                <h3 className="text-black text-[16px] font-semibold">
                    {item?.parent?.userId?.name}
                </h3>
                <h3 className="text-gray text-[16px] font-semibold">
                    @{item?.parent?.userId?.username}
                </h3>
                </div>            
            </div>
            <p className="text-gray text-[16px] font-semibold">
              {item?.parent?.body}
            </p>
          <PostBar post={item?.parent} CurrentUser={CurrentUser}/>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-600/40">
        <div className="flex flex-row w-full items-start gap-2 relative">
          <div className="">
            <Image
              src={item?.userId?.image}
              alt="Next.js Logo"
              className="w-[50px] h-[50px] rounded-full" 
              width={50} height={50}
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
          <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                <h3 className="text-black text-[16px] font-semibold">
                    {item?.userId?.name}
                </h3>
                <h3 className="text-gray text-[16px] font-semibold">
                    @{item?.userId?.username}
                </h3>
                </div>
            </div>
            <p className="text-gray-600/70 text-[16px] font-semibold">
              {item?.body}
            </p>
          <PostBar post={item} CurrentUser={CurrentUser}/>
          </div>
        </div>
      </div>
        </div>
    )
}
export default RepliesItem;