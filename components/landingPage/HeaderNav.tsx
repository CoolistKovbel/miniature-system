"use client"

import Image from "next/image"

import Link from "next/link"
import { MobileNav } from "../MobileNav"



function HeaderNav() {
  return (
    <header className="bg-[#222] flex items-center justify-between w-full p-3">
      
      <div className="flex items-center">

        <div className="w-20 h-20 relative">
          <Image src="/MysticMurkov1.png" alt="glitchy kitty" fill />
        </div>

        <h1 className="text-1xl md:text-2xl font-bold drop-shadow-md">Mystic Kitten</h1>

      </div>


      <div className=" flex items-center gap-4">
        <Link href="/kitty-litter" className="rounded-md shadow-lg bg-black text-yellow p-2 font-bold">Enter KittyLitter</Link>

        <MobileNav />

      </div>


    </header>
  )
}

export default HeaderNav