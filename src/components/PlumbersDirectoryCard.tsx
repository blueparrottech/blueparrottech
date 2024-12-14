import { Inter } from 'next/font/google';
import Image from 'next/image';
 


// Importing Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

interface Post {
  title: string;
  desc: string;
  img: string;
  href: string;
}



// Update the component to accept `posts` as a prop
interface PlumbersDirectoryCardProps {
    posts: Post[];
  }




  export default function PlumbersDirectoryCard({ posts }: PlumbersDirectoryCardProps) {
    return (
<section className="mt-4   ">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6 justify-items-stretch">
    {posts.map((item, index) => (
      <article
        className="max-w-xs  max-h-svh flex flex-col bg-blue-200 shadow-lg border rounded-md hover:shadow-sm"
        key={index}
      >
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex flex-col"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={450}
            className="w-full object-cover rounded-t-md"
            loading="lazy"
          />
          <div className="p-5 flex-1">
            <p className="font-mono text-slate-800 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        </a>
      </article>
    ))}
  </div>
</section>


    );
  }
  



