import Connect from "@/libs/connect";
import serverAuth from "@/libs/serverAuth";
import { User } from "@/schema/userSchema";
import { user } from "@/type/type";
import { NextResponse } from "next/server";
import { AiOutlineConsoleSql } from "react-icons/ai";

export async function GET(){
    const currentUser = await serverAuth()
    Connect();
    const Users: user[] | null = await User.find(
        {_id : {$ne : currentUser?.id} }
    )
    return NextResponse.json(Users)
}