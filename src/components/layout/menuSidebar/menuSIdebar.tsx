import Button from "@/components/ui/button";
import { Logo } from "./logo";
import { Menu } from "./menu";
import serverAuth from "@/libs/serverAuth";
import Username from "@/components/ui/username";
import { RedirectType, redirect } from "next/navigation";

const MenuSideBar = async() =>{
    const currentUser = await serverAuth()
    if(!currentUser){ 
        return redirect('/login' , RedirectType.replace)
    }
    return(
        <div className="md:px-4 py-1 w-0 md:w-[80px] lg:w-[220px] relative">
            <div className="fixed z-[998]">
                <Logo/>
                <Menu currentUser={currentUser!}/>
                <Username currentUser={currentUser!}/>
            </div>
        </div>
    )
}
export default MenuSideBar;