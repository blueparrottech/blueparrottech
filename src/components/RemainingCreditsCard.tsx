// src/components/RemainingCreditsCard.tsx
import { Progress } from "@/components/ui/progress"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

 

 


  export default function RemainingCreditsCard({
    credits,
    isLoading,
    error,
    maxCredits = 2, // Default max credits
  }: {
    credits: number;
    isLoading: boolean;
    error: string | null;
    maxCredits?: number;
  }) {
    if (isLoading) {
      return (
        <div className="p-4 border rounded bg-blue-50 text-blue-600">
          Checking remaining credits...
        </div>
      )
    }
  
    if (error) {
      return (
        <div className="p-4 border rounded bg-red-50 text-red-600">
          {error}
        </div>
      )
    }
  
    return (
      <div className={`p-4 border rounded ${credits > 0 ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
        {credits > 0
          ? `You have ${credits} generation${credits !== 1 ? 's' : ''} remaining today.`
          : 'You have no remaining credits for today. Please try again tomorrow.'}
        {maxCredits && (
          <div className="text-sm text-gray-600">
            Maximum allowed credits per day: {maxCredits}
          </div>
        )}
      </div>
    )
  }
  