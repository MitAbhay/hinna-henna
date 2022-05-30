import React from 'react'
import Gallery from 'react-grid-gallery'

export default function gallery() {
  const IMAGES = [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail:
        'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      thumbnail:
        'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ]
  return (
    <div className="max-w-[900px] mx-auto mt-16">
      <Gallery images={IMAGES} />,
    </div>
  )
}
