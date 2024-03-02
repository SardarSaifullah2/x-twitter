'use server'
import Connect from "@/libs/connect"
import { FormValueInt } from "./profileData"
import serverAuth from "@/libs/serverAuth"
import { Post } from "@/schema/postSchema"
import { RedirectType, redirect } from "next/navigation"

export async function PostData(formData:FormData){
    const currentUser = await serverAuth()
    if(!currentUser){
        return redirect('/login' , RedirectType.replace)
    }
    const FormLable = ["image" , "body" , "postId" , "parent"]
    
    let FormData : FormValueInt = {}

    for ( const field of FormLable){
        if(formData.has(field)){
            FormData[field] = formData.get(field)
        }
    }
    FormData = {userId : currentUser?.id! , ...FormData}
    Connect()
    const data = await Post.create(FormData)
    if(formData.has('parent')){
        const addComment = await Post.findOneAndUpdate(
            { _id : FormData?.parent } ,
            { $push : { comment : data?._id } } ,
            { new : true }
        )
    }
    return true
}