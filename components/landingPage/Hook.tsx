import Link from "next/link";
import React from "react";

function Hook() {
  return (
    <section className="p-5">
      <div className="text-center">
        <h2 className="text-2xl md: text-5xl font-bold mb-4 capitalize">
          Intergrated with the blockchain
        </h2>
        <p>
          If you have not already be sure to download metamask to access special
          features within the site as well as join community and meow. For all
          nft holders you will be white listed for future projects as well as be
          able to join in the VIP group.
        </p>
      </div>

      {/* Possible image */}

      <div className="flex items-center justify-center flex-col">
        <h3 className="text-2xl font-bold capitalize mb-4">Ready to start your journey?</h3>
        <Link href="/sign-in" className="text-md font-bold bg-[red] p-2 rounded-lg shadow-lg">Join Now</Link>
      </div>
    </section>
  );
}

export default Hook;
