import Connect from "@/libs/connect"
import { Post } from "@/schema/postSchema"
import { NextResponse , NextRequest } from "next/server"

export async function GET(req:NextRequest , {params}:{params:{id:string}}){
    const _id =  params?.id
  
    if(_id.length < 24){
        return NextResponse.json(null)
    } 
    Connect()
    const FindReplies = await Post.find({
        userId : _id ,
        parent : {$ne : null}
    }).populate('parent').populate('userId').populate({
        path: 'parent',
        populate: {
            path: 'userId'
        }
    })
    return NextResponse.json(FindReplies)
}