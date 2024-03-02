import Connect from "@/libs/connect"
import { Post } from "@/schema/postSchema"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest , {params}:{params:{id:string}}){
    const post =  params?.id
  
      if(post.length < 24){
          return NextResponse.json(null)
      } 
    Connect()
    const getReply = await Post.find({
        parent : post
    }).populate('userId')
  
    return NextResponse.json(getReply)
}
