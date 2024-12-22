import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Feather, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import LoopEarplugBlogPost from "../../../../components/loop-earplugs-blog-post"



export default function BlogPost() {
  return (

    
    <div className="min-h-screen   text-gray-800 font-serif  rounded-lg shadow-xl ">

<title>Loop Earplugs Blog Post - LimeParrot Tech.Site  </title>
<meta
  name="description"
  content="Loop Earplugs: Modern Noise Reduction Solution."
/>


      <header className="bg-gray-700 shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-200">Loop Earplugs Blog Post by LimeParrot Tech</h1>
          <Link href="/" className="border-l-4 pl-4 border-blue-500 hover:underline font-mono text-gray-200 " prefetch={false}>
              Go to Homepage
            </Link>
        </div>
      </header>

      
      
      


      <LoopEarplugBlogPost />

 





      <footer className="bg-gray-700 text-white  py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Loop Earplugs Blog by LimeParrot Tech. Crafting a better life with compassion and technology.</p>
        </div>
      </footer>
    </div>
  )
}

