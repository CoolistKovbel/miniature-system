"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { ShieldEllipsis } from "lucide-react"


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

        <Sheet>
          <SheetTrigger className="bg-[green] p-2 font-bold rounded-md shadow-lg"><ShieldEllipsis className="w-6 h-6" /></SheetTrigger>
          <SheetContent className="bg-[#222]">
            <SheetHeader className=" p-4">
              <SheetTitle className="text-1xl font-bold text-white">Mystic Kitten</SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex items-center h-full flex-col gap-4">
              <Link href="/" className="p-2 font-bold text-lg bg-[pink] block w-full text-right">Home</Link>
              <Link href="/sign-in" className="p-2 font-bold text-lg bg-[pink] block w-full text-right">Sign In</Link>
              <Link href="/sign-up" className="p-2 font-bold text-lg bg-[pink] block w-full text-right">Sign up</Link>
              <Link href="/mint" className="p-2 font-bold text-lg bg-[pink] block w-full text-right">Mint</Link>
              <Link href="/meows" className="p-2 font-bold text-lg bg-[pink] block w-full text-right">Meows</Link>
              <Link href="/kitty-litter" className="p-2 font-bold text-lg bg-[pink] block w-full text-right">Kitty litter</Link>
            </div>
          </SheetContent>
        </Sheet>

      </div>


    </header>
  )
}

export default HeaderNav