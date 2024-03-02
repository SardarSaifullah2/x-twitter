import clientPromise from "@/libs/config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GithubProvider  from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : AuthOptions = {
    adapter : <Adapter> MongoDBAdapter(clientPromise) ,
    providers :[
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string ,
            clientSecret:process.env.GITHUB_SECRET_ID  as string,
        }) ,
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string ,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET  as string,
        }) ,
    ],
    callbacks:{
        async redirect({ url, baseUrl }) {
            return baseUrl;
          },
    } ,
    secret: process.env.NEXT_SECRET,

} 