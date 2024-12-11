 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../components/PlumbersDirectoryCard";
 

const posts = [
  {
    title: "24/7 Rooter & Plumbing",
    desc: "Serving San Francisco Peninsula and San Mateo The Bay Area's Plumbing Experts",
    img: "/plumbersdir/sf_1.jpg",
    href: "https://www.24-7rooter.com/",
  },
  {
    title: "Flow Masters Plumbing ",
    desc: "San Francisco’s Top-Rated Plumbing Company",
    img: "/plumbersdir/sf_1.jpg",
    href: "https://flowmastersplumbing.com/",
    },

    {
        title: "Smelly Mel’s Plumbing Inc  ",
        desc: "Our fast response times mean that you never have to sit and wait around for a plumber again. ",
        img: "/plumbersdir/sf_1.jpg",
        href: "https://www.smellymelsplumbing.com/",
        },


];








 












export default function PlumbersDirectory() {
   

  return (
    <div className=" border rounded-lg m-1 bg-slate-700   px-4 py-8">
      
      <Link  className="bg-lime-300 p-4 rounded-xl shadow-lg" href="https://www.limeparrottech.site/"> Return to Homepage     
      </Link>


        <title>California Plumbers Directory</title>
        <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/californiaplumbersdirectory"
          key="canonical"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-white text-center">California Plumbers Directory</h1>
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">Find Trusted Plumbers in Your Area Today</h2>
      <div className="  justify-center flex flex-wrap">
      
      <p className="   text-lg w-7/12 text-gray-100 mb-8 text-center">
      Don’t let plumbing problems disrupt your day! Our directory connects you with experienced plumbers who deliver top-notch service when you need it most. From emergency repairs to planned upgrades, find dependable experts who are just a click away.
      </p>
      </div>










      <h2 className="text-2xl font-semibold mb-6 text-gray-100 ">San Francisco, Bay Area</h2>
      <div className="  sm:grid-cols-1 md:grid-cols-1 gap-6">
      <PlumbersDirectoryCard posts={posts} />
      </div>
      



 




      <p className="text-sm text-gray-600 mt-16 text-center"> ¿Do you want to add your business?  Write email to     califoniaplumbersdirectory@gmail.com  
      </p>
    </div>
    
    
  )
}
