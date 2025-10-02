import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Howitworks = () => {
  return (
    <div className="z-10 relative w-[88%] min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 ml-10 ">
      {/* Heading */}
      <h1 className="z-10 relative font-extrabold text-3xl sm:text-4xl md:text-6xl text-center text-white">
        How it works
      </h1>
      <p className="text-lg sm:text-xl mt-4 text-center text-gray-300">
        Payments in 3 Simple Steps
      </p>

      {/* Steps Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-10 w-full justify-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-[70%] sm:w-[230px]">
          <div className="bg-gray-300 w-full aspect-square rounded-lg flex items-center justify-center">
            <Image
              src="/images/1copy.png"
              alt="Download App"
              width={250}
              height={250}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-white mt-3 text-center">Download The App</p>
        </div>

        <ArrowRight className="hidden sm:block w-12 h-12 sm:w-16 sm:h-16 text-white" />

        {/* Step 2 */}
        <div className="flex flex-col items-center w-[70%] sm:w-[220px]">
          <div className="bg-gray-300 w-full aspect-square rounded-lg flex items-center justify-center">
            <Image
              src="/images/2copy.png"
              alt="Link Bank Account"
              width={250}
              height={250}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-white mt-3 text-center">
            Link Bank Account / Set UPI
          </p>
        </div>

        <ArrowRight className="hidden sm:block w-12 h-12 sm:w-16 sm:h-16 text-white" />

        {/* Step 3 */}
        <div className="flex flex-col items-center w-[70%] sm:w-[220px]">
          <div className="bg-gray-300 w-full aspect-square rounded-lg flex items-center justify-center">
            <Image
              src="/images/1copy.png"
              alt="Pay with Voice or Scan"
              width={250}
              height={250}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-white mt-3 text-center">Pay with Voice or Scan</p>
        </div>
      </div>

      {/* Button */}
      <button className="flex items-center mt-12 gap-2 border border-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover:border-green-600 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M325.3 234.3L104.1 28.5C112.2 24.9 121.3 23 130.7 23c18.5 0 36.2 7.4 49.3 20.5l171.3 171.3c10.2 10.2 16.7 23.6 17.8 38.1 1.1 14.5-2.9 28.9-11.4 40.7l-32.4-32.4zM96 53.1v405.9c0 16.9 13.7 30.6 30.6 30.6 7.7 0 15.1-2.9 20.7-8.3l186.6-186.6L96 53.1zm319.9 180.6l-39.4 39.4 39.4 39.4c8.1-8.1 12.7-19.1 12.7-30.7s-4.6-22.6-12.7-30.7zm-79.9 79.9L150 468.1c-13.1 13.1-30.8 20.5-49.3 20.5-9.4 0-18.5-1.9-26.6-5.5l221.2-205.8z" />
        </svg>
        DOWNLOAD THE APP
      </button>
    </div>
  )
}

export default Howitworks
