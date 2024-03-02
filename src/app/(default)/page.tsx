
import { GeneralPost } from "@/components/GeneralFeed";
import PageHeader from "@/components/ui/pageHeader";
import serverAuth from "@/libs/serverAuth";
import { RedirectType, redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await serverAuth()
    if(!currentUser){
        return redirect('/login' , RedirectType.replace)
    }
  return (
    <main className="">
      <PageHeader title="Home" />
      <GeneralPost CurrentUser={currentUser} />
    </main>
  );
}
