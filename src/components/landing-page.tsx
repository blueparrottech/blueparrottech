'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ToolGrid from './tool-grid';
import Link from 'next/link';



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-red-50 text-gray-900 font-mono">
      {/* Hero Section */}
      <section className="relative h-[20vh] md:h-[75vh] bg-blue-500">


      <div className="relative w-full h-full">
          <video
            src="bl_pa.mp4"
            className="absolute inset-0 w-full h-full object-cover brightness-10   object-top"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            LimeParrot TechSite
          </video>
        </div>


 {/*
        <Image
          src="/hero.JPG?height=1080&width=1920"
          alt="Dighero"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />

  */}


        
        <div className="absolute inset-0 flex items-center justify-center px-4">

        </div>
      </section>

      {/* Text Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 md:py-4 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          LimeParrot TechSite - Tools and Content to win
        </h2>

        <ToolGrid />


      </section>
    </div>
  )
}