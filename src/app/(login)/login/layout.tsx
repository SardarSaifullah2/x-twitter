import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./../../globals.css";
import serverAuth from "@/libs/serverAuth";
import { redirect , RedirectType} from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Connect with world and Explore exciting features",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await serverAuth()
  if(currentUser){
    redirect('/' , RedirectType.replace) ;
  }
  return (
    <html lang="en">
      <body className={oswald.className}>
            {children}
      </body>
    </html>
  );
}
