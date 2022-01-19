import Link from 'next/link'

const Nav = () => {
  return (
    <>

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex">
          <img src="/logo.png" alt="Logo" className="w-auto h-8" />
            <span className="self-center text-lg font-semibold whitespace-nowrap px-3">TODOList</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 400 ray-700 -gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/signIn">
                <a className="block px-4 py-2 text-gray-700 rounded hover:bg-purple-400 hover:text-white focus:outline-none" aria-current="page">LOGIN</a>
              </Link>
            </li>
            <li>
              <Link href="/signUp" >
                <a className="block px-4 py-2 text-white bg-purple-700 rounded focus:ring-2 focus:ring-gray-600 focus:outline-none hover:bg-purple-500 transition duration-300" aria-current="page">Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav