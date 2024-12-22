 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../components/PlumbersDirectoryCard";
import {data_bay_area,data_la_county} from "../californiaplumbersdirectory/page_data_not_full_list";
 
 

 
 

export default function PlumbersDirectory() {
   

  return (
    <div className=" border rounded-lg m-1 bg-slate-700   px-4 py-8">
      
      <Link  className="bg-lime-300 p-4 rounded-xl shadow-lg" href="https://www.limeparrottech.site/"> Return to Homepage     
      </Link>


        <title>United Kingdom Plumbers Directory</title>
        <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/californiaplumbersdirectory"
          key="canonical"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-white text-center">United Kingdom Plumbers Directory</h1>
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">Find Trusted Plumbers in Your Area Today</h2>
      <div className="  justify-center flex flex-wrap">
      
      <p className="   text-lg w-7/12 text-gray-100 mb-8 text-center">
      Don’t let plumbing problems disrupt your day! Our directory connects you with experienced plumbers who deliver top-notch service when you need it most. From emergency repairs to planned upgrades, find dependable experts who are just a click away.
      </p>
      



      <div className="w-full flex justify-center space-x-4 mb-12">
    <a
      href="#london"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      London
    </a>



    <a
      href="#birmingham"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Birmingham
    </a>




    <a
      href="#manchester"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Manchester
    </a>




    <a
      href="#glasgow"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Glasgow
    </a>





    <a
      href="#leeds"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
          Leeds

    </a>





 



 


  </div>



      </div>







      <div className="mb-24">
  <div className="flex items-center justify-between">
    <h2   id="london" className="text-2xl font-semibold text-gray-100">
    London
    </h2>
    <Link href="https://www.limeparrottech.site/uk-plumbers-directory/local-london-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in London</span>
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
    <h2 id="birmingham" className="text-2xl font-semibold text-gray-100">
    Birmingham
    </h2>
    <Link href="https://www.limeparrottech.site/uk-plumbers-directory/local-london-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Birmingham</span>
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
    <h2 id="manchester" className="text-2xl font-semibold text-gray-100">
    Manchester
    </h2>
    <Link href="https://www.limeparrottech.site/uk-plumbers-directory/local-london-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Manchester</span>
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
    <h2 id="glasgow" className="text-2xl font-semibold text-gray-100">
    Glasgow
    </h2>
    <Link href="https://www.limeparrottech.site/uk-plumbers-directory/local-london-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Glasgow</span>
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
    <h2 id="leeds" className="text-2xl font-semibold text-gray-100">
    Leeds
    </h2>
    <Link href="https://www.limeparrottech.site/uk-plumbers-directory/local-london-plumbers">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Check all plumbers in Leeds</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_la_county} />
  </div>
</div>







 




 












      <p className="text-sm text-gray-100 mt-16 text-center"> ¿Do you want to add your business?  Write email to     blueparrottech@gmail.com  
      </p>
    </div>
    
    
  )
}
