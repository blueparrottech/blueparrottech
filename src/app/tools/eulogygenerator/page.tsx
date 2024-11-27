'use client'

import { useState, useEffect } from 'react'
 
import {  useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from 'lucide-react'

import { FormData, initialFormData } from './types'

import { useSearchParams, useRouter } from 'next/navigation'  // Note: from 'next/navigation', not 'next/router'

 import  RemainingCreditsCard   from "../../../components/RemainingCreditsCard"

 

const sections = [
  "Basic Information",
  "Family & Relationships",
  "Professional Life",
  "Personal Life",
  "Character & Impact",
  "Legacy",
  "Personal Touches",
  "Additional Information"
]

export default function EulogyForm() {
  const [formData, setFormData] = useState<Omit<FormData, 'userId' | 'userEmail'>>(initialFormData)
  const [currentSection, setCurrentSection] = useState(0)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  // get user id from clerk
  const { user } = useUser();

  const [creditsAvailable, setCreditsAvailable] = useState<number>(0)
  const [isLoadingCredits, setIsLoadingCredits] = useState(true)
  const [creditError, setCreditError] = useState<string | null>(null)





  useEffect(() => {
    const checkCredits = async () => {
      if (!user?.id) return;
  
      try {
        setIsLoadingCredits(true);
  
        const response = await fetch('/api/get-user-credits', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-User-ID': user.id, // Send user ID in the headers
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch credits');
        }
  
        const data = await response.json();
        setCreditsAvailable(data.remainingCredits);
        setCreditError(null);
      } catch (error) {
        console.error('Error checking credits:', error);
        setCreditError('Failed to check available credits');
      } finally {
        setIsLoadingCredits(false);
      }
    };
  
    checkCredits();
  }, [user?.id]);
  
 












  useEffect(() => {
    const savedData = localStorage.getItem('eulogyFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])











  useEffect(() => {
    const autosaveTimer = setTimeout(() => {
      localStorage.setItem('eulogyFormData', JSON.stringify(formData))
    }, 1000)

    return () => clearTimeout(autosaveTimer)
  }, [formData])








  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }









  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.relationship) newErrors.relationship = 'Relationship is required'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.dateOfPassing) newErrors.dateOfPassing = 'Date of passing is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

























  const handleSubmit = async (e?: React.FormEvent) => {

    e?.preventDefault();


    if (creditsAvailable <= 0) {
      setSubmissionError("You don't have enough credits to perform this action.");
      return;
  }


    if (isSubmitting || isSubmitted) {
      return
    }

    setIsSubmitting(true)
    setSubmissionError(null)
 

    if (validateForm()) {
 

      try {


        const completeFormData: FormData = {
          ...formData,
          userId: user?.id ?? '',
          userEmail: user?.emailAddresses[0]?.emailAddress ?? ''
        }



        //  const response = await fetch('/api/eulogy', {
        //  method: 'POST',
       //   headers: {
      //    'Content-Type': 'application/json',
      //    },
       //   body: JSON.stringify(completeFormData),
      //    });




      const response = await fetch("/api/create_eulogy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeFormData),
      });





        if (response.ok) {

          const { eulogy } = await response.json();


          setIsSubmitted(true)
          setFormData(initialFormData)

          //localStorage.removeItem('eulogyFormData')
          console.log('eulogy-------------!' , eulogy);
          console.log('');

          console.log('Form data stored successfully!');
          localStorage.setItem("eulogy", eulogy); // Store the eulogy in localStorage
         

          router.push('/tools/eulogygenerator/result');


         // router.push({
         //   pathname: "/result",
          //  query: { eulogy: encodeURIComponent(eulogy) }, // Pass the eulogy as a query param
          //});


          // Clear the form or redirect the user

          //   setTimeout(() => {
      //       router.push('/tools/eulogygenerator/dashboard?new=true');
       //       }, 100);

 




        } else {
          const errorData = await response.json();
          console.error('Error storing form data:', errorData.error);
          setSubmissionError(errorData.error || 'Failed to submit form')
          // Display an error message to the user
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Display an error message to the user
      }finally {
        setIsSubmitting(false)
      }
    }
  };






 

























  const handleSaveDraft = () => {
    localStorage.setItem('eulogyFormDraft', JSON.stringify(formData))
  }






  const handleClearForm = () => {
    setFormData(initialFormData)
    localStorage.removeItem('eulogyFormData')
  }








  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full name of the deceased</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && <p id="fullName-error" className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <Label htmlFor="relationship">Your relationship to the deceased</Label>
              <Input
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                placeholder="e.g. Son, Daughter, Friend"
                aria-invalid={!!errors.relationship}
                aria-describedby={errors.relationship ? "relationship-error" : undefined}
              />
              {errors.relationship && <p id="relationship-error" className="text-red-500 text-sm mt-1">{errors.relationship}</p>}
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                aria-invalid={!!errors.dateOfBirth}
                aria-describedby={errors.dateOfBirth ? "dateOfBirth-error" : undefined}
              />
              {errors.dateOfBirth && <p id="dateOfBirth-error" className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <Label htmlFor="dateOfPassing">Date of passing</Label>
              <Input
                id="dateOfPassing"
                name="dateOfPassing"
                type="date"
                value={formData.dateOfPassing}
                onChange={handleInputChange}
                aria-invalid={!!errors.dateOfPassing}
                aria-describedby={errors.dateOfPassing ? "dateOfPassing-error" : undefined}
              />
              {errors.dateOfPassing && <p id="dateOfPassing-error" className="text-red-500 text-sm mt-1">{errors.dateOfPassing}</p>}
            </div>
            <div>
              <Label htmlFor="placeOfBirth">Place of birth</Label>
              <Input
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                placeholder="e.g. New York, NY"
                required 
              />
            </div>
          </div>
        )
      case 1:
        return (
          <div>
            <Label htmlFor="familyMembers">Please list their closest family members and relationships</Label>
            <Textarea
              id="familyMembers"
              name="familyMembers"
              value={formData.familyMembers}
              onChange={handleInputChange}
              placeholder="e.g. Survived by loving wife Jane, children Tom and Sarah, and brother Michael"
              className="min-h-[100px]"
            />
            <CharacterCount current={formData.familyMembers.length} />
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="profession">What was their profession or career?</Label>
              <Input
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                placeholder="e.g. Teacher, Engineer, Artist"
              />
            </div>
            <div>
              <Label htmlFor="careerAchievements">What were their major career achievements or contributions?</Label>
              <Textarea
                id="careerAchievements"
                name="careerAchievements"
                value={formData.careerAchievements}
                onChange={handleInputChange}
                placeholder="e.g. Pioneered innovative teaching methods, Received multiple industry awards"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.careerAchievements.length} />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="hobbies">What were their main hobbies or passions?</Label>
              <Textarea
                id="hobbies"
                name="hobbies"
                value={formData.hobbies}
                onChange={handleInputChange}
                placeholder="e.g. Avid gardener, passionate about photography"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.hobbies.length} />
            </div>
            <div>
              <Label htmlFor="joyfulActivities">What activities brought them the most joy?</Label>
              <Textarea
                id="joyfulActivities"
                name="joyfulActivities"
                value={formData.joyfulActivities}
                onChange={handleInputChange}
                placeholder="e.g. Spending time with grandchildren, traveling to new places"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.joyfulActivities.length} />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="definingQualities">What were three defining qualities or characteristics that made them special?</Label>
              <Textarea
                id="definingQualities"
                name="definingQualities"
                value={formData.definingQualities}
                onChange={handleInputChange}
                placeholder="e.g. Compassionate, witty, resilient"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.definingQualities.length} />
            </div>
            <div>
              <Label htmlFor="personalStory">Can you share a specific story or memory that best captures their personality?</Label>
              <Textarea
                id="personalStory"
                name="personalStory"
                value={formData.personalStory}
                onChange={handleInputChange}
                placeholder="Share a memorable anecdote that illustrates their character"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.personalStory.length} />
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="communityImpact">How did they impact their community or the lives of others?</Label>
              <Textarea
                id="communityImpact"
                name="communityImpact"
                value={formData.communityImpact}
                onChange={handleInputChange}
                placeholder="e.g. Volunteered at local food bank, mentored young professionals"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.communityImpact.length} />
            </div>
            <div>
              <Label htmlFor="charities">Were there any organizations, causes, or charities they were passionate about?</Label>
              <Textarea
                id="charities"
                name="charities"
                value={formData.charities}
                onChange={handleInputChange}
                placeholder="e.g. Supported local animal shelter, advocated for environmental conservation"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.charities.length} />
            </div>
          </div>
        )
      case 6:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="favoriteSayings">Did they have any favorite sayings, quotes, or pieces of advice?</Label>
              <Textarea
                id="favoriteSayings"
                name="favoriteSayings"
                value={formData.favoriteSayings}
                onChange={handleInputChange}
                placeholder="e.g. 'Always look on the bright side of life'"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.favoriteSayings.length} />
            </div>
            <div>
              <Label htmlFor="lifeValues">What life lessons or values did they try to pass on to others?</Label>
              <Textarea
                id="lifeValues"
                name="lifeValues"
                value={formData.lifeValues}
                onChange={handleInputChange}
                placeholder="e.g. The importance of kindness, perseverance in face of adversity"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.lifeValues.length} />
            </div>
            <div>
              <Label htmlFor="rememberedFor">What would they want to be remembered for most?</Label>
              <Textarea
                id="rememberedFor"
                name="rememberedFor"
                value={formData.rememberedFor}
                onChange={handleInputChange}
                placeholder="e.g. Their unwavering love for family, their contributions to their field"
                className="min-h-[100px]"
              />
              <CharacterCount current={formData.rememberedFor.length} />
            </div>
          </div>
        )
      case 7:
        return (
          <div>
            <Label htmlFor="additionalInfo">Is there anything else you'd like to share that would help create a meaningful eulogy?</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any additional memories, stories, or information you'd like to include"
              className="min-h-[100px]"
            />
            <CharacterCount current={formData.additionalInfo.length} />
          </div>
        )
      default:
        return null
    }
  }














  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Eulogy Information Form</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill out this form with care and sensitivity. Your responses will help create a meaningful tribute.
          </p>
        </div>









  
        <RemainingCreditsCard   
         credits={creditsAvailable}   
      isLoading={isLoadingCredits}    
         error={creditError}   
          maxCredits={2} // optional, defaults to 2 if not provided 
         />             













        <Progress value={(currentSection + 1) * (100 / sections.length)} className="w-full" />
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{sections[currentSection]}</h3>
            {renderSection()}
          </div>

          <div className="flex justify-between items-center">

            <Button
              type="button"
              onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
              disabled={currentSection === 0}
              variant="outline"
            >
              Previous
            </Button>














            {currentSection < sections.length - 1 ? (
  <Button
    type="button"
    onClick={() => setCurrentSection(prev => Math.min(sections.length - 1, prev + 1))}
  >
    Next
  </Button>
) : (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <div className="space-y-2"> {/* Added wrapper div for tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                type="button" 
                disabled={isSubmitting || creditsAvailable <= 0 || isLoadingCredits}
              >
                {isLoadingCredits 
                  ? 'Checking credits...' 
                  : isSubmitting 
                    ? 'Submitting...' 
                    : creditsAvailable <= 0 
                      ? 'No generations remaining today'
                      : 'Submit'}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isLoadingCredits 
                  ? 'Checking available generations...'
                  : creditsAvailable <= 0 
                    ? 'You have used all your generations for today. Please try again tomorrow.'
                    : `You have ${creditsAvailable} generation${creditsAvailable !== 1 ? 's' : ''} remaining today`}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {creditError && (
          <p className="text-red-500 text-sm">{creditError}</p>
        )}
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. Please ensure all information is correct before submitting.
          {creditsAvailable > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              You have {creditsAvailable} generation{creditsAvailable !== 1 ? 's' : ''} remaining today.
            </p>
          )}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={async () => {
            if (!isSubmitting && !isSubmitted && creditsAvailable > 0) {
              // Double-check credits before final submission
              try {
                const creditCheck = await fetch('/api/check-credits')
                const { remainingCredits } = await creditCheck.json()
                
                if (remainingCredits <= 0) {
                  setCreditsAvailable(0)
                  setSubmissionError('No generations remaining today')
                  return
                }
                
                handleSubmit()
              } catch (error) {
                console.error('Error verifying credits:', error)
                setSubmissionError('Failed to verify available credits')
              }
            }
          }}
        >
          Submit
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)}







          </div>
        </form>
      </div>
    </div>
  )
}

function CharacterCount({ current }: { current: number }) {
  return (
    <div className="text-sm text-gray-500 text-right mt-1">
      {current} / 1000 characters
    </div>
  )
}