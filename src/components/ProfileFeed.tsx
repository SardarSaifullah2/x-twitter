'use client'
import { GetInfinite } from "@/libs/inifiniteScroll";
import { PostItem } from "./postItem.ui";
import { user } from "@/type/type";
import InViewLoader from "./inViewLoader";

const ProfileFeed = ({userId , currentUser}:{userId:string , currentUser: user}) =>{
    const {pagedata:posts , IsReachEnd , size, setSize} = GetInfinite({url:`/api/posts?userId=${userId}&`})
    return(
        <main>
            {
                posts && posts?.map((item , index)=>{
                    return(
                        <PostItem CurrentUser={currentUser} post={item} key={index}/>
                    )
                })
            }
             {!IsReachEnd && <InViewLoader size={size} setSize={setSize}/>}

            {IsReachEnd === true ? (<div className="flex flex-col gap-1 items-center pb-[60px] mt-4"><h1 className="font-bold text-[30px] text-black">No More Posts</h1><p className="text-lg text-gray font-semibold">Refresh to see posts again</p></div> ) : ""}
        </main>
    )
}
export default ProfileFeed; 