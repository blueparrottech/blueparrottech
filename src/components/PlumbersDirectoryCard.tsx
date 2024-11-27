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

const posts: Post[] = [
  {
    title: "24/7 Rooter & Plumbing",
    desc: "Serving San Francisco Peninsula and San Mateo The Bay Area's Plumbing Experts",
    img: "/thumb_jardin.jpg",
    href: "https://www.24-7rooter.com/",
  },
  {
    title: "Flow Masters Plumbing ",
    desc: "San Francisco’s Top-Rated Plumbing Company",
    img: "/thumb_abuelo.jpg",
    href: "https://flowmastersplumbing.com/",
    },

    {
        title: "Smelly Mel’s Plumbing Inc  ",
        desc: "Our fast response times mean that you never have to sit and wait around for a plumber again. We value our customers, which means we respond as quickly as possible to your plumbing and rooter needs.",
        img: "/thumb_abuelo.jpg",
        href: "https://www.smellymelsplumbing.com/",
        },


];

export default function PlumbersDirectoryCard() {
  return (
    <section className="mt-4 mx-auto px-1 max-w-screen-xl md:px-8">
      <h1 className={`${inter.className} md:text-6xl text-3xl text-slate-900 mb-2`}>
        California Plumbers Directory
      </h1>

      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((item, index) => (
          <article
            className="max-w-md bg-blue-200 mb-3 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={index}
          >
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-md"
                loading="lazy"
              />
              <div className="pt-3 ml-4 mr-4 mb-3">
                <h3 className="font-mono text-2xl text-slate-900">{item.title}</h3>
                <p className="font-mono text-slate-800 text-sm mt-1">{item.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
