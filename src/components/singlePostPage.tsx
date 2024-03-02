'use client'
import { PostItem } from "./postItem.ui"
import { PostInt, user } from "@/type/type"
import { SwrData } from "@/hooks/swr"
import Comment from "./comment/comment.upload"
import RepliesItem from "./profile/repliesItem"
import LoaderIcon from "./loader"
import NotFound from "./layout/notfound"

export const SinglePostPage = ({postId , CurrentUser} :{postId: string , CurrentUser:user}) =>{
  const {data: post, mutate , isLoading} = SwrData(`/api/posts/${postId}`)
   const{data:comment} = SwrData(`/api/comment/${postId}`)
   if(!isLoading && !post){
     return(
       <NotFound/>
     )
   }
  if(isLoading){
    return(
        <LoaderIcon/>
    )
  }
 
    return(
        <div>
            {post &&  
            <div>
                <div className={`flex flex-col gap-8 `}>
                {  
                    post?.parent !== null ? <RepliesItem item={post} CurrentUser={CurrentUser}/> : <PostItem post={post} CurrentUser={CurrentUser}/> 
                }
                </div>
                <Comment post={post} CurrentUser={CurrentUser}/>
                {comment?.length === 0 && <div className="bg-gray/10 w-full flex flex-col py-8 px-6">
                        <h4 className="text-black text-[26px] text-center font-bold">Your are The first one ...!</h4>
                        <p className="text-gray text-[16px] text-center font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div> }
                {
                    comment && comment?.map((item: PostInt , index:number) =>{
                        return(
                            <PostItem key={index} post={item} CurrentUser={CurrentUser}/>
                        )
                    })
                }

            </div>
             }
        </div>
    )
}