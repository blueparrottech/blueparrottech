 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../../components/PlumbersDirectoryCard";
import {data_bay_area} from "../page_data_full_list";
 

 








 












export default function PlumbersDirectory() {
   

  return (
    <div className=" border rounded-lg m-1 bg-slate-700   px-4 py-8">
      
      <Link  className="bg-lime-300 p-4 rounded-xl shadow-lg" href="https://www.limeparrottech.site/"> Return to Homepage     
      </Link>


        <title>San Francisco Plumbers Directory</title>
        <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/californiaplumbersdirectory"
          key="canonical"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-white text-center">San Francisco Plumbers Directory</h1>
 
      <div className="  justify-center flex flex-wrap">
      
 
      </div>










      <div className="mb-6">
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-semibold text-gray-100">
      San Francisco, Bay Area
    </h2>
    <Link href="https://www.limeparrottech.site/californiaplumbersdirectory/san-francisco-plumbers">
 
    </Link>
  </div>

  <div >
    <PlumbersDirectoryCard posts={data_bay_area} />
  </div>
</div>
      



 




      <p className="text-sm text-gray-100 mt-16 text-center"> ¿Do you want to add your business?  Write email to     califoniaplumbersdirectory@gmail.com  
      </p>
    </div>
    
    
  )
}
