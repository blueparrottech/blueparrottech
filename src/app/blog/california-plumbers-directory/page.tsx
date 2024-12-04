import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Feather, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"

export default function EulogyGeneratorBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-rose-100 text-gray-800 font-serif  rounded-lg shadow-xl ">
      <header className="bg-gray-700 shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-200">California Plumbers Directory by LimeParrot Tech</h1>
          <Link href="/" className="border-l-4 pl-4 border-blue-500 hover:underline font-mono text-gray-200 " prefetch={false}>
              Go to Homepage
            </Link>
        </div>
      </header>

      <main className="container rounded-lg shadow-xl  mx-auto px-6 py-12 max-w-4xl">
 
          <Image 
            src="/eulogy_1.JPG" 
            alt="A serene landscape with a setting sun, symbolizing the celebration of a life well-lived" 
            width={800} 
            height={400} 
            className="w-full h-90 object-cover rounded-lg shadow-xl"
          />




            <div className="text-center py-12">
              <a 
                href="/californiaplumbersdirectory" 
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Try California Plumbers Directory
              </a>
            </div>


          <div className="p-8">
            <h2 className="text-4xl font-bold m-6 text-gray-900">Introducing California Plumbers Directory</h2>

            <p className="text-lg mb-12 leading-relaxed">
            Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Art of Remembrance, Reimagined</h3>

            <p className="mb-12 leading-relaxed">
            Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="text-red-500 mr-2" />
                Key Features of California Plumbers Directory
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Feather className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Personalized narratives that capture the essence of your loved one</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Collaborativ tools for family and friends to contribute memories</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Rapid generation with thoughtful, human-like composition</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Tailored questions   to match the individual's spirit</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">A Compassionate Approach to Technology</h3>

            <p className="mb-12 leading-relaxed">
            Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-12 italic text-gray-700">
              "Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
            </blockquote>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">How Eulogy Generator Works</h3>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Share memories, traits, and stories about your loved one</li>
              <li>Choose a tone and style that best reflects their personality</li>
              <li>Let our AI weave these elements into a beautiful narrative</li>
              <li>Review, edit, and personalize the generated eulogy</li>
              <li>Deliver a heartfelt tribute that honors their legacy</li>
            </ol>

            <p className="mb-12 leading-relaxed">
            Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-12">
              <h4 className="text-xl font-semibold mb-4 text-blue-800">The Ethical Foundation</h4>
              <p className="text-blue-900">
              Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join Us in Redefining Remembrance</h3>

            <p className="mb-6 leading-relaxed">
            Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.
            </p>

            <div className="text-center">
              <a 
                href="/californiaplumbersdirectory" 
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Try California Plumbers Directory
              </a>
            </div>
          </div>
 
      </main>

      <footer className="bg-gray-700 text-white mt-12 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 California Plumbers Directory by LimeParrot Tech.  </p>
        </div>
      </footer>
    </div>
  )
}

