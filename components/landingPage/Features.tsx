import Image from "next/image";
import React from "react";

function Features() {
  return (
    <section className="w-full md:w-[1200px] mx-auto">
      <div className="bg-[#101] p-4 flex items-center shadow-lg rounded-lg">
        {/* Add image container */}
        <div className="w-60 h-60 relative">
          <Image src="/0103.png" alt="girl setting server up" fill />
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Create your own server</h2>
          <p>
            Have your own safe place created right on the blockchain allowing
            anyone to join by paying an entrance fee. where you can talk and
            collaborate with others on your ideas or just have to be social with
            your pals.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-row-reverse p-10 shadow-lg rounded-lg">

        <div className="w-60 h-60 relative">
          <Image src="/41.png" alt="girl sharing some words of wisdom.... maybe" fill />
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Share your words of wisdom</h2>
          <p>
            Everyone needs to let out a meow here and there, you can meow and let
            everyone on the blockchain within the app hear it. You maybe giving a
            shout out or trying to sell your service or just want to let the
            community know what fishy moves you are planning. By meowing you also
            have a small chance of winning some of your fee coins back.
          </p>
        </div>
      </div>

      <div className="bg-[#101] p-4 flex items-center shadow-lg rounded-lg">

        
      <div className="w-60 h-60 relative">
          <Image src="/0058.png" alt="girl setting server up" fill />
        </div>


        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Join VIP</h2>
          <p>
            For every user who holds their very one NFT, you will be able to join a small VIP community where you are able to share input, insight, and are able to not feel so alone. As the project advances and gets built upon you will be able to experience it first.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
