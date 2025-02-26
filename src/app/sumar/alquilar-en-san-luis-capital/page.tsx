import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Feather, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
 



export default function BlogPost() {
  return (
    










    

    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-red-100 text-gray-800 font-serif  rounded-lg shadow-xl ">

<title>Alquileres en San Luis - SUMar Inmobiliaria - LimeParrot Tech.Site  </title>
<meta
  name="description"
  content="Introducing the Luggage Measurement Telegram Bot."
/>


      <header className="bg-gray-700 shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-200"> <title>Alquileres en San Luis  </title>
</h1>
          <Link href="/" className="border-l-4 pl-4 border-blue-500 hover:underline font-mono text-gray-200 " prefetch={false}>
              Go to Homepage
            </Link>
        </div>
      </header>

      

    


      <article className="container rounded-lg shadow-xl px-6 py-12 max-w-4xl prose lg:prose-xl mx-auto p-6">

 
    
  <h2 className="text-2xl font-semibold mb-4">SUMar se especializa alquileres de calidad en varias zonas de la ciudad.  
  </h2>

  <Image 
    src="/sumar/slider-1.webp" 
    alt="Illustration of measuring luggage with a smartphone" 
    width={800} 
    height={400} 
    className="w-full h-90 object-cover rounded-lg shadow-xl mt-8"
  />

  <h2 className="text-2xl font-semibold my-12">De lo más solicitado son inmuebles para alquilar dentro de la ciudad de San Luis. Departamentos, casas, edificios son ofertas disponibles.

</h2>
  <p>Podés conocer más de nuestra propuesta en alquileres en nuestra página web:</p>
 
  <Link
    href="https://www.sumarsanluis.com.ar/"
    className="block mt-4 text-blue-500 hover:underline"
  >
    SUMar Inmobiliaria
  </Link>

</article>





 










      <footer className="bg-gray-700 text-white mt-12 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; Blog by LimeParrot Tech. Crafting knowledge with compassion and technology.</p>
        </div>
      </footer>
    </div>



 


 
    
  )
}

