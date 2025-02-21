import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Feather, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
 



export default function BlogPost() {
  return (
    










    

    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-red-100 text-gray-800 font-serif  rounded-lg shadow-xl ">

<title>SUMar Inmobiliaria — Desarrollo Inmobiliario en San Luis - LimeParrot Tech.Site  </title>
<meta
  name="description"
  content="Introducing the Luggage Measurement Telegram Bot."
/>


      <header className="bg-gray-700 shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-200"> SUMar Inmobiliaria</h1>
          <Link href="/" className="border-l-4 pl-4 border-blue-500 hover:underline font-mono text-gray-200 " prefetch={false}>
              Go to Homepage
            </Link>
        </div>
      </header>

      

    


      <article className="container rounded-lg shadow-xl px-6 py-12 max-w-4xl prose lg:prose-xl mx-auto p-6">

  <h1 className="text-4xl font-bold mb-6">SUMar Inmobiliaria — Desarrollo Inmobiliario en San Luis, Argentina</h1>
    
  <h2 className="text-2xl font-semibold mb-4">SUMar Inmobiliaria tiene más de 10 años de experiencia en el mercado inmobiliario de San Luis.
  </h2>

  <Image 
    src="/luggage-size-checker/1.JPG" 
    alt="Illustration of measuring luggage with a smartphone" 
    width={800} 
    height={400} 
    className="w-full h-90 object-cover rounded-lg shadow-xl mt-8"
  />

  <h2 className="text-2xl font-semibold mt-12">Ofrece Venta y Alquiler de propiedades como casas, lotes, locales comerciales y oficinas.

</h2>
  <p>Podés conocer más de nuestra propuesta en nuestro página web:</p>
 
  <Link
    href="http://www.sumarsanluis.com.ar/"
    className="block mt-4 text-blue-500 hover:underline"
  >
    SUMar Inmobiliaria
  </Link>

</article>





 










      <footer className="bg-gray-700 text-white mt-12 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 SUMar Inmobiliaria — Desarrollo Inmobiliario en San Luis Blog by LimeParrot Tech. Crafting knowledge with compassion and technology.</p>
        </div>
      </footer>
    </div>



 


 
    
  )
}

