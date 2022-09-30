import React from 'react'
import Gallery from 'react-photo-gallery'
// import Gallery from 'react-grid-gallery'
import { photos } from '../public/Gallery-Images/Images'

export default function gallery() {

  return (
    <div className="mt-16 mx-10 items-center text-center">
      <Gallery direction='column' photos={photos} />,
    </div>
  )
}
