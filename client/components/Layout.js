import Image from "next/image"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-auto bg-gradient-to-br from-orange-50 to-orange-300">
        {children}
      </main>
      <footer className='bg-white font-caveat text-xl p-4 flex items-center justify-center'>
        <Image src="/logo.png" alt="Logo" width={30} height={20} className="mb-6"/>
        &copy; 2022 Created by Marzieh !
      </footer>
    </div>
  )
}

export default Layout