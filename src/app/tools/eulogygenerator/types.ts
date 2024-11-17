// types/eulogy.ts

export type FormData = {
    // User identification fields
    userId: string
    userEmail: string
    
    // Existing fields
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
  
  export const initialFormData: Omit<FormData, 'userId' | 'userEmail'> = {
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