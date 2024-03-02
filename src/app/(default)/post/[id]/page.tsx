import { SinglePostPage } from "@/components/singlePostPage"
import PageHeader from "@/components/ui/pageHeader"
import serverAuth from "@/libs/serverAuth"
import { RedirectType, redirect } from "next/navigation"

export default async function Post({params}:{params:{id: string}}){

    const currentUser = await serverAuth()
    if(!currentUser){
        return redirect('/login' , RedirectType.replace)
    }
      return(
          <div>
              <PageHeader title="Tweet" send={true}/>
              <SinglePostPage postId={params.id} CurrentUser={currentUser!}/>
          </div>
      )
  }