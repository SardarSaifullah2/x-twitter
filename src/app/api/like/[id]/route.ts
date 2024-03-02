import Connect from "@/libs/connect";
import serverAuth from "@/libs/serverAuth";
import { Post } from "@/schema/postSchema";
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req:NextRequest , {params}:{params:{id:string}}){
    const currentUser = await serverAuth()
    Connect()
    const findPost = await Post.findOneAndUpdate({_id : params.id } , {$pull : {likeId : currentUser?.id }})
   return NextResponse.json(true)
}


export async function POST(req:NextRequest , {params}:{params:{id:string}}){
    const currentUser = await serverAuth()
    Connect()
    const findPost = await Post.findOneAndUpdate({_id : params.id } , {$push : {likeId : currentUser?.id }})
    return NextResponse.json(true)

}