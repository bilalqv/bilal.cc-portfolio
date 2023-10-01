'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className=" dark:text-white fixed flex rounded-2xl max-[950px]:rounded-b-none
    min-[951px]:w-28 min-[951px]:left-0 min-[951px]:top-1/2 min-[951px]:transform min-[951px]:-translate-y-1/2 min-[951px]:flex-col
    max-[950px]:bottom-0 max-[950px]:left-0 max-[950px]:right-0 max-[950px]:w-min max-[950px]:mx-auto
    
    border border-gray-700 outline-1 max-[950px]:border-b-0
    dark:max-[950px]:bg-[#1E1E1E] dark:max-[950px]:bg-opacity-90
    max-[950px]:bg-[#bebebe] max-[950px]:bg-opacity-90
    z-10
    ">
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#cccccc] max-[950px]:hover:bg-[#dddddd] dark:hover:bg-[#181818] dark:max-[950px]:hover:bg-[#181818]  text-xs ${pathname == '/' ? 'bg-[#cccccc] dark:bg-[#1b1b1b] max-[950px]:bg-[#eeeeee]  dark:max-[950px]:bg-black ' : '' } `} href='/'>Home</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#cccccc] max-[950px]:hover:bg-[#dddddd] dark:hover:bg-[#181818] dark:max-[950px]:hover:bg-[#181818]  text-xs ${pathname == '/about' ? 'bg-[#cccccc] dark:bg-[#1b1b1b] max-[950px]:bg-[#eeeeee]  dark:max-[950px]:bg-black ' : '' } `} href='/about'>About</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#cccccc] max-[950px]:hover:bg-[#dddddd] dark:hover:bg-[#181818] dark:max-[950px]:hover:bg-[#181818]  text-xs ${pathname == '/experience' ? 'bg-[#cccccc] dark:bg-[#1b1b1b] max-[950px]:bg-[#eeeeee]  dark:max-[950px]:bg-black ' : '' } `} href='/experience'>Experience</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#cccccc] max-[950px]:hover:bg-[#dddddd] dark:hover:bg-[#181818] dark:max-[950px]:hover:bg-[#181818]  text-xs ${pathname == '/projects' ? 'bg-[#cccccc] dark:bg-[#1b1b1b] max-[950px]:bg-[#eeeeee]  dark:max-[950px]:bg-black ' : '' } `} href='/projects'>Projects</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#cccccc] max-[950px]:hover:bg-[#dddddd] dark:hover:bg-[#181818] dark:max-[950px]:hover:bg-[#181818]  text-xs ${pathname == '/achievements' ? 'bg-[#cccccc] dark:bg-[#1b1b1b]  max-[950px]:bg-[#eeeeee] dark:max-[950px]:bg-black ' : '' } `} href='/achievements'>Achievements</Link>
      <Link className={`p-2 m-2 max-[500px]:px-1 max-[500px]:mx-1 max-[400px]:tracking-tight max-[400px]:font-light rounded-md hover:bg-[#cccccc] max-[950px]:hover:bg-[#dddddd] dark:hover:bg-[#181818] dark:max-[950px]:hover:bg-[#181818]  text-xs ${pathname == '/contact' ? 'bg-[#cccccc] dark:bg-[#1b1b1b]  max-[950px]:bg-[#eeeeee] dark:max-[950px]:bg-black ' : '' } `} href='/contact'>Contact</Link>


    </div>
  )
}