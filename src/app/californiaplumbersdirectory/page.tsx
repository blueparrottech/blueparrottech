'use client'
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
import PlumbersDirectoryCard from "../../components/PlumbersDirectoryCard";





export default function PlumbersDirectory() {
  const posts = [1];

  return (
    <div className="container mx-auto px-4 py-8">
      
      <Head>
        <title>California Plumbers Directory</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-center">California Plumbers Directory</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">Find Trusted Plumbers in Your Area Today</h2>
      <p className="text-sm text-gray-600 mb-8 text-center">
      Don’t let plumbing problems disrupt your day! Our directory connects you with experienced plumbers who deliver top-notch service when you need it most. From emergency repairs to planned upgrades, find dependable experts who are just a click away.
      </p>

      <div className="  sm:grid-cols-2 md:grid-cols-1 gap-6">
      <PlumbersDirectoryCard posts={posts} />
      </div>
      <div>
            <button onClick={() => window.alert('escribir email a : califoniaplumbersdirectory@gmail.com')}>¿Do you want to add your business?   </button>
        </div>
    </div>
    
    
  )
}
