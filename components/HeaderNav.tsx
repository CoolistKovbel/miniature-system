"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"


function HeaderNav() {
  return (
    <header className="bg-[#222] flex items-center justify-between w-full p-3">
      
      <div className="flex items-center">

        <div className="w-20 h-20 relative">
          <Image src="/MysticMurkov1.png" alt="glitchy kitty" fill />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold">Mystic Kitten</h1>

      </div>


      <div className=" flex items-center gap-4">
        <Link href="/kitty-litter" className="rounded-md shadow-lg bg-black text-yellow p-2 font-bold">Enter KittyLitter</Link>

        <Sheet>
          <SheetTrigger className="bg-[green] p-2 font-bold rounded-md shadow-lg">Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">Mystic Kitten</SheetTitle>
            </SheetHeader>
            <div className="flex items-end flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/sign-in">Sign In</Link>
              <Link href="/sign-up">Sign up</Link>
              <Link href="/mint">Mint</Link>
              <Link href="/meows">Meows</Link>
              <Link href="/kitty-litter">Kitty litter</Link>
            </div>
          </SheetContent>
        </Sheet>

      </div>


    </header>
  )
}

export default HeaderNav