'use client'
import { useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { SwrData } from "./swr";

export function useFollow({cUser , pUser}:{pUser : any , cUser : any}){
    const {data: SingleUserData , mutate:SingleUserMutateData} = SwrData(`/api/users/${pUser?.username}`)
    const hasFollowed : boolean = useMemo(() => {
      const list = SingleUserData?.followingId || []
      return list?.includes(cUser?.id)
  }, [SingleUserData , cUser])
  const toggleFollowed = async() =>{
    try {
        let request ;
        if(hasFollowed === true){
          request = () =>  axios.delete(`/api/follow/${pUser._id}`);
        }else{
          request = () =>  axios.post(`/api/follow/${pUser._id}`);
        }
        await request()
        await SingleUserMutateData()
        toast.success('done')
    } catch (error) {
        toast.error(`${error}`)
    }
  }

   return { hasFollowed ,toggleFollowed}
     
}