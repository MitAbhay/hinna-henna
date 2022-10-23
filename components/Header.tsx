import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
  const [shownav, setshownav] = useState(false)
  const { data: sessionData } = useSession()
  return (
    <div>
      <div className="sticky top-0 flex p-2 px-2 bg-amber-500 shadow-lg rounded-sm items-center z-50">
        {/* LEFT */}
        <div className="flex-1 font-extralight text-2xl">
          {/* <Image src="/Images/mehndi-logo.png" layout="fill" /> */}
          <p className="font-bold font-serif px-2 w-max cursor-pointer">
            <a href="/">Hinna Henna</a>
          </p>
        </div>
        {/* RIGHT */}
        <div className="lg:inline-flex space-x-8 mr-4 hidden items-center">
          <Link href="/">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-0.5 before:rounded-full before:bg-black font-medium before:absolute relative before:-bottom-1 before:scale-0">
              Home
            </p>
          </Link>
          <Link href="/services">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-0.5 before:rounded-full before:bg-black font-medium before:absolute relative before:-bottom-1 before:scale-0">
              Services
            </p>
          </Link>
          <Link href="/gallery">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-0.5 before:rounded-full before:bg-black font-medium before:absolute relative before:-bottom-1 before:scale-0">
              Gallery
            </p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-0.5 before:rounded-full before:bg-black font-medium before:absolute relative before:-bottom-1 before:scale-0">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer hover:before:content-[''] before:w-full hover:before:scale-100 hover:before:transition-all before:duration-700 before:delay-100 before:h-0.5 before:rounded-full before:bg-black font-medium before:absolute relative before:-bottom-1 before:scale-0">
              Contact
            </p>
          </Link>
          <button
            className="px-2 py-1 border border-black text-md rounded-md bg-blue-50 hover:bg-blue-100 shadow-lg'"
            onClick={sessionData ? () => signOut() : () => signIn()}
          >
            {sessionData ? 'Sign out' : 'Sign in'}
          </button>
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
        <div className="mr-4 lg:hidden text-center center bg-amber-500 text-black font-serif text-lg w-full">
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
          <button
            className="px-2 py-1 border border-black text-md rounded-md bg-blue-50 hover:bg-blue-100 shadow-lg'"
            onClick={sessionData ? () => signOut() : () => signIn()}
          >
            {sessionData ? 'Sign out' : 'Sign in'}
          </button>
        </div>
      )}
    </div>
  )
}
