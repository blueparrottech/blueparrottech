 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
 
 
 

export default function PlumbersDirectory() {
   

  return (
    <div className=" border rounded-lg m-1 bg-slate-700 mx-64  px-4 py-8">
      
      <Link  className="bg-lime-300 p-4 rounded-xl shadow-lg" href="https://www.limeparrottech.site/"> Return to Homepage     
      </Link>


        <title>GenFoo</title>
        <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/genfoo"
          key="canonical"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-white text-center">GenFoo</h1>
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">Suite of AI chatbot skins</h2>
      <div className="  justify-center flex flex-wrap">
      
      <p className="   text-lg w-7/12 text-gray-100 mb-8 text-center">
Transforming AI conversations with beautiful, personalized interfaces that match your unique style and workflow. 
      </p>
      



      <div className="w-full flex justify-center space-x-4 mb-12">
    <a
      href="#bay-area"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      GenFoo
    </a>

 



 


  </div>



      </div>







      <div className="mb-24 w-max-sm">
  <div className="flex items-center justify-between mb-4">
    <h2   id="bay-area" className="text-2xl font-semibold text-gray-100">
      GenFoo
    </h2>
    <Link href="https://www.genfoo.com/">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Visit GenFoo</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <div className="relative overflow-hidden ml-4 px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
There isn’t a real problem being solved here — GenFoo simply offers a new User interface for establishing a conversation with the LLM. It’s like a Winamp skin, but for a chat session.


LLM Chats reimagined.
We do believe it’s important to have a proper and personal way of communicating with the LLM.



GenFoo is an AI chat application with personalized interfaces. 

Each theme is designed to create a unique atmosphere for your AI conversations.

  </div>
</div>

      



 









 
    </div>
    
    
  )
}
