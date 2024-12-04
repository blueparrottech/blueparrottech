import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Feather, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'

export default function EulogyGeneratorBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-serif  rounded-lg shadow-xl ">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Memento: Eulogy Generator</h1>
        </div>
      </header>

      <main className="container rounded-lg shadow-xl  mx-auto px-6 py-12 max-w-4xl">
 
          <Image 
            src="/placeholder.svg?height=400&width=800" 
            alt="A serene landscape with a setting sun, symbolizing the celebration of a life well-lived" 
            width={800} 
            height={400} 
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Celebrating Lives, Crafting Legacies: Introducing Memento</h2>

            <p className="text-lg mb-6 leading-relaxed">
              In the tapestry of human experience, few moments are as poignant and profound as bidding farewell to a loved one. It's a time when words often fail us, yet they're needed most. Enter Memento, our revolutionary Eulogy Generator—a digital companion designed to help you articulate the inexpressible, honor the irreplaceable, and celebrate a life well-lived.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Art of Remembrance, Reimagined</h3>

            <p className="mb-6 leading-relaxed">
              Memento isn't just another AI tool; it's a bridge between memory and eloquence, between grief and celebration. By harnessing the power of advanced language models and intuitive design, we've created a platform that transforms cherished memories into beautifully crafted eulogies, each as unique as the life it commemorates.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="text-red-500 mr-2" />
                Key Features of Memento
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Feather className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Personalized narratives that capture the essence of your loved one</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Collaborative tools for family and friends to contribute memories</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Rapid generation with thoughtful, human-like composition</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Customizable themes and tones to match the individual's spirit</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">A Compassionate Approach to Technology</h3>

            <p className="mb-6 leading-relaxed">
              At the heart of Memento lies a deep understanding of the human experience. Our team of linguists, psychologists, and developers have worked tirelessly to ensure that each eulogy isn't just a collection of facts, but a tapestry of emotions, anecdotes, and cherished moments that truly encapsulate a person's journey.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-6 italic text-gray-700">
              "Memento didn't just help me write a eulogy; it helped me process my grief and celebrate my grandmother's incredible life in ways I never thought possible." - Sarah T., Beta User
            </blockquote>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">How Memento Works</h3>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Share memories, traits, and stories about your loved one</li>
              <li>Choose a tone and style that best reflects their personality</li>
              <li>Let our AI weave these elements into a beautiful narrative</li>
              <li>Review, edit, and personalize the generated eulogy</li>
              <li>Deliver a heartfelt tribute that honors their legacy</li>
            </ol>

            <p className="mb-8 leading-relaxed">
              With Memento, you're never alone in the process. Our platform offers gentle guidance, suggested prompts, and a supportive interface that makes the journey of crafting a eulogy as healing as the final product itself.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-800">The Ethical Foundation</h4>
              <p className="text-blue-900">
                We understand the sensitivity of our mission. That's why Memento is built on a foundation of respect, privacy, and ethical AI use. Your memories are sacred, and we treat them with the utmost care and confidentiality.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join Us in Redefining Remembrance</h3>

            <p className="mb-6 leading-relaxed">
              Memento is more than a tool—it's a movement towards more meaningful, personal, and healing farewells. We invite you to experience the comfort, ease, and profound impact of our Eulogy Generator.
            </p>

            <div className="text-center">
              <a 
                href="#" 
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Try Memento Today
              </a>
            </div>
          </div>
 
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Memento Eulogy Generator. Crafting legacies with compassion and technology.</p>
        </div>
      </footer>
    </div>
  )
}

