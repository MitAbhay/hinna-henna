import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="sticky top-0 flex p-2 px-2 bg-amber-500 shadow-lg rounded-sm items-center">
      {/* LEFT */}
      <div className="flex-1 font-extralight text-2xl">
        {/* <Image src="/Images/mehndi-logo.png" layout="fill" /> */}
        <p>Sisters Mehndi</p>
      </div>
      {/* RIGHT */}
      <div className="flex space-x-8 mr-4">
        <p className="cursor-pointer hover:text-lg">Home</p>
        <p className="cursor-pointer hover:text-lg">Services</p>
        <p className="cursor-pointer hover:text-lg">Gallery</p>
        <p className="cursor-pointer hover:text-lg">About</p>
        <p className="cursor-pointer hover:text-lg">Contact</p>
      </div>
    </div>
  )
}
