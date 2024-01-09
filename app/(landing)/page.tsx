import { Mintform } from "@/components/landing-v2/MintForm";
import { MainHeader } from "@/components/landing-v2/header-v2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#111] text-white min-h-fit w-full">
      <MainHeader />

      <div className="flex items-center justify-center flex-col p-4 h-[350px] md:h-[620px]">
        <h1 className="text-2xl md:text-6xl font-bold text-shadow-xl capitalize">
          Your 1 stop chat site
        </h1>
        <div className="w-[300px] md:w-[800px] h-[200px] md:h-[400px] relative">
          <Image src="/test-1.png" alt="most freinds" fill />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-10">
              Mint your NFTs
            </h2>
            <p>
              There are a total of 222 tokens availble for you to mint each one
              availble to spread love and happiness. They are ERC-721 tokens which
              are also available on the nervos network. For this type of
              collection you will be able to mint them on the ethereum network.
              You can get a total of 3 hopefully you share with your friends. For
              each one minted you are supporting me and will recieve a special
              drop at the end of the party. Be sure to be on Ethereum Network for
              now.
            </p>

            <div className="flex items-center ">
              <div>
                <p>Mint Price</p>
                <h3>0.042 ETH</h3>
              </div>

              <div>
                <Mintform />
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[300px] relative">
            <Image src="/MysticMurkoNFT.png" alt="collection item" fill />
          </div>
        </div>
      </div>
    </main>
  );
}
