import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { User } from "@/schema/userSchema";
import { user } from "@/type/type";
import mongoose from "mongoose";
import { Session, getServerSession } from "next-auth";

export default async function serverAuth(){
    const session: Session | null = await getServerSession(authOptions)
    if(!session){
        return null
    }
    await mongoose.connect(process.env.MONGODB_URL!)
    let _currentUser: user|null = await User.findOne({
        email : session?.user?.email
    })
   const { _id , name , email , image , username ,bio , location , profileBanner , dob ,passion , createdAt , updatedAt} = _currentUser as user
   const id = _id!.toString()
   const currentUser: user = {
       id, name, email, image , username ,bio , location , profileBanner , dob , passion , createdAt , updatedAt
   }
    return  currentUser 

}



