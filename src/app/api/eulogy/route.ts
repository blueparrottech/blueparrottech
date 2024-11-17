// pages/api/eulogy.ts
import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import  { FormData }  from '../../eulogygenerator/types'
export const config = {
  runtime: 'edge',
};



 



export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData: FormData = await request.json();

    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);

    // Insert the form data into the Postgres database
    await sql(`
      INSERT INTO eulogies (
        user_id, 
        user_email,
        full_name, 
        relationship, 
        date_of_birth, 
        date_of_passing, 
        place_of_birth, 
        family_members, 
        profession, 
        career_achievements, 
        hobbies, 
        joyful_activities, 
        defining_qualities, 
        personal_story, 
        community_impact, 
        charities, 
        favorite_sayings, 
        life_values, 
        remembered_for, 
        additional_info
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
    `, [
      formData.userId,
      formData.userEmail,
      formData.fullName,
      formData.relationship,
      formData.dateOfBirth,
      formData.dateOfPassing,
      formData.placeOfBirth,
      formData.familyMembers,
      formData.profession,
      formData.careerAchievements,
      formData.hobbies,
      formData.joyfulActivities,
      formData.definingQualities,
      formData.personalStory,
      formData.communityImpact,
      formData.charities,
      formData.favoriteSayings,
      formData.lifeValues,
      formData.rememberedFor,
      formData.additionalInfo,
    ])

    return NextResponse.json({ message: 'Form data stored successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error storing form data:', error);
    return NextResponse.json({ error: 'An error occurred while storing the form data' }, { status: 500 });
  }
}