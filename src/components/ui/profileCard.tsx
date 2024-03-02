import Link from "next/link"
import { FollowBtn } from "../followbtn"
import { PostInt, user } from "@/type/type"
import Image from "next/image"

const ProfileCard = ({post , CurrentUser}:{post : PostInt , CurrentUser : user}) =>{
    return(
        <div className="absolute w-auto h-auto p-6 rounded-xl bg-white flex flex-col gap-4 shadow-2xl shadow-black/20"  >
            <div className="flex gap-2 items-start">
            {
                post?.userId?.image && <Image src={post?.userId?.image} width={48} height={48} className="rounded-full l w-[48px] h-[48px] object-cover" alt={"profile image"}></Image>      
            }
            <div className="flex gap-6">
            <Link href={`/${post?.userId?.username}`}  className="flex flex-col items-start gap-0 cursor-pointer">
                <h4 className="text-[16px] font-semibold capitalize text-black">{post?.userId?.name}</h4>
                <h6 className="text-[16px] font-semibold text-gray">@{post?.userId?.username}</h6>
            </Link>
                <FollowBtn profileUser={post?.userId} currentUser={CurrentUser}/>
            </div>
        </div>
        <div>
            <p className="line-clamp-1 text-gray text-semibold text-[16px]">{post?.userId?.bio}</p>
        </div>
        <div className="flex gap-2">
            <div className="text-black font-bold">1 <span className="text-gray font-normal">Follower</span></div>
            <div className="text-black font-bold">1 <span className="text-gray font-normal">Following</span></div>
        </div>
        </div>
    )
}
export default ProfileCard ;