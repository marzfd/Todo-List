import Link from "next/link"
import Image from "next/image"

const profile = () => {
  return (
    <>
      <main className='mx-auto p-5 md:p-10 grid md:grid-cols-3'>
        <div className="mx-auto">
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1 text-center'>
            <Image src="/logo.png" alt="Logo" width={135} height={100} />
          </div>
          <div className='text-center md:space-y-10 space-y-3'>
            <Image src="/profile.jpg" alt="Profile" width={200} height={200} />
            <p className='lg:text-3xl md:text-xl'>Hi Marzieh !</p>
            <div>
              <Link href='/tasks'>
                <a>
                  <button type="button" className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full md:py-3 py-1 md:px-2 rounded-lg shadow-lg font-caveat text-xl md:text-2xl md:font-bold focus:outline-none'>Your Tasks</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='md:ml-20 self-center mt-10 md:mt-20'>
          <p className="mb-5 text-xl font-bold">Your Profile</p>
          <ul className='space-y-3 md:space-y-8'>
            <li>
              <p>Name : <span className='font-semibold'>Marzieh</span></p>
            </li>
            <li>
              <p>Email : <span className='font-semibold'>Marzieh</span></p>
            </li>
            <li>
              <p>Username : <span className='font-semibold'>Marzieh</span></p>
            </li>
          </ul>
          <ul className="md:my-16 space-y-3">
            <li className="pt-10 md:py-10">
              <Link href='/'>
                <a>
                  <button type='button' className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full py-2 px-2 rounded focus:outline-none text-sm md:text-base'>Sign Out</button>
                </a>
              </Link>
            </li>
            <li>
              <button type='button' className='text-sm bg-green-600 hover:bg-green-500 transition duration-300 text-white w-full py-2 px-3 rounded focus:outline-none'>Edit your account</button>
            </li>
            <li>
              <button type='button' className='text-sm bg-red-600 hover:bg-red-500 transition duration-300 text-white w-full py-2 px-3 rounded focus:outline-none'>Delete your account</button>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default profile