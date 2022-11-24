import React from 'react'

export default function contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center transition-all my-32">
      <div className="drop-shadow-lg  mt-10 lg:mt-5 transition-all">
        <img
          src="https://images.unsplash.com/photo-1534250227836-8257f90b95b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="w-96 lg:w-[720px] rounded-md"
        />
      </div>
      <div className="drop-shadow-md transition-all">
        <div className="p-6 mr-2 m-5 bg-gray-100 sm:rounded-lg">
          <h1 className="text-4xl sm:text-5xl text-yellow-600  font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-normal text-lg sm:text-2xl transition-all font-medium text-gray-600 mt-2">
            We would love to hear from you
          </p>

          <div className="flex items-center mt-8 text-gray-600">
            <svg
              fill="#ca8a04"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Hinna Henna Inc, New Delhi, New Delhi, 222202
            </div>
          </div>

          <div className="flex items-center mt-4 text-gray-600">
            <svg
              fill="#ca8a04"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              +91 1234567890
            </div>
          </div>

          <div className="flex items-center mt-2 text-gray-600">
            <svg
              fill="#ca8a04"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40 hover:text-black">
              <a href="mailto:info@hinnahenna.com">info@hinnahenna.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
