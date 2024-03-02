import Connect from "@/libs/connect";
import { Post } from "@/schema/postSchema";
import { PostInt, user } from "@/type/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req : NextRequest , {params} 
    : {params: { id : string}}
    ){
        
    const _id =  params?.id
  
      if(_id.length < 24){
          return NextResponse.json(null)
      } 
    else{

        Connect();
        const findPost : PostInt[] | null = await Post.findOne({
            _id
        }).populate('userId').populate('parent').populate({
            path : 'parent' ,
            populate : {
                path : 'userId'
            }
        })
        if(!findPost){
            return NextResponse.json(null)
        }

        return NextResponse.json(findPost)
    }

}