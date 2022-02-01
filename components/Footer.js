import Image from "next/image"

const Footer = () => {
  return (
    <footer className='bg-white font-caveat text-xl p-4 flex items-center justify-center'>
      <Image src="/logo.png" alt="Logo" width={30} height={20} className="mb-6"/>
      &copy; 2022 Created by Marzieh !
    </footer>
  )
}

export default Footer