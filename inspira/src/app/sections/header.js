import Image from "next/image"
import Link from 'next/link'
import NavBar from "../components/navbar"

export default function Header() {
  return (
    <main>
      {/* <div className="bg-gray-900 fixed top-0 w-full flex items-center justify-around">
        <Image
          src="https://accelite.blob.core.windows.net/static/logo-prime.png" // Full URL of the external image
          alt="Description of the image"
          width={170} // Set the desired width
          height={170} // Set the desired height
        /> */}
        <div>
          <NavBar/>
        </div>
      {/* </div> */}
      {/* <div>
        <div className="bg-gray-800 text-white fixed top-0 w-full">
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

              </div>

            </div>
          </div>
          <div>
            <p className="text-rose-50">Excited</p>
          </div>
          <div />
        </div>


      </div> */}

    </main>
  )
}