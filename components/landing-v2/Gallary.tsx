"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ethers } from "ethers";
import { contractAddress } from "../../routes";
import contract from "../../lib/contractABI.json";

export const Gallary = () => {
  const [fetchedImage, setFetchedImage] = useState([])

  useEffect(() => {

    let isMounted = true;

    const xx = async () => {


      const images: any = [];


      if (typeof window !== "undefined") {
        const provider = new ethers.providers.Web3Provider(
          window?.ethereum as any
        );
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(
          contractAddress,
          contract.abi,
          signer
        );

        for (let i = 1; i <= 10; i++) {
          let image = await contractInstance.tokenURI(i);

          if (image.startsWith("ipfs://")) {
            image = `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
              image.split("ipfs://")[1]
            }`;
          }

          const tokenMetaday = await fetch(image).then((res) => res.json());

          if (tokenMetaday.image.startsWith("ipfs://")) {
            let gg = `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
              tokenMetaday.image.split("ipfs://")[1]
            }`;

            images.push(gg);
          }
        }


        setFetchedImage(images)

      }
    };

    xx();

    return () => {
      // Cleanup function to handle component unmount or cleanup
      isMounted = false;
    };


  }, []);


  console.log(fetchedImage)

  return (
    <div className="flex items-center flex-col my-[100px] ">
      <h2 className="text-2xl md:text-5xl font-bold my-10">NFT Gallary</h2>

      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[250px] md:w-[800px] lg:w-[1400px]"
        >
          <CarouselContent className="-mt-1 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pt-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 relative rounded-lg shadow-lg">
                      
                      <Image
                        src={fetchedImage[index] || "/MysticMurkoNFT.png" }
                        alt="hate my life get fucked over by the people you care about"
                        fill
                        className="rounded-lg"
                      />
    
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
