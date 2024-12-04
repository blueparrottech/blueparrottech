import Link from 'next/link'

interface PostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export function PostCard({ title, date, slug }: PostCardProps) {
  return (
    <div className="border-b border-gray-200 py-8">
      <h2 className="text-2xl font-bold mb-2">
        <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  )
}

