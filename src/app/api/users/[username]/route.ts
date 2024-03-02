import Connect from "@/libs/connect";
import { User } from "@/schema/userSchema";
import { user } from "@/type/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req : NextRequest , {params} 
    : {params: { username : string}}
    ){
    const username = params?.username
        Connect();
        const findUser : user | null = await User.findOne({
            username : username
        })
        if(!findUser){
            return NextResponse.json(null)
        }

        return NextResponse.json(findUser)

}