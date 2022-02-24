import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex">
            <Image src="/logo.png" alt="Logo" width={48} height={30} />
            <span className="text-xs md:text-lg font-semibold self-auto px-3 py-1">TODOList</span>
          </a>
          <div className="flex text-xs md:text-lg my-1">
            <ul className="flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/signIn">
                  <a className="block mr-2 px-2 md:px-4 py-1 md:py-2 text-gray-700 rounded hover:bg-purple-400 hover:text-white focus:outline-none" aria-current="page">LOGIN</a>
                </Link>
              </li>
              <li>
                <Link href="/signUp" >
                  <a className="block px-2 md:px-4 py-1 md:py-2 text-white bg-purple-700 rounded focus:ring-2 focus:ring-gray-600 focus:outline-none hover:bg-purple-500 transition duration-300" aria-current="page">Sign Up</a>
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