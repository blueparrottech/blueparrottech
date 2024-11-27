 
import { NextResponse } from 'next/server';

import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { neon } from '@neondatabase/serverless';



interface ClerkEmail {
  id: string;
  email_address: string;
  verification_status: string; // Adjust based on actual schema
}




export async function POST(req: Request) {
    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET
  
    if (!SIGNING_SECRET) {
      throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
    }
  
    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET)
  
    // Get headers
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')
  
    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error: Missing Svix headers', {
        status: 400,
      })
    }
  
    // Get body
    const payload = await req.json()
    const body = JSON.stringify(payload)
  
    let evt: WebhookEvent
  
    // Verify payload with headers
    try {
      evt = wh.verify(body, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      }) as WebhookEvent
    } catch (err) {
      console.error('Error: Could not verify webhook:', err)
      return new Response('Error: Verification error', {
        status: 400,
      })
    }
  
    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', body)
  



    // store payload in DB (users)

    const sql = neon(`${process.env.DATABASE_URL}`);

    

    if (eventType === "user.created") {
      try {
        // Extract primary email address
        const primaryEmail = payload.data.email_addresses.find(
            (email: ClerkEmail) => email.id === payload.data.primary_email_address_id
        )?.email_address;
    
        await sql(
            `
            INSERT INTO users (external_user_id, username, email, image_url, credits) 
            VALUES ($1, $2, $3, $4, $5)
            `,
            [
                payload.data.id,                 // external_user_id
                payload.data.first_name,         // first_name

                primaryEmail,                    // email (extracted)
                payload.data.image_url,         // image_url
                2           

            ]
        );
      } catch (error) {
        console.error("Error inserting user into database:", error);
    }
    }
    






    return new Response('Webhook received', { status: 200 })
  }







