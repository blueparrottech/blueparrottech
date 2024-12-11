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
      <section className="mt-4 mx-auto px-1 max-w-screen-xl md:px-8">
        <div className="mt-6 grid sm:gap-8 gap-4 sm:grid-cols-1 lg:grid-cols-3">
          {posts.map((item, index) => (
            <article
              className="max-w-sm bg-blue-200 mb-3 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={index}
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={450}
                  className="w-full h-120 object-cover rounded-t-md"
                  loading="lazy"
                />
                <div className="p-5">
               
                  <p className="font-mono text-slate-800 text-sm mt-2">{item.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    );
  }
  



