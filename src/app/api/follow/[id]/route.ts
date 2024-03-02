import Post from "@/app/(default)/post/[id]/page"
import Connect from "@/libs/connect"
import serverAuth from "@/libs/serverAuth"
import { User } from "@/schema/userSchema"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req:NextRequest , {params}:{params:{id:string}}){
    const currentUser = await serverAuth()
    Connect()
    const findPost = await User.findOneAndUpdate(
        {_id : params.id },
        {$pull : {followingId : currentUser?.id }},
        {new : true}
    )
    await User.findOneAndUpdate(
        {_id : currentUser?.id} , 
        {$pull : {followedId : params?.id }} ,
        {new :true}
    )
   return NextResponse.json(true)
}


export async function POST(req:NextRequest , {params}:{params:{id:string}}){
    const currentUser = await serverAuth()
    Connect()
    const findPost = await User.findOneAndUpdate(
        {_id : params.id },
        {$push : {followingId : currentUser?.id }},
        {new : true}
    )
    await User.findOneAndUpdate(
        {_id : currentUser?.id} , 
        {$push : {followedId : params?.id }} ,
        {new :true}
    )
    return NextResponse.json(true)

}