'use client'
import  ToolCard  from '@/components//tool-card'
import { FileText, FileUp } from 'lucide-react'

export default function ToolGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">






      <ToolCard
        title="Eulogy Generator"
        description="Generate Eulogy with ease"
        content="Our Eulogy Generator tool allows you to quickly and easily Generate Eulogy with ease."
        buttonText="Generate Eulogy"
        icon={FileText}
      />








    </div>
  )
}