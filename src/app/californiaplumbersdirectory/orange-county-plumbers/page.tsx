 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp,  MapPin } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../../components/PlumbersDirectoryCard";
import {data_bay_area} from "../page_data_full_list";
 

 








 












export default function PlumbersDirectory() {
   

  return (
    <div className=" border rounded-lg m-1 bg-slate-700   px-4 py-8">
      
 


      <div className="flex justify-between items-center mb-6">
        <Link 
          className="bg-lime-300 p-4 rounded-xl shadow-lg mr-4" 
          href="https://www.limeparrottech.site/"
        >  
          Return to Homepage      
        </Link>
        
        <Link 
          className="bg-blue-500 text-white p-4 rounded-xl shadow-lg flex items-center" 
          href="/californiaplumbersdirectory"
        >  
          <MapPin className="mr-2" /> 
          Explore All California Locations
        </Link>
      </div>







        <title>Orange County Plumbers Directory</title>
        <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/californiaplumbersdirectory"
          key="canonical"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-white text-center">Orange County Plumbers</h1>
 
      <div className="  justify-center flex flex-wrap">
      
 
      </div>










      <div className="mb-6">
  <div className="flex items-center justify-between">

 

 
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
