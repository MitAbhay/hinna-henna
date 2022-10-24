interface PaginationProps {
  imagesPerPage: number
  totalImages: number
  currentPage: number
  indexOfLastImage: number
  paginate: (number: number) => void
  next: () => void
  previous: () => void
}

const Pagination = (props: PaginationProps) => {
  const { imagesPerPage, totalImages, paginate, next, previous, currentPage } =
    props

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <div className="flex justify-center mt-10 items-center py-2">
        {currentPage >= 2 ? (
          <button
            className="px-6 py-2 bg-slate-600 text-white rounded-md mx-2"
            onClick={() => previous()}
          >
            Prev
          </button>
        ) : (
          <div className="px-6 py-2 bg-slate-200 text-white rounded-md mx-2">
            Prev
          </div>
        )}

        <div className="flex">
          {pageNumbers.map((number) => (
            <div key={number}>
              <a
                href="#"
                className="px-6 py-3 border hover:bg-gray-200"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </div>
          ))}
        </div>

        {currentPage !== pageNumbers.length ? (
          <button
            className="px-6 py-2 bg-slate-600 text-white rounded-md mx-2"
            onClick={() => next()}
          >
            Next
          </button>
        ) : (
          <div className="px-6 py-2 bg-slate-200 text-white rounded-md mx-2">
            Next
          </div>
        )}
      </div>
    </div>
  )
}
export default Pagination
