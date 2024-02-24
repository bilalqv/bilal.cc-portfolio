'use client'

import { NavList } from "@/constants";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=" dark:text-white fixed flex rounded-2xl max-[950px]:mb-1
    min-[951px]:w-28 min-[951px]:left-0 min-[951px]:top-1/2 min-[951px]:transform min-[951px]:-translate-y-1/2 min-[951px]:flex-col
    max-[950px]:bottom-0 max-[950px]:left-0 max-[950px]:right-0 max-[950px]:w-min max-[950px]:mx-auto
    
    border border-gray-700 outline-1
    dark:max-[950px]:bg-[#1E1E1E] dark:max-[950px]:bg-opacity-90
    max-[950px]:bg-[#bebebe] max-[950px]:bg-opacity-90
    z-10
    ">
      {
        NavList.map((item, index) => (
          <Link className={`nav-btn ${pathname == item.href ? 'nav-btn-active' : ''}`} key={index} href={item.href}>
            { windowWidth <= 500 ? item.icon : item.name }
          </Link>
        ))
      }
    </div>
  )
}