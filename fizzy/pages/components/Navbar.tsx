import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <div className='w-full'>
        <header className="bg-white border-b-2">
          <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-28 px-4 sm:px-6 lg:px-8">
            <a className="block text-blue-600 text-3xl font-bold" href="/">
              FIZZY.
            </a>
            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-14 text-sm">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-lg" href="/"> Home </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-lg" href="/"> Menu </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-lg" href="/"> About </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-lg" href="/"> Contact </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <span>0</span>
                </div>
                <button
                  className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar