import { PostCard } from '@/components/post-card'
import Link from "next/link"

// Mock data for blog posts
const posts = [
  {
    title: "Eulogy Generator by LimeParrot Tech",
    excerpt: "Celebrating Lives, Crafting Legacies: Introducing Eulogy Generator.", 
    slug: "eulogy-generator"
  },
 

  {
    title: "MRR Junkies by LimeParrot Tech",
    excerpt: "Discover the Monthly Recurring Revenue of famous entrepreneurs!", 
    slug: "mrr-junkies"
  },


  {
    title: "Hire Shopified Talent ",
    excerpt: "Connect with skilled Shopify developers, designers, and marketers to grow your e-commerce business.", 
    slug: "hire-shopified-talent"
  },


  {
    title: "California Plumbers Directory",
    excerpt: "Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.", 
    slug: "california-plumbers-directory"
  },



  // Add more mock posts as needed
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
            <Link  className="bg-lime-300 p-4 rounded-xl shadow-lg" href="https://www.limeparrottech.site/"> Return to Homepage     
            </Link>
      <h1 className="text-4xl font-bold my-8">LimeParrot Tech Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}

