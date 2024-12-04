export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">We're passionate about sharing knowledge and insights through our blog.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="/" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="/blog" className="hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-white">About</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Your Blog Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

