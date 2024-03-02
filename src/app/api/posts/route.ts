import Connect from "@/libs/connect";
import { Post } from "@/schema/postSchema";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
        const url = req.nextUrl;
        const userId = url.searchParams.get('userId')
        const Page_index:number = parseInt(url.searchParams.get('page_index')!)
        const Limit:number = parseInt(url.searchParams.get('limit')!)
        const skipPost:number = Limit * Page_index
        Connect();
        let posts
        if(userId){
                posts = await Post.find({userId : userId , parent : null}).populate('userId').skip(skipPost).limit(Limit)
                return NextResponse.json(posts) 
        }
        else{
                posts = await Post.find({parent : null}).populate('userId').skip(skipPost).limit(Limit)
                return NextResponse.json(posts) 
        }
}