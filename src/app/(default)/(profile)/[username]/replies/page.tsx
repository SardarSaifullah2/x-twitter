import { GetUser } from "@/actions/getUser"
import ProfileReplies from "@/components/profile/replies"
import serverAuth from "@/libs/serverAuth"

export default async function replies({params}:{params:{username : string}}){
    const currentUser = await serverAuth()
    const getId = await GetUser(params?.username as string)
    let id = getId?._id?.toString()

    return(
        <div>
            <ProfileReplies repliesId={id} CurrentUser={currentUser!}/>
            <div className="flex flex-col gap-1 items-center pb-[60px] mt-4">
                <h1 className="font-bold text-[30px] text-black">No More Posts</h1>
                <p className="text-lg text-gray font-semibold">Refresh to see posts again</p>
            </div> 
        </div>
    )
}