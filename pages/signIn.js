import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import Router from 'next/router'

const signIn = () => {

  const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    console.log(username)
    if (!username) {
      setError("Please fill in the required fields !")
    } else {
      setError("")
      fetch(`/api/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('Username does not exist !')
        } else {
          alert(`Welcome ${data.name} !`)
          Router.push({
            pathname: '/profile',
            query: {
              name: data.name,
              username: data.username,
              email: data.email
            }
          })
        }
      })
      .catch(err => console.log(err))
    }
  }

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
          <form className='space-y-8'>
            <div>
              <input
                type='text'
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
                className='text-sm border-b-2 border-purple-200 placeholder-purple-300 px-3 py-2 focus:outline-none focus:border-purple-400 w-full'
              />
            </div>
            <div>
              <input
                type='password'
                placeholder="Password"
                className='text-sm border-b-2 border-purple-200 placeholder-purple-300 px-3 py-2 focus:outline-none focus:border-purple-400 w-full'
                disabled
              />
            </div>
            {/* <div className="flex items-center text-gray-500">
              <input
                type='checkbox'
                className='mr-2 mt-3 mb-3'
              />
              <span className='text-xs'>Remember me</span>
            </div> */}
            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full py-2 px-4 rounded-lg focus:outline-none'
                >
                  Sign In
              </button>
            </div>
          </form>
          {
            error
            &&
            <div className="relative py-3 my-5 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
              <p>{error}</p>
              <span className="absolute inset-y-0 right-0 flex items-center mr-4">
                <button
                  type="button"
                  onClick={() => setError(null)}
                  className="text-red-700 focus:outline-none focus:shadow-outline"
                >
                  <svg className="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>
              </span>
            </div>
          }
        </div>
        <div className='mt-20 md:hidden'>
            <p className='text-lg mt-2 mb-3'>Don&apos;t have an account?</p>
            <Link href='/signUp'>
              <a>
                <button type="button" className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white font-caveat lg:text-xl py-2 px-4 rounded-lg shadow-lg shadow-purple-500/50 focus:outline-none'>Sign Up</button>
              </a>
            </Link>
          </div>
      </main>
    </div>
  )
}

export default signIn