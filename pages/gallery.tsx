import React from 'react'
import Gallery from 'react-grid-gallery'
import { IMAGES } from '../public/Gallery-Images/Images'

export default function gallery() {

  return (
    <div className="mt-16">
      <Gallery images={IMAGES} />,
    </div>
  )
}
