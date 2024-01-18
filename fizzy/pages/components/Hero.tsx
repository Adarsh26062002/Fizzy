import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <div className='flex mt-8 max-w-screen-xl m-auto'>
        <div className='w-1/2 p-8'>
          <h1 className='text-5xl w-80 font-extrabold leading-normal'>Everything is better with a <span className=' text-blue-600'>Pizza</span></h1>
          <p className=' text-gray-500 w-96 mt-6 mb-6'>Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
          <div className='flex gap-6'>
            <a
              className="group h-14 flex items-center justify-between gap-4 rounded-full border border-blue-600 bg-blue-600 px-5 py-0 transition-colors hover:bg-transparent focus:outline-none focus:ring"
              href="/download"
            >
              <span
                className="font-medium text-white transition-colors group-hover:text-blue-600 group-active:text-blue-500"
              >
                Order now
              </span>

              <span
                className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>

            {/* Border */}

            <a
              className=" h-14 group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-blue-600 transition-colors hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500"
              href="/download"
            >
              <span className="font-medium transition-colors group-hover:text-white"> Learn more </span>

              <span
                className="shrink-0 rounded-full border border-blue-600 bg-white p-2 group-active:border-blue-500"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className=' w-1/2 p-4 flex justify-center items-center'>
          <img className='rounded-2xl h-full' src="https://imgs.search.brave.com/uC5xki6gahy-13LllYtQbfVrCsPbnCZKS8tEZ5dadoo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9QaXp6YS1QTkct/SW1hZ2UucG5n" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero