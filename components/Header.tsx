import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="sticky top-0 flex p-2 px-2 bg-amber-500 shadow-lg rounded-sm items-center z-50">
      {/* LEFT */}
      <div className="flex-1 font-extralight text-2xl">
        {/* <Image src="/Images/mehndi-logo.png" layout="fill" /> */}
        <p>Sisters Mehndi</p>
      </div>
      {/* RIGHT */}
      <div className="lg:inline-flex space-x-8 mr-4 hidden">
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
    </div>
  )
}
