'use client'
import { FollowBtn } from "@/components/followbtn"
import { SwrData } from "@/hooks/swr"
import { GetInfinite } from "@/libs/inifiniteScroll"
import { User } from "@/schema/userSchema"
import { user } from "@/type/type"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"

export  function UserSidebar({CurrentUser}:{CurrentUser:user}) {
   const {data:Users} = SwrData(`/api/users`)   
    return(
        <main className="hidden lg:block  w-[350px] h-fit rounded-xl relative m-3 ">
            <div className="fixed">
                <div className="mt-2">
                    <div className=' flex text-[16px] relative text-gray/40 focus-within:text-[#1d9bf0]'>
                            <FaSearch className=" absolute left-2 translate-y-[50%]"/>
                        <input type='text' placeholder="search Twitter" className="pl-[40px] text-black/70 p-1 bg-[#F7F9FA] w-full rounded-full outline-blue-300 focus:placeholder:text-black/70" />
                    </div>
                </div>
                <div className="w-[350px] h-fit  bg-[#F7F9FA]  p-4 flex flex-col gap-2 mt-3 rounded-xl">
                    <h1 className="font-bold text-lg text-black">Who to follow</h1>
                    <div>
                        {
                            Users && Users ?.map((item: user , index: number) =>{
                                return(
                                    <Link href={item?.username!} key={index}>
                                        <div className="flex gap-1 items-center p-2 my-1">
                                            <div style={{backgroundImage : `url(${item?.image})`}} className="w-[45px] h-[45px] rounded-full bg-cover bg-center">
                                            </div>
                                            <div className="flex justify-between items-center w-full flex-[1]">
                                                <div className="flex flex-col">
                                                    <h4 className="text-[16px] font-semibold text-black capitalize">{item?.name}</h4>
                                                    <h6 className="text-[16px] font-normal text-gray leading-[15px] lowercase">@{item?.username}</h6>
                                                </div>
                                                <FollowBtn profileUser={item} currentUser={CurrentUser}></FollowBtn>
                                                {/* <button className="bg-black text-white px-4 py-2 rounded-full  font-semibold text-[16px]">Follow</button> */}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}