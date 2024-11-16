'use client'

import { useState, useEffect } from 'react'
 


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from 'lucide-react'






type FormData = {
  fullName: string
  relationship: string
  dateOfBirth: string
  dateOfPassing: string
  placeOfBirth: string
  familyMembers: string
  profession: string
  careerAchievements: string
  hobbies: string
  joyfulActivities: string
  definingQualities: string
  personalStory: string
  communityImpact: string
  charities: string
  favoriteSayings: string
  lifeValues: string
  rememberedFor: string
  additionalInfo: string
}

const initialFormData: FormData = {
  fullName: '',
  relationship: '',
  dateOfBirth: '',
  dateOfPassing: '',
  placeOfBirth: '',
  familyMembers: '',
  profession: '',
  careerAchievements: '',
  hobbies: '',
  joyfulActivities: '',
  definingQualities: '',
  personalStory: '',
  communityImpact: '',
  charities: '',
  favoriteSayings: '',
  lifeValues: '',
  rememberedFor: '',
  additionalInfo: ''
}

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
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentSection, setCurrentSection] = useState(0)
  const [errors, setErrors] = useState<Partial<FormData>>({})

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/eulogy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form data stored successfully!');
          // Clear the form or redirect the user
        } else {
          const errorData = await response.json();
          console.error('Error storing form data:', errorData.error);
          // Display an error message to the user
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Display an error message to the user
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
                  <Button type="submit">Submit</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. Please ensure all information is correct before submitting.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>

          <div className="flex justify-between items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" onClick={handleSaveDraft} variant="outline">
                    Save Draft
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save your progress locally</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button type="button" variant="outline">Clear Form</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to clear the form?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. All entered information will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearForm}>Clear</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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