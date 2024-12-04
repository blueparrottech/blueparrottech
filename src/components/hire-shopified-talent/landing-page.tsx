'use client'

import { useState } from 'react'
import { Search, ShoppingBag } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import Link from "next/link"




// Mock data for talent cards
const talents = [
  {
    id: 1,
    name: "Jane Doe",
    picture: "/a.jpg",
    mainSkill: "Shopify Theme Developer",
    bio: "Experienced Shopify theme developer with a keen eye for design.",
    skills: ["Liquid", "JavaScript", "CSS"],
    availability: "Available",
  },
  {
    id: 2,
    name: "John Smith",
    picture: "/a.jpg",
    mainSkill: "Shopify App Developer",
    bio: "Specialized in building custom Shopify apps to enhance store functionality.",
    skills: ["React", "Node.js", "Shopify API"],
    availability: "Busy",
  },
  {
    id: 3,
    name: "Alice Johnson",
    picture: "/a.jpg",
    mainSkill: "Shopify Marketing Expert",
    bio: "Helping Shopify stores grow through strategic marketing campaigns.",
    skills: ["SEO", "Email Marketing", "Social Media"],
    availability: "Available",
  },
  {
    id: 4,
    name: "Bob Williams",
    picture: "/a.jpg",
    mainSkill: "Shopify Store Setup Specialist",
    bio: "Guiding new merchants through the process of setting up their Shopify stores.",
    skills: ["Store Setup", "Product Import", "Payment Gateway Integration"],
    availability: "Limited Availability",
  },
]

export default function LandingPageComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTalents = talents.filter(talent =>
    talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    talent.mainSkill.toLowerCase().includes(searchTerm.toLowerCase()) ||
    talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen flex flex-col bg-black">



<div className="container mx-auto max-w-5xl px-4 my-4">  {/* Wrapper div to center the section */}
      <header className="bg-green-700 text-white p-4 border-lg max-w-5xl rounded-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold ">Hire Shopified Talent</span>
          </div>
          <nav>
            <ul className="flex space-x-4">

            <li><Link href="/" className="hover:underline font-mono " prefetch={false}>
              Home
            </Link></li>
 

            <li><Link href="/about" className="hover:underline font-mono " prefetch={false}>
            About
            </Link></li>

            
            <li><Link href="mailto:blueparrottech@gmail.com" className="hover:underline font-mono" prefetch={false}>
            Contact
            </Link></li>



 



            <li>
              <Link href="https://tally.so/r/wkRJRo" className="hover:underline font-mono" prefetch={false}>
              Join as Talent
            </Link>
            </li>


            </ul>
          </nav>
        </div>
      </header>
      </div>





      <main className="flex-grow bg-black">


      <div className="container mx-auto max-w-5xl px-4 my-4">  {/* Wrapper div to center the section */}
  <section className="bg-green-600 text-white py-20 border-lg rounded-lg">
    <div className="container mx-auto text-center">
      <h1 className="text-7xl font-bold mb-4 font-mono">Find Shopify Talent</h1>
      <p className="text-3xl mb-8 font-josefin">Connect with skilled Shopify developers, designers, and marketers to grow your e-commerce business.</p>
    </div>
  </section>
</div>

        <section className="py-12 bg-green-900">

          <div className="container mx-auto">

            <div className="mb-8 flex justify-center">
            <h2 className="text-xl text-gray-400 mr-4 font-josefin font-semibold">Browse and dicover you next partners to grow</h2>

              <div className="relative w-full max-w-md">
                <Input
                  type="text"
                  placeholder="Search for talent or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>







            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


              {filteredTalents.map(talent => (


                <div key={talent.id} className="bg-lime-500 rounded-lg shadow-md overflow-hidden">

                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">

 
                      <Image
                  src={talent.picture}
                  width={140}
                  height={140}
                  alt="a"
                  className="w-16 h-16 rounded-full mr-4"
                  loading="lazy" 
                />





                      <div>
                        <h2 className="text-xl font-josefin font-semibold">{talent.name}</h2>

                        <p className="text-green-900 font-mono">{talent.mainSkill}</p>
                      </div>
                    </div>

                    <p className="text-gray-900 font-josefin mb-4">{talent.bio}</p>

                    <div className="mb-4">
                      {talent.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="font-mono mr-2 mb-2">{skill}</Badge>
                      ))}
                    </div>


                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${talent.availability === 'Available' ? 'text-green-800' : talent.availability === 'Busy' ? 'text-red-800' : 'text-yellow-800'}`}>
                        {talent.availability}
                      </span>
                      <Button variant="outline">Contact Talent</Button>
                    </div>
                  </div>
                </div>
              ))}



            </div>
          </div>
        </section>

        <section className="bg-green-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-mono font-bold mb-4">Are You a Shopify Expert?</h2>
            <p className="text-xl mb-8 font-mono">Join our talent pool and connect with businesses looking for your skills.</p>
            <Link href="https://tally.so/r/wkRJRo"  prefetch={false}>
  <Button  className="text-xl  text-white mb-8 bg-green-800 font-mono" variant="secondary" size="lg">Join as Talent</Button>
</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 HireShopifiedTalent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}