'use client'
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import { Tweet } from 'react-tweet'
import Image from "next/image";


export default function ToolGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">MRR Junkies</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">Obsessed with Monthly Recurring Revenue?</h2>
      <p className="text-sm text-gray-600 mb-8 text-center">
      Discover the Monthly Recurring Revenue of famous entrepreneurs! Spot tools, techniques, copy some, get inspired by real-world examples and learn what drives their success.
      </p>

      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
 

      <Link href="https://www.foxsell.app">     
      <div className=" ">
      <Image
                  src="/mrr/foxsell.jpg"
                  width={340}
                  height={340}
                  alt="foxsell"
                  className="aspect-square object-cover  shadow-lg"
                  loading="lazy" 
                />
                  </div>
  </Link>







      <div className="transform scale-75 origin-top-left">
    <Tweet id="1860050725642068184" />
  </div>


  <Link href="http://www.podcastbuffs.com/">     
      <div className=" ">
      <Image
                  src="/mrr/PodcastBuffs.jpg"
                  width={340}
                  height={340}
                  alt="PodcastBuffs"
                  className="aspect-square object-cover  shadow-lg"
                  loading="lazy" 
                />
                  </div>
  </Link>



  <div className="transform scale-75 origin-top-left">
    <Tweet id="1831745370822516792" />
  </div>



  <div className="transform scale-75 origin-top-left">
    <Tweet id="1857504215473484043" />
  </div>


  <div className="transform scale-75 origin-top-left">
    <Tweet id="1860376361002467610" />
  </div>


  <div className="transform scale-75 origin-top-left">
    <Tweet id="1860223967291969814" />
  </div>

 


  <div className="transform scale-75 origin-top-left">
    <Tweet id="1856789149082321137" />
  </div>
  <div className="transform scale-75 origin-top-left">
    <Tweet id="1859246593159111018" />
  </div>
  <div className="transform scale-75 origin-top-left">
    <Tweet id="1851257878369198279" />
  </div>
  <div className="transform scale-75 origin-top-left">
    <Tweet id="1856381471730348489" />
  </div>
  <div className="transform scale-75 origin-top-left">
    <Tweet id="1830012587842433038" />
  </div>





  <div className="transform scale-75 origin-top-left">
    <Tweet id="1859183763470835756" />
  </div>
  <div className="transform scale-75 origin-top-left">
    <Tweet id="1836345609252749616" />
  </div>
 

      </div>
    </div>
  )
}
