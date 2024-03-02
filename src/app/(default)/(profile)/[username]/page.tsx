'use sever'
import { GetUser } from "@/actions/getUser";
import ProfileFeed from "@/components/ProfileFeed";
import serverAuth from "@/libs/serverAuth";
import { RedirectType, redirect } from "next/navigation";

const UserProfile = async({params}:{params:{username:string}}) =>{
    const currentUser = await serverAuth()
    if(!currentUser){
        return redirect('/login' , RedirectType.replace)
    }
    const getId = await GetUser(params?.username as string)
    let id = getId?._id.toString()
    
    return(
        <div>
            <ProfileFeed userId={id} currentUser={currentUser!} />
        </div>
    )
}
export default UserProfile;