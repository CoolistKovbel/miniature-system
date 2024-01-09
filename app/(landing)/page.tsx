import { FAQ } from "@/components/landing-v2/FAQ";
import { Gallary } from "@/components/landing-v2/Gallary";
import { Mintform } from "@/components/landing-v2/MintForm";
import { NewsLetter } from "@/components/landing-v2/NewsLetter";
import { MainHeader } from "@/components/landing-v2/header-v2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#111] text-white min-h-fit w-full">
      <MainHeader />
      
      {/* Hero */}
      <div className="flex items-center justify-center flex-col p-4 h-[350px] md:h-[620px]">
        <h1 className="text-2xl md:text-6xl font-bold text-shadow-xl capitalize">
          Your 1 stop chat site
        </h1>
        <div className="w-[300px] md:w-[800px] h-[200px] md:h-[400px] relative">
          <Image src="/test-1.png" alt="most freinds" fill />
        </div>
      </div>

      {/* Mint NFT */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-[350px] md:w-[1200px]  flex-col md:flex-row p-10 bg-[#112] shadow-lg rounded-lg border-2">
          <div className="w-full md:w-[50%]">
            <h2 className="text-2xl md:text-5xl font-bold mb-10">
              Mint your NFTs
            </h2>
            <p>
              There are a total of 222 tokens availble for you to mint each one
              availble to spread love and happiness. They are ERC-721 tokens
              which are Non-Fungable tokens, different than tradition ERC-20 tokens. For this type of
              collection you will be able to mint them on the ethereum network.
              You can get a total of 3 hopefully you share with your friends.
              For each one minted you are supporting me and will recieve a
              special drop at the end of the party. Be sure to be on Ethereum
              Network for now.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl md:text-2xl font-bold">Mint Price</p>
                <h3 className="text-2xl md:text-2xl font-bold mt-4">
                  0.042 ETH
                </h3>
              </div>

              <div>
                <Mintform />
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[300px] relative">
            <Image
              src="/MysticMurkoNFT.png"
              alt="collection item"
              fill
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-4xl font-bold my-10">How it works?</h2>

        <div className="w-[350px] md:w-[1000px] lg:w-[1400px] flex items-center justify-center gap-10 flex-wrap ">
          <div className="w-full md:w-[40%] h-[340px] md:h-[250px] border-2 bg-[red] flex flex-col p-4">
            <header className="flex justify-between text-2xl mb-10">
              <span>1.</span>
              <h4 className="font-bold">Download crypto wallet</h4>
            </header>

            <p className="md:text-[14px] lg:text-md">
              Get will need to get yourself the metamask wallet extension if you
              have already be sure to check out their website to download and
              connect. Be sure to create an account and make sure you write down
              your private key and mnemonic phrase. Saftey for me is #1
              proirity.
            </p>
          </div>

          <div className="w-full md:w-[40%] h-[340px] md:h-[250px] border-2 bg-[orange] flex flex-col p-4">
            <header className="flex justify-between text-2xl mb-10">
              <span>2.</span>
              <h4 className="font-bold">Connect Wallet</h4>
            </header>

            <p className="md:text-[14px] lg:text-md">
              In order to successfully connect you need to click on the connect
              button, if you have already created an account on the site you
              will be able to mint, if you haven&#39;t you will be able to
              create an account and then mint. You don&#39;t need
              to create an account if you&#39;re blockchain savy you can mint
              through the smart contract...
            </p>
          </div>

          <div className="w-full md:w-[40%] h-[340px] md:h-[250px] border-2 bg-[blue] flex flex-col p-4">
            <header className="flex justify-between text-2xl mb-10">
              <span>3.</span>
              <h4 className="font-bold">Select Quantity</h4>
            </header>

            <p className="md:text-[14px] lg:text-md">
              You can mint a total of 3 ERC-721 tokens per account. Be sure to
              select the correct amount. Please not that by selecting a quantity
              more than 1 the price of minting will change.
            </p>
          </div>

          <div className="w-full md:w-[40%] h-[340px] md:h-[250px] border-2 bg-[green] flex flex-col p-4">
            <header className="flex justify-between text-2xl mb-10">
              <span>4.</span>
              <h4 className="font-bold">Confirm Transaction</h4>
            </header>

            <p className="md:text-[14px] lg:text-md">
              Before you confirm your transaction be sure you have a suffient
              amount of eth in you&#39;r account. At the same time be sure to
              have enough left over to pay for the gas. Once this is done you
              will need to wait till transaction completed.
            </p>
          </div>
        </div>
      </div>


      {/* FAQ */}

      <FAQ />


      {/* GAllary */}
      <Gallary />

      {/* News Letters */}

      <NewsLetter />


    </main>
  );
}
