import { PostCard } from '@/components/post-card'

// Mock data for blog posts
const posts = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, a powerful React framework.",
    date: "2023-05-15",
    slug: "getting-started-with-nextjs"
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt: "Discover the power of utility-first CSS with Tailwind and streamline your styling workflow.",
    date: "2023-05-10",
    slug: "mastering-tailwind-css"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Explore emerging trends and technologies that are shaping the future of web development.",
    date: "2023-05-05",
    slug: "future-of-web-development"
  },
  // Add more mock posts as needed
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}

