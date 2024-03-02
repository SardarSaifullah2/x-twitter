'use client'
import { user } from "@/type/type";
import { Dialog, DialogTitle } from "@mui/material";
import { useState , useEffect, useMemo } from "react";
import Input from "./input";
import Button from "./button";
import toast from "react-hot-toast";
import { SetUsername } from "@/actions/profileData";
import { RedirectType, redirect, useRouter } from "next/navigation";
import { Router } from "next/router";


const Username = ({currentUser}:{currentUser:user}) =>{
    const [PopUp , setPopUp] = useState<boolean>(false)
    const [username , setUsername] = useState<string>('')
    const handle = useMemo(() => {
      return currentUser && currentUser.username;
    }, [currentUser]);
    const router = useRouter()
    useEffect(() => {
      if (!handle) {
        setPopUp(true);
      }
    }, [handle]);
    
    const submitUsername = async() =>{
      if(username === '' || username === undefined){
        toast.error('Your Field is Empty')
        return null
      }
      else{
        const result = await SetUsername(username) 
        toast.success(`Well Done..!`)
        await router.push(`/${username}`)
        setPopUp(false)
      }
    }
    return(
        <div>
            <Dialog open={PopUp} >
              <div className="w-full p-4 md:w-[550px] flex flex-col gap-4 ">
                  <h2 className="text-[1.25rem] font-medium text-[#000000DE]">UserName</h2>
                  <div className="flex flex-col gap-2">
                    <Input id="username" value={username} Fn={setUsername} type="text" placeholder="Enter Your Username ....!" label=""/>
                    <Button title="Let's Rock" sumbit={submitUsername}/> 
                  </div>
              </div>
            </Dialog>
        </div>
    )
}
export default Username;