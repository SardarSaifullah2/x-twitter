'use client'
import { GetInfinite } from "@/libs/inifiniteScroll";
import { PostInt, user } from "@/type/type";
import { useEffect, useState } from "react";
import { PostItem } from "./postItem.ui";
import InViewLoader from "./inViewLoader";
import PageHeader from "./ui/pageHeader";
// import { usePosts, useUser } from "@/hooks/useUser";

export function GeneralPost({CurrentUser }:{CurrentUser: user | null}){
    const{pagedata:postsData , size, setSize , IsReachEnd} = GetInfinite({url : '/api/posts?'})

    return (
        <div className="flex flex-col">
            <div className="h-fit w-full">
                {
                    postsData!?.length > 0 && postsData?.map((item : PostInt , index: number)=>{
                        return(
                            <PostItem post={item} key={index} CurrentUser={CurrentUser!}/>
                        )
                    })
                }
                {!IsReachEnd && <InViewLoader size={size} setSize={setSize}/>}

                {IsReachEnd === true ? (<div className="flex flex-col gap-1 items-center pb-[60px] mt-4"><h1 className="font-bold text-[30px] text-black">No More Posts</h1><p className="text-lg text-gray font-semibold">Refresh to see posts again</p></div> ) : ""}

            </div>
        </div>
    )
}