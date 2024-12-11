 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../../components/PlumbersDirectoryCard";
 

const posts_la_county = [
  {
    title: "Dutton Plumbing",
    desc: "From repairs and new installations to replacements and routine maintenance. We have expert plumbers on staff.",
    img: "/plumbersdir/sf_1.jpg",
    href: "https://www.duttonplumbing.com/",
  },
  {
    title: "Twin Home Experts ",
    desc: "Mold Repair , Water Leak Detection Services, Rodent Control and Plumbing Services.",
    img: "/plumbersdir/sf_2.jpg",
    href: "https://www.twinplumbing.com/",
    },

    {
        title: "HS Rooter Plumbing  ",
        desc: "Drain, Septic andGas Line Services. ",
        img: "/plumbersdir/sf_2.jpg",
        href: "https://hsrooterplumbing.com/",
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

      <h1 className="text-3xl font-bold mb-4 text-white text-center">Los Angeles Plumbers Directory</h1>
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">Find Trusted Plumbers in Your Area Today</h2>
      <div className="  justify-center flex flex-wrap">
      
 
      </div>








 


      <h2 className="text-2xl font-semibold mt-24  text-gray-100 ">LA County</h2>
      <div className="  sm:grid-cols-1 md:grid-cols-1 gap-6">
      <PlumbersDirectoryCard posts={posts_la_county} />
      </div>






      <p className="text-sm text-gray-600 mt-16 text-center"> ¿Do you want to add your business?  Write email to     califoniaplumbersdirectory@gmail.com  
      </p>
    </div>
    
    
  )
}
