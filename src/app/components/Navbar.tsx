'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className=" text-white fixed flex rounded-2xl 
    min-[951px]:w-28 min-[951px]:left-0 min-[951px]:top-1/2 min-[951px]:transform min-[951px]:-translate-y-1/2 min-[951px]:flex-col
    max-[950px]:bottom-0 max-[950px]:left-0 max-[950px]:right-0 max-[950px]:w-min max-[950px]:mx-auto
    
    border border-gray-700 outline-1 
    max-[950px]:bg-[#1E1E1E] max-[950px]:bg-opacity-90
    z-10
    ">
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#141414] text-xs ${pathname == '/' ? 'bg-[#1b1b1b]  max-[950px]:bg-black ' : '' } `} href='/'>Home</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#141414] text-xs ${pathname == '/about' ? 'bg-[#1b1b1b]  max-[950px]:bg-black ' : '' } `} href='/about'>About</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#141414] text-xs ${pathname == '/experience' ? 'bg-[#1b1b1b]  max-[950px]:bg-black ' : '' } `} href='/experience'>Experience</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#141414] text-xs ${pathname == '/projects' ? 'bg-[#1b1b1b]  max-[950px]:bg-black ' : '' } `} href='/projects'>Projects</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#141414] text-xs ${pathname == '/achievements' ? 'bg-[#1b1b1b]  max-[950px]:bg-black ' : '' } `} href='/achievements'>Achievements</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#141414] text-xs ${pathname == '/contact' ? 'bg-[#1b1b1b]  max-[950px]:bg-black ' : '' } `} href='/contact'>Contact</Link>


    </div>
  )
}