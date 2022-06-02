import Image from 'next/image'
import React from 'react'

export default function () {
  return (
    <div className="bg-yellow-400 z-50 pt-16 px-16 pb-2">
      <div className="flex">
        <div className="flex-1 p-4">
          <p className="text-4xl font-serif">Sisters Mehndi</p>
          <p className="text-lg font-serif mt-2">Follow Us</p>
          <div className=" flex space-x-2 w-8 h-8 ">
            <img src="/Logos/facebook.png" alt="facebook" />
            <img src="/Logos/instagram.png" alt="facebook" />
            <img src="/Logos/twitter.png" alt="facebook" />
            <img src="/Logos/youtube.png" alt="facebook" />
          </div>
        </div>
        <div className="flex space-x-16">
          <ul>
            <li className="font-bold">Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
          </ul>
          <ul>
            <li className="font-bold">Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
          </ul>
          <ul>
            <li className="font-bold">Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
          </ul>
          <ul>
            <li className="font-bold">Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
            <li>Collobrate</li>
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <hr />
        <p className="text-center">copyrignt © 2022 || Sisters Mehndi </p>
      </div>
    </div>
  )
}
