import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PostHogProvider  } from './providers'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Script from "next/script";







const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});





export const metadata: Metadata = {
  title: "LimeParrot Tech.Site",
  description: "Interesting tools and content for entrepeneurs and businesses",
};






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    













    <ClerkProvider 
    dynamic
    afterSignOutUrl="./">
    <html lang="en">





    <head>
                <Script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <Script id="google-analytics">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                    page_path: window.location.pathname,                    
          });
                  `}
                </Script>   

          </head>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <PostHogProvider>

          <SignedOut>
            <SignInButton />
          </SignedOut>


          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}



        </PostHogProvider>

      </body>
    </html>
    </ClerkProvider>
  );
}
