import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import photos from '../public/Gallery-Images/Images.json'
import Pagination from '../components/Pagination'

export default function gallery() {
  const [images, setImages] = useState(photos)
  const [currentPage, setCurrentPage] = useState(1)
  const [imagesPerPage, setImagesPerPage] = useState(10)

  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const next = () => setCurrentPage(currentPage + 1)
  const previous = () => setCurrentPage(currentPage - 1)

  return (
    <div className="flex flex-col mx-auto mt-10">
      <div className="mx-10 mt-10">
        <PhotoAlbum layout="columns" photos={currentImages} />
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={photos.length}
          paginate={paginate}
          next={next}
          previous={previous}
          currentPage={currentPage}
          indexOfLastImage={indexOfLastImage}
        />
      </div>
    </div>
  )
}
