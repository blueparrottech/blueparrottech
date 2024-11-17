// app/your-route/page.tsx
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  // Get auth data in server component
  const { userId } = await auth();
  
  console.log('userId:', userId);

  // Server action for form submission
  async function create(formData: FormData) {
    'use server'
    
    const comment = formData.get('comment');
    console.log('Submitting comment for user:', userId);
    
    // Here you can use neon to insert into database
    // const sql = neon(process.env.DATABASE_URL);
    // await sql(`INSERT INTO comments (user_id, comment) VALUES ($1, $2)`, [userId, comment]);
  }

  return (
    <form action={create}>
      <input 
        type="text" 
        placeholder="write a comment" 
        name="comment" 
        className="border p-2 rounded"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Submit
      </button>
    </form>
  );
}





