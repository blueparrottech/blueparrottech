 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../components/PlumbersDirectoryCard";
import {data_bay_area,data_la_county} from "./page_data_not_full_list";
 

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
    img: "/plumbersdir/sf_bay_area/2.jpg",
    href: "https://www.flowmastersplumbing.com/",
    },

    {
        title: "Smelly Mel’s Plumbing Inc  ",
        desc: "Our fast response times mean that you never have to sit and wait around for a plumber again. ",
        img: "/plumbersdir/sf_bay_area/3.jpg",
        href: "https://www.smellymelsplumbing.com/",
        },


        {
          title: "Plumbing Pure  ",
          desc: "Residential, commercial, and industrial plumbing. We also offer emergency service. ",
          img: "/plumbersdir/sf_bay_area/4.jpg",
          href: "https://plumbingpure.com/",
          },
  


          {
            title: "Fast Response Plumbing & Rooter  ",
            desc: "Full-service residential and commercial plumbing company. ",
            img: "/plumbersdir/sf_bay_area/5.jpg",
            href: "https://fastresponseplumbingsf.com/",
            },
    


            {
              title: "Works Plumbing Repair & Drain Cleaning",
              desc: "Fully licensed, bonded and insured technicians. Offering 24/7 emergency repair availability. ",
              img: "/plumbersdir/sf_bay_area/6.jpg",
              href: "https://www.worksplumbing.com",
              },

          
              
              {
                title: "Ace Plumbing & Rooter, Inc.",
                desc: "Plumbing, water heaters, and sewer lines. Installation, maintenance, and high-pressure cleaning.",
                img: "/plumbersdir/sf_bay_area/7.jpg",
                href: "https://www.aceplumbingandrooter.com/",
                },



                {
                  title: "Discount Plumbing San Francisco",
                  desc: "DRAIN CLEANING. WATER HEATERS. GAS LINE REPAIR. PIPELINING. SUMP PUMP. TOILETS, FAUCETS, & MORE.",
                  img: "/plumbersdir/sf_bay_area/8.jpg",
                  href: "https://plumbinginsf.com/",
                  },


];








const posts_la_county = [
  {
    title: "24/7 Rooter & Plumbing",
    desc: "Serving San Francisco Peninsula and San Mateo The Bay Area's Plumbing Experts",
    img: "/plumbersdir/sf_1.jpg",
    href: "https://www.24-7rooter.com/",
  },
  {
    title: "Flow Masters Plumbing ",
    desc: "San Francisco’s Top-Rated Plumbing Company",
    img: "/asd.jpg",
    href: "https://flowmastersplumbing.com/",
    },

    {
        title: "Smelly Mel’s Plumbing Inc  ",
        desc: "Our fast response times mean that you never have to sit and wait around for a plumber again. ",
        img: "/asd.jpg",
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







      <div className="mb-6">
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-semibold text-gray-100">
      San Francisco, Bay Area
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Bay Area</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_bay_area} />
  </div>
</div>

      





      <h2 className="text-2xl font-semibold mt-24  text-gray-100 ">LA County</h2>
      <div className="  sm:grid-cols-1 md:grid-cols-1 gap-6">
      <PlumbersDirectoryCard posts={data_la_county} />
      </div>






      <p className="text-sm text-gray-100 mt-16 text-center"> ¿Do you want to add your business?  Write email to     califoniaplumbersdirectory@gmail.com  
      </p>
    </div>
    
    
  )
}
