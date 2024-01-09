"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShieldEllipsis } from "lucide-react";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-[green] p-2 font-bold rounded-md shadow-lg">
        <ShieldEllipsis className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent className="bg-[#222]">
        <SheetHeader className=" p-4">
          <SheetTitle className="text-1xl font-bold text-white">
            Mystic Kitten
          </SheetTitle>
        </SheetHeader>
        <div className="mt-10 flex items-center h-full flex-col gap-4">
          <Link
            href="/"
            className="p-2 font-bold text-lg bg-[pink] block w-full text-right"
          >
            Home
          </Link>
          <Link
            href="/sign-in"
            className="p-2 font-bold text-lg bg-[pink] block w-full text-right"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="p-2 font-bold text-lg bg-[pink] block w-full text-right"
          >
            Sign up
          </Link>
          <Link
            href="/mint"
            className="p-2 font-bold text-lg bg-[pink] block w-full text-right"
          >
            Mint
          </Link>
          <Link
            href="/meows"
            className="p-2 font-bold text-lg bg-[pink] block w-full text-right"
          >
            Meows
          </Link>
          <Link
            href="/kitty-litter"
            className="p-2 font-bold text-lg bg-[pink] block w-full text-right"
          >
            Kitty litter
          </Link>
        </div>
      </SheetContent>
      
    </Sheet>
  );
};
