import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <Head>
        <title>TODO List App</title>
        <meta name="description" content="Web development project" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='mx-auto lg:w-9/12 p-10 flex flex-wrap'>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 mt-10'>
            <Image src="/logo.png" alt="Logo" width={270} height={200} />
          </div>
          <h1 className='lg:text-5xl md:text-3xl font-semibold'>Manage Your Tasks</h1>
          <p className='lg:text-3xl md:text-xl font-open-sans lg:pt-10 lg:pb-10 pt-5 pb-5'>What should I do today?</p>
          <Link href='/signIn'>
            <button type='button' className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white md:font-semibold font-caveat lg:text-xl py-2 px-4 rounded-lg shadow-lg shadow-purple-500/50 focus:outline-none'>Let's Start</button>
          </Link>
        </div>
        <div className='mx-auto max-w-sm self-center'>
          <Image src='/doodle.png' alt='doodle' width={400} height={350} />
        </div>
      </main>
    </>
  )
}
