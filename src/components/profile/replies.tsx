'use client'
import { SwrData } from "@/hooks/swr";
import { GetInfinite } from "@/libs/inifiniteScroll";
import { useEffect } from "react";
import { PostItem } from "../postItem.ui";
import { PostInt, user } from "@/type/type";
import RepliesItem from "./repliesItem";
import Loader from "@/app/loader";

const ProfileReplies = ({repliesId , CurrentUser}:{repliesId : string , CurrentUser: user}) =>{
    const {data,mutate , isLoading} = SwrData(`/api/comment/profile/${repliesId}`)
    if(isLoading){
        return(
            <Loader/>
        )
    }
    return(
        <div>
           {data && data?.map((item:PostInt , index : number )=>{
            return(
                <div key={index}>
                    <RepliesItem item={item} CurrentUser={CurrentUser}/>
                </div>
            )
           })}
        </div>
    )
}
export default ProfileReplies;