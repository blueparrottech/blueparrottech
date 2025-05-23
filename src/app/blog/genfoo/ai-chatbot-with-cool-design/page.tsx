import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Feather, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
 



export default function BlogPost() {
  return (
    










    

    <div className="min-h-screen bg-gradient-to-b from-red-300 to-blue-100 text-gray-800 font-serif  rounded-lg shadow-xl ">

<title>GenFoo, Suite of AI chatbot skins  </title>
<meta
  name="description"
  content="Introducing   GenFoo."
/>


      <header className="bg-gray-700 shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-200">GenFoo, Suite of AI chatbot skins</h1>
          <Link href="/" className="border-l-4 pl-4 border-blue-500 hover:underline font-mono text-gray-200 " prefetch={false}>
              Go to Homepage
            </Link>
        </div>
      </header>

      

      


      <article className="container rounded-lg shadow-xl px-6 py-12 max-w-4xl prose lg:prose-xl mx-auto p-6">

  <h2 className="text-4xl font-bold mb-6">GenFoo, Suite of AI chatbot skins</h2>
    
  <ul className="list-disc list-inside my-6 text-center">
<Link    href="https://www.genfoo.com">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Chat in GenFoo</span>
      <span className="absolute inset-0 rounded border-4 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
    </ul>

  <p>
Discover how you prefer to chat with an LLM.


    </p>

  <Image 
    src="/as.png" 
    alt="GenFoo logo" 
    width={800} 
    height={400} 
    className="w-full h-90 object-cover rounded-3xl shadow-xl mt-8"
  />

  <h2 className="text-2xl font-semibold mt-12"> Embrace machine-human mentality</h2>
  <p>Designed for better knolwedge of your state with the intelligence entity.</p>


  <Image 
    src="/as.png" 
    alt="GenFoo, Suite of AI chatbots  " 
    width={800} 
    height={400} 
    className="w-full h-90 object-cover rounded-3xl shadow-xl mt-8"
  />
 

</article>





<h2 className="text-2xl font-semibold mb-4 mt-8 text-center">
  Related Articles
</h2>
<div className="container mx-auto px-6 text-center">
  <Link
    href="https://www.limeparrottech.site/blog/beef-tallow/benefits-and-uses-beef-tallow"
    className="block mb-2 text-blue-500 hover:underline"
  >
    The Benefits and Uses of Beef Tallow: A Traditional Fat Making a Comeback
  </Link>
  <Link
    href="https://www.limeparrottech.site/blog/beef-tallow/beef-tallow-in-modern-gastronomy"
    className="block mb-2 text-blue-500 hover:underline"
  >
    Beef Tallow in Modern Gastronomy: A Chef's Secret Ingredient
  </Link>
</div>










      <footer className="bg-gray-700 text-white mt-12 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 GenFoo, Suite of AI chatbot skins by LimeParrot Tech. Crafting knowledge with compassion and technology.</p>
        </div>
      </footer>
    </div>



 


 
    
  )
}

