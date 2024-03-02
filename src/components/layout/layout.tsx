import { Toaster } from "react-hot-toast";
import MenuSideBar from "./menuSidebar/menuSIdebar";
import { UserSidebar } from "./userSidebar/userSidebar";
import BioModel from "@/models/Bio";
import serverAuth from "@/libs/serverAuth";
import { redirect } from "next/navigation";

const Layout = async({children}:{children : React.ReactNode}) =>{
    const currentUser = await serverAuth()
    if(!currentUser){
        redirect('/login')
        return ;
    }
    return(
        <main className="max-w-[1200px] min-h-screen mx-auto flex  flex-nowrap justify-between ">
            {/* <PostUploadModel/> */}
            <BioModel/>
            <Toaster/>
            <MenuSideBar/>
            <div className='flex-[1] pb-[60px] md:pb-0 border-x border-gray/20'>
                {children}
            </div>
            <UserSidebar CurrentUser={currentUser}/>
        </main>
    )
}

export default Layout;
