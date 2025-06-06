'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

interface Eulogy {
  id: string
  fullName: string
  dateOfPassing: string
  relationship: string
  createdAt: string
  // Add other relevant fields
}

export default function EulogyDashboard() {
  const router = useRouter()
 
  const [eulogies, setEulogies] = useState<Eulogy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEulogies()
  }, [])

  const fetchEulogies = async () => {
    try {
      const response = await fetch('/api/eulogies') // Endpoint to fetch user's eulogies
      if (response.ok) {
        const data = await response.json()
        setEulogies(data)
      } else {
        console.error('Failed to fetch eulogies')
      }
    } catch (error) {
      console.error('Error fetching eulogies:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Loading your eulogies...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Eulogies</h1>
          <p className="mt-2 text-gray-600">View and manage all your created eulogies</p>
        </div>

 

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eulogies.map((eulogy) => (
            <Card key={eulogy.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{eulogy.fullName}</CardTitle>
                <p className="text-sm text-gray-500">
                  Created {format(new Date(eulogy.createdAt), 'MMMM d, yyyy')}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Relationship: {eulogy.relationship}</p>
                <p className="text-gray-600">
                  Date of Passing: {format(new Date(eulogy.dateOfPassing), 'MMMM d, yyyy')}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => router.push(`/eulogy/${eulogy.id}`)}
                >
                  View Eulogy
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => router.push(`/eulogy/${eulogy.id}/edit`)}
                >
                  Edit
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => router.push('/tools/eulogygenerator')}
            className="bg-primary"
          >
            Create New Eulogy
          </Button>
        </div>
      </div>
    </div>
  )
}