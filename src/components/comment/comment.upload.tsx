'use client'
import { PostInt, user } from "@/type/type";
import { useEffect, useState } from "react";
import PostUpload from "../postUpload";
interface CommentInt{
    post: PostInt ;
    CurrentUser : user;
}
const Comment:React.FC<CommentInt> = ({post }:{post:PostInt}) => {
    return(
        <div className="p-4">
            <PostUpload parent={post?._id}/>
        </div>
    )
}
export default Comment;