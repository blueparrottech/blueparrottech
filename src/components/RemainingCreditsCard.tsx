// src/components/RemainingCreditsCard.tsx
import { Progress } from "@/components/ui/progress"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface RemainingCreditsCardProps {
  credits: number
  isLoading: boolean
  error: string | null
  maxCredits?: number // Optional, defaults to 2
}

export function RemainingCreditsCard({ 
  credits, 
  isLoading, 
  error, 
  maxCredits = 2 
}: RemainingCreditsCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Daily Generations</h3>
          {!isLoading && !error && (
            <span className="text-sm text-gray-500">
              {credits} of {maxCredits}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-gray-500 text-sm">Checking available generations...</p>
        ) : error ? (
          <p className="text-red-500 text-sm">{error}</p>
        ) : (
          <div className="space-y-2">
            <Progress 
              value={(credits / maxCredits) * 100} 
              className="h-2"
            />
            <p className="text-sm text-gray-600">
              {credits === 0 
                ? "No generations remaining today. Try again tomorrow!" 
                : `You have ${credits} generation${credits !== 1 ? 's' : ''} remaining today`
              }
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}