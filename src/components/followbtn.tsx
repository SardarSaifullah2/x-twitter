'use client'
import { useFollow } from "@/hooks/useFollow"
import { user } from "@/type/type"

export function FollowBtn({profileUser , currentUser}:{profileUser:user , currentUser:user }){
    const {toggleFollowed , hasFollowed}=useFollow({cUser:currentUser , pUser:profileUser})
    const onFollow = async ()=>{
        if(currentUser === null){
            return ;
        }
        await toggleFollowed()
    }
    return(
        <button className={`border border-black/30  transition duration-500 py-[6px] px-[16px] text-[18px] font-bold rounded-full  ${hasFollowed ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={onFollow}>{ hasFollowed ? "followed" : "follow"}</button>

    )
}