 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../components/PlumbersDirectoryCard";
import {data_bay_area,data_la_county} from "./page_data_not_full_list";
 
 

 
 

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
      



      <div className="w-full flex justify-center space-x-4 mb-12">
    <a
      href="#bay-area"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Bay Area
    </a>



    <a
      href="#la-county"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      LA County
    </a>




    <a
      href="#san-diego-county"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      San Diego County
    </a>




    <a
      href="#orange-county"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Orange County
    </a>





    <a
      href="#sacramento"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
          Sacramento

    </a>





    <a
      href="#silicon-valley"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Silicon Valley
    </a>




    <a
      href="#fresno"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Fresno or Central Valley
    </a>




 


  </div>



      </div>







      <div className="mb-24">
  <div className="flex items-center justify-between">
    <h2   id="bay-area" className="text-2xl font-semibold text-gray-100">
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

      








<div className="mb-24">
  <div className="flex items-center justify-between">
    <h2 id="la-county" className="text-2xl font-semibold text-gray-100">
    LA County
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in LA County</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>







<div className="mb-24">
  <div className="flex items-center justify-between">
    <h2 id="san-diego-county" className="text-2xl font-semibold text-gray-100">
    San Diego County
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in San Diego County</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>








<div className="mb-24">
  <div className="flex items-center justify-between">
    <h2 id="orange-county" className="text-2xl font-semibold text-gray-100">
    Orange County
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Orange County</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>



 









<div className="mb-24">
  <div className="flex items-center justify-between">
    <h2 id="sacramento" className="text-2xl font-semibold text-gray-100">
    Sacramento
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Sacramento</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>








<div className="mb-24">
  <div className="flex items-center justify-between">
    <h2 id="silicon-valley" className="text-2xl font-semibold text-gray-100">
    Silicon Valley
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Silicon Valley</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>








<div className="mb-24">
  <div className="flex items-center justify-between">
    <h2 id="fresno" className="text-2xl font-semibold text-gray-100">
    Fresno or Central Valley
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Fresno</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>













      <p className="text-sm text-gray-100 mt-16 text-center"> ¿Do you want to add your business?  Write email to     califoniaplumbersdirectory@gmail.com  
      </p>
    </div>
    
    
  )
}
