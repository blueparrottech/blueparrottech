'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ToolGrid from './tool-grid';
import Link from 'next/link';



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#ecfccb] text-gray-900 font-mono">
 
 <title>LimeParrot Tech.Site - Tools and Content</title>

      {/* Text Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 md:py-4 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          LimeParrot Tech.Site - Tools and Content
        </h1>

        <ToolGrid />
       

      </section>
    </div>
  )
}