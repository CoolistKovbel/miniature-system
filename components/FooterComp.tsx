import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Twitter } from "lucide-react";

const FooterComp = () => {
  return (
    <footer className="bg-[#222] p-6 p-y-[20px] flex items-center justify-between">

      <div className="flex flex-col gap-[4px]">

        <div className="flex items-center">
          <div className="w-20 h-20 relative">
            <Image src="/MysticMurkov1.png" alt="glitchy kitty" fill />
          </div>

          <h1 className="text-1xl md:text-2xl font-bold">Mystic Kitten</h1>
        </div>

        <p className="font-semibold text-sm w-[300px] md:w-[800px]">
          The place to come through when you feeling lost or someone comes into your life and ruins it and you have to all this stress because you know you have to do so much stuff and nobody going to help but just look and give you a hard time
        </p>

        <div className="mt-[10px] flex gap-[10px]">
          <Github />
          <Instagram />
          <Twitter />
        </div>
      </div>

      <div className="flex justify-end gap-[100px]">
        <div className=" flex flex-col gap-[10px] font-semibold">
          <span className="bg-emerald-500 p-2 text-center rounded-md font-bold">
            Links
          </span>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

      </div>

    </footer>
  );
};

export default FooterComp;
