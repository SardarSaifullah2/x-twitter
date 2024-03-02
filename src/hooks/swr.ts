'use client'
import axios from "axios"
import { url } from "inspector"
import useSWR, { SWRConfig } from "swr"
export const fetcher = (url : string) => axios.get(url).then(res => res.data)
export const SwrData = (url : string) =>{
    const {data , mutate , isLoading} = useSWR(url , fetcher)
    return {data , mutate , isLoading}
}