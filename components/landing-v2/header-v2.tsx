"use client";

import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"

declare global {
  interface Window {
    ethereum?: any; // Define ethereum property on the window object
  }
}

export const MainHeader = () => {
  const { toast } = useToast()


  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });


        if (accounts.length !== 0) {
          const account = accounts[0];



          console.log(account);
        } else {
          toast({
            title: "errror",
            description: "No authorized account found"
          })
          console.error("No authorized account found");
          return null;
        }
      } else {
        console.log("download etheruem");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex items-center justify-center w-full p-2 bg-[#123]">
      <div className="w-[350px] md:w-[1200px]  flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Logo and image */}
          <div className="flex items-center md:gap-2">
            <h2 className="text-xl md:text-4xl font-bold">
              <Link href="/">MMC</Link>
            </h2>

            <div className="w-20 h-20 hidden md:block relative">
              <Image src="/MysticMurkov1.png" alt="lost my friend" fill />
            </div>
          </div>

          {/* Navigation items */}
          <nav className="">
            <div className="hidden text-sm font-bold  md:block">
              <Link href="/about" className="mr-4">
                About
              </Link>
              <Link href="/mint" className="mr-4">
                Mint
              </Link>
              <Link href="/community" className="mr-4">
                Community
              </Link>
              <Link href="/announcement" className="">
                Announcement
              </Link>
            </div>

            <div className="block md:hidden">
              <MobileNav />
            </div>
          </nav>
        </div>

        {/* Buttons */}
        <div>
          <Button onClick={() => getAccount()}>Connect</Button>
        </div>
      </div>
    </header>
  );
};
