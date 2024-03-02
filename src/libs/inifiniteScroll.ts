'use client'
import useSWRInfinite from "swr/infinite"
import { fetcher } from "./fetcher"

export function GetInfinite({url}:{url:string}){
    const {data ,size , setSize , mutate , isLoading} = useSWRInfinite((index)=>`${url}page_index=${index}&limit=5` , fetcher)
    const dataLenght:number = data?.length!
    const IsReachEnd = data && data?.[data.length -1]?.length < 2 
    const pagedata = data?.flat()
    return { pagedata, setSize , size , mutate , isLoading, IsReachEnd}
}    
