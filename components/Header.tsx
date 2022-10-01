import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [shownav, setshownav] = useState(false)
  return (
    <div>
      <div className="sticky top-0 flex p-2 px-2 bg-amber-500 shadow-lg rounded-sm items-center z-50">
        {/* LEFT */}
        <div className="flex-1 font-extralight text-2xl">
          {/* <Image src="/Images/mehndi-logo.png" layout="fill" /> */}
          <a href="/">
            <p className="font-bold font-serif px-2 cursor-pointer">
              Hinna Henna
            </p>
          </a>
        </div>
        {/* RIGHT */}
        <div className="lg:inline-flex space-x-8 mr-4 hidden">
          <Link href="/">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-1 before:rounded-full before:bg-yellow-400 before:absolute relative before:-bottom-2 before:scale-0">Home</p>
          </Link>
          <Link href="/services">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-1 before:rounded-full before:bg-yellow-400 before:absolute relative before:-bottom-2 before:scale-0">Services</p>
          </Link>
          <Link href="/gallery">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-1 before:rounded-full before:bg-yellow-400 before:absolute relative before:-bottom-2 before:scale-0">Gallery</p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-1 before:rounded-full before:bg-yellow-400 before:absolute relative before:-bottom-2 before:scale-0">About</p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-1 before:rounded-full before:bg-yellow-400 before:absolute relative before:-bottom-2 before:scale-0">Contact</p>
          </Link>
        </div>
        <div
          onClick={() => {
            setshownav(true)
          }}
          className="lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {shownav && (
        <div className="mr-4 lg:hidden text-center bg-amber-500 text-black font-serif text-lg w-full">
          <Link href="/">
            <p className="cursor-pointer hover:text-lg">Home</p>
          </Link>
          <Link href="/services">
            <p className="cursor-pointer hover:text-lg">Services</p>
          </Link>
          <Link href="/gallery">
            <p className="cursor-pointer hover:text-lg">Gallery</p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer hover:text-lg">About</p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer hover:text-lg">Contact</p>
          </Link>
        </div>
      )}
    </div>
  )
}
