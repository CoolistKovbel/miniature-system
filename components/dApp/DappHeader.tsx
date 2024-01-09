

import Link from "next/link";
import { MobileNav } from "../MobileNav";
import { Button } from "../ui/button";

export const DappHeader = () => {
  return (
    <header className="bg-[#112] ">

      <div className="flex items-center gap-2 p-4 ">
        <h2 className="text-2xl font-bold"><Link href="/">Mystic Kitten</Link></h2>

        <MobileNav />
      </div>

      <div className="w-full bg-black p-4 ">
        <Button>Connect Wallet</Button>
      </div>

    </header>
  );
};
