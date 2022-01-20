import Link from "next/link"
import Image from "next/image"

const signIn = () => {
  return (
    <div>
      <main className='mx-auto lg:w-9/12 p-5 md:p-10 flex flex-wrap'>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
            <Image src="/logo.png" alt="Logo" width={135} height={100} />
          </div>
          <h2 className='lg:text-5xl md:text-3xl font-semibold'>Welcome Back !</h2>
          <p className='lg:text-3xl md:text-xl lg:pt-10 lg:pb-10 mt-2 mb-5'>Good Morning</p>
          <div className='md:mt-14 lg:mt-20 hidden md:block'>
            <p className='text-lg lg:mb-5 mt-2 mb-3'>Don&apos;t have an account?</p>
            <Link href='/signUp'>
              <a>
                <button type='button' className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white font-caveat lg:text-xl py-2 px-4 rounded-lg shadow-lg shadow-purple-500/50 focus:outline-none'>Sign Up</button>
              </a>
            </Link>
          </div>
        </div>
        <div className='mx-auto bg-white p-4 md:p-8 rounded-lg shadow-2xl h-min md:w-1/2 lg:w-1/3 w-full self-center'>
          <h2 className='mb-5 font-semibold'>Sign in to your account</h2>
          <form className='space-y-4'>
            <div>
              <input type='text' placeholder="Username" className='text-sm border-b-2 border-purple-200 placeholder-purple-300 px-3 py-2 focus:outline-none focus:border-purple-400 w-full'/>
            </div>
            <div>
              <input type='password' disabled placeholder="Password" className='text-sm border-b-2 border-purple-200 placeholder-purple-300 px-3 py-2 focus:outline-none focus:border-purple-400 w-full'/>
            </div>
            <div className="flex items-center text-gray-500">
              <input type='checkbox' className='mr-2 mt-3 mb-3'/>
              <span className='text-xs'>Remember me</span>
            </div>
            <div>
              <Link href='/profile'>
                <a>
                  <button type="submit" className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full py-2 px-4 rounded-lg focus:outline-none'>Sign In</button>
                </a>
              </Link>
            </div>
          </form>
        </div>
        <div className='mt-20 md:hidden'>
            <p className='text-lg mt-2 mb-3'>Don&apos;t have an account?</p>
            <Link href='/signUp'>
              <a>
                <button type="button" className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white font-caveat lg:text-xl py-2 px-4 rounded-lg shadow-lg shadow-purple-500/50 focus:outline-none hover:bg-purple-100'>Sign Up</button>
              </a>
            </Link>
          </div>
      </main>
    </div>
  )
}

export default signIn