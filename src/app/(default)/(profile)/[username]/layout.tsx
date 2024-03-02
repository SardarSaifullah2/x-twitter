import { GetUser } from "@/actions/getUser";
import NotFound from "@/components/layout/notfound";
import { ProfileComponent } from "@/components/profile/UserDetail";
import PageHeader from "@/components/ui/pageHeader";
import serverAuth from "@/libs/serverAuth";
import { Metadata } from "next";
import { RedirectType, redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Twitter",
  description: "Discover a dynamic social media experience on our Next.js-based platform. Connect with friends, share moments, and explore a range of features designed to enhance your online interactions. Join us to stay connected and engaged like never before",
};
export default async function RootLayout({
    children,
    params
  }: {
    children: React.ReactNode;
    params : {username : string}
  }) {
    const user =await GetUser(params?.username)
    if(!user){
      return(
        <NotFound/>
      )
    }
    const currentUser = await serverAuth()
    if(!currentUser){
      return redirect('/login' , RedirectType.replace)
    }
    return (
     <div>
        <PageHeader send title={params?.username}/> 
        <ProfileComponent currentUser={currentUser!} username={params?.username}/>
      <div>
        {children}
      </div>
     </div>
    );
  }
    