import Connect from "@/libs/connect";
import { User } from "@/schema/userSchema";
import { json } from "stream/consumers";

export async function GetUser(username: string){
    Connect()
    const findUser = await User.findOne({username})
    if(!findUser){
        return null
    }
    return findUser
}