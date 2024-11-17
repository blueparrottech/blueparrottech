'use client'
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';

export default function ToolGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Eulogy Generator Tool</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">Create Heartfelt Eulogies Effortlessly</h2>
      <p className="text-sm text-gray-600 mb-8 text-center">
        Discover how our Eulogy Generator can assist you in crafting thoughtful and personalized eulogies for your loved ones. Generate meaningful tributes with ease.
      </p>

      <div className="  sm:grid-cols-2 md:grid-cols-1 gap-6">
        <Link href="./tools/eulogygenerator">
        
            <ToolCard
              title="Eulogy Generator"
              description="Generate Eulogy with ease"
              content="Our Eulogy Generator tool allows you to quickly and easily generate eulogies, providing a respectful and thoughtful way to honor loved ones."
              buttonText="Generate Eulogy"
              icon={FileText}
            />
         
        </Link>
      </div>
    </div>
  )
}
