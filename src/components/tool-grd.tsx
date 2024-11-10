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
}

export default function ToolCard({ title, description, content, buttonText, icon: Icon }: ToolCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-6 w-6" />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          {content}
        </p>
        <Button className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}