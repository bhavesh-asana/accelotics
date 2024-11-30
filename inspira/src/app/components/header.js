import Image from "next/image"
import Link from 'next/link'

export default function Header() {
  return (
    <main>
      <div>
        <nav className="bg-gray-800 text-white fixed top-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="https://accelite.blob.core.windows.net/static/logo-prime.png" // Full URL of the external image
                    alt="Description of the image"
                    width={170} // Set the desired width
                    height={170} // Set the desired height
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex space-x-4">
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </nav>

      </div>

    </main>
  )
}