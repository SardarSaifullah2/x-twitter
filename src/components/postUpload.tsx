import { ImageUpload } from "@/utils/imageUpload";
import Image from "next/image";
import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiImageOn } from "react-icons/ci";
import Button from "./ui/button";
import { PostData } from "@/actions/postUpload";
import { SwrData } from "@/hooks/swr";
import { GetInfinite } from "@/libs/inifiniteScroll";
import LoaderIcon from "./loader";

const PostUpload = ({parent , setComment}:{parent? : any , setComment?:React.Dispatch<SetStateAction<boolean>>}) =>{

    const {mutate: singlePost} = SwrData(parent && `/api/posts/${parent}`) 
    const{ mutate:PostsMutate } = GetInfinite({url : '/api/posts?'})
    const [postBody , setPostBody] = useState<string>('')
    const [ImageLink , setImageLink] = useState<string|null>(null)
    const upload = async (formData:FormData)=>{
        if(postBody === '' || postBody === undefined){
            toast.error('Your Post is Empty')
            return null
        }
        if(ImageLink && typeof ImageLink === 'string'){
            formData.set('image' , ImageLink)
        }
        if(parent){
            formData.set('parent' , parent)
        }
        const result = await PostData(formData)
        singlePost();
        PostsMutate()
        toast.success('Post Uploaded Sucessfully')
        setPostBody('')       
        setImageLink('') 
        if(setComment){
            setComment(false)
        }
    }
    const {data , isLoading} = SwrData('/api/currentUser')

    if(isLoading){
        return <div><LoaderIcon/></div>
    }
    const handleChange =async (ev : React.ChangeEvent<HTMLInputElement>  ) =>{
        const file  = ev.target.files?.[0]
        if(file){
            const result = await ImageUpload(file!)
            setImageLink(result)
        }
    }
    
    return(
        <main className="">
            <form action={upload}>
                <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-2">                
                    <div className="w-[50px]">
                      {data &&  <Image src={data?.image} alt="profileImage" width={50} height={50} className="relative z-10 w-[50px] h-[50px] rounded-full"></Image>
                      }
                    </div>
                    <div className="w-full min-h-[200px] flex-[1]">
                        <textarea placeholder="What's Happening ?" className="  w-full h-full outline-none p-2 resize-none" name="body" value={postBody} onChange={ev => setPostBody(ev.target.value)}></textarea>
                    </div>
                </div>
                {
                    ImageLink && <Image src={ImageLink} alt="uploaded image" width={80} height={80} className="relative z-10"/>
                }
                <div className="flex gap-4 items-center justify-between">
                    <label htmlFor="imageUpload">
                        <CiImageOn size={25} className="hover:text-blue-500 transition duration-1000 cursor-pointer" />
                        <input type='file' id="imageUpload" className="hidden" onChange={(ev) => handleChange(ev)}></input>
                    </label>
        
                    <Button title="Post" sumbit={()=> null}/>
                </div>
                </div> 
            </form>
        </main>
    )
}

export default PostUpload;