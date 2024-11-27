
import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';


export async function GET(req: Request) {
  const userId = req.headers.get('X-User-ID'); // Retrieve user ID from headers

  if (!userId) {
    return new Response('Error: Missing user ID in request headers', {
      status: 400,
    });
  }

  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    const result = await sql(
      `
      SELECT credits 
      FROM users 
      WHERE external_user_id = $1
      `,
      [userId]
    );

    if (result.length === 0) {
      return new Response('Error: User not found', {
        status: 404,
      });
    }

    const userCredits = result[0].credits;

    return NextResponse.json({ remainingCredits: userCredits });
  } catch (error) {
    console.error('Error retrieving user credits:', error);
    return new Response('Error: Failed to retrieve user credits', {
      status: 500,
    });
  }
}
