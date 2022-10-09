import React from 'react'
import PhotoAlbum from "react-photo-album";

import { photos } from '../public/Gallery-Images/Images'

export default function gallery() {

  return (
    <div className="mt-16 mx-10 items-center text-center">
      <PhotoAlbum layout='columns' photos={photos} />,
    </div>
  )
}
