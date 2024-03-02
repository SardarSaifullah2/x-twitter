import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Layout from "@/components/layout/layout";
import { Suspense } from "react";
import LoaderIcon from "@/components/loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter",
  description: "Discover a dynamic social media experience on our Next.js-based platform. Connect with friends, share moments, and explore a range of features designed to enhance your online interactions. Join us to stay connected and engaged like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Layout>
            {children}
          </Layout>
      </body>
    </html>
  );
}
