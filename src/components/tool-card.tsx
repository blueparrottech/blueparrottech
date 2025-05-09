'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from 'lucide-react'

interface ToolCardProps {
  title: string
  description: string
  content: string
  buttonText: string
  icon: LucideIcon
  bgColor?: string;
}

export default function ToolCard({ title, description, content, buttonText, icon: Icon , bgColor}: ToolCardProps) {
  return (
    <Card   bgColor={bgColor}  >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 mb-2">
          
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
 
        <Button className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}