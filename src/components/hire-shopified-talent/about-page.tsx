
import { useState } from 'react'
import { Search, ShoppingBag, CheckCircle } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"




// Mock data for talent cards (unchanged)
const talents = [
  {
    id: 1,
    name: "Jane Doe",
    picture: "/placeholder.svg?height=100&width=100",
    mainSkill: "Shopify Theme Developer",
    bio: "Experienced Shopify theme developer with a keen eye for design.",
    skills: ["Liquid", "JavaScript", "CSS"],
    availability: "Available",
  },
  {
    id: 2,
    name: "John Smith",
    picture: "/placeholder.svg?height=100&width=100",
    mainSkill: "Shopify App Developer",
    bio: "Specialized in building custom Shopify apps to enhance store functionality.",
    skills: ["React", "Node.js", "Shopify API"],
    availability: "Busy",
  },
  {
    id: 3,
    name: "Alice Johnson",
    picture: "/placeholder.svg?height=100&width=100",
    mainSkill: "Shopify Marketing Expert",
    bio: "Helping Shopify stores grow through strategic marketing campaigns.",
    skills: ["SEO", "Email Marketing", "Social Media"],
    availability: "Available",
  },
  {
    id: 4,
    name: "Bob Williams",
    picture: "/placeholder.svg?height=100&width=100",
    mainSkill: "Shopify Store Setup Specialist",
    bio: "Guiding new merchants through the process of setting up their Shopify stores.",
    skills: ["Store Setup", "Product Import", "Payment Gateway Integration"],
    availability: "Limited Availability",
  },
]

export default function AboutPageComponent() {
 

 

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">HireShopifiedTalent</span>
          </div>
          <nav>
            <ul className="flex space-x-4">

            <li><Link href="/" className="hover:underline" prefetch={false}>
              Home
            </Link></li>
 

            <li><Link href="#" className="hover:underline" prefetch={false}>
            About
            </Link></li>

            
            <li><Link href="mailto:hireshopifiedtalent@gmail.com" className="hover:underline" prefetch={false}>
            Contact
            </Link></li>

 




            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find Shopify Talent</h1>
            <p className="text-xl mb-8">Connect with skilled Shopify developers, designers, and marketers to grow your e-commerce business.</p>
            <Button variant="secondary" size="lg">Join as Talent</Button>
          </div>
        </section>

        <section id="about" className="py-16 bg-green-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Hire Shopified Talent</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  HireShopifiedTalent is the premier marketplace connecting businesses with top-tier Shopify experts. We curate a pool of skilled professionals who specialize in various aspects of the Shopify ecosystem, ensuring you find the perfect match for your e-commerce needs.
                </p>
 
                <Button variant="default" size="lg">Learn More</Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Vetted Professionals</h3>
                    <p>All talents are thoroughly screened and verified for their Shopify expertise.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Diverse Skill Set</h3>
                    <p>From developers to marketers, find specialists for every aspect of your Shopify store.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Flexible Engagement</h3>
                    <p>Hire for short-term projects or long-term collaborations based on your needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Secure Platform</h3>
                    <p>Our platform ensures safe communication and transactions between clients and talents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <div className="mb-8 flex justify-center">
 



            {talents.map((talent) => (
                <div key={talent.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Talent card content (unchanged) */}
                </div>
              ))}
          </div>
          </div>

        </section>

        <section className="bg-green-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Are You a Shopify Expert?</h2>
            <p className="text-xl mb-8">Join our talent pool and connect with businesses looking for your skills.</p>
            <Button size="lg">Join as Talent</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Hire Shopified Talent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}