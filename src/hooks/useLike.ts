'use client'
import { useCallback, useMemo } from "react"
import axios from "axios"
import { GetInfinite } from "@/libs/inifiniteScroll"
import { SwrData } from "./swr"

export function useLike({postId , userId }:{postId: string , userId: string}){
    
    const{mutate:postsMutate} = GetInfinite({url : '/api/posts?'})
    const {pagedata:posts , mutate:profilePostMutate} = GetInfinite({url:`/api/posts?userId=${userId}&`})
    const {data: single , mutate: singlePost} = SwrData( postId && `/api/posts/${postId}`) 
    const {mutate:commentMutate} = SwrData(single?.parent && `/api/comment/${single?.parent._id}`)

    
    const hasLiked= useMemo(()=> {
        const list = single?.likeId || []
        return list.includes(userId)  
    } , [single , userId])
    
    
    const toggleLiked =useCallback(async()=>{
        let request ;
        try {
            if(hasLiked === true){
                request = () => axios.delete(`/api/like/${postId}?`);
            }
            else{
                request = () => axios.post(`/api/like/${postId}?`);

            }
            await request()
            commentMutate()
            postsMutate()
            profilePostMutate()
            singlePost()
        } catch (error) {
            throw new Error('Invalid the error')
        }
    },[ commentMutate , postsMutate , profilePostMutate , singlePost , hasLiked , postId])
   return {hasLiked , toggleLiked}
    
} 