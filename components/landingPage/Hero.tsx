import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-[#222] h-[720px] flex flex-col gap-2 items-center justify-around">
    <div className="p-5">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 capitalize">The place where you feel like you belong</h2>
      <p className="mb-10">
        When life throws a curve ball on you get stranded, with mystic murko you will never feel alone. Bringing meows and kitty litter to your life in hope to bring you back to life. In the darkest of nights you are not alone, come and share your tails and bring a new rise of light.
      </p>
      <Link href="/sign-in" className="p-3 bg-black text-[yellow] text-md font-bold inline rounded-lg capitalize">Join in on the action</Link>
    </div>

    <div className="w-[300px] md:w-[800px] h-[200px] md:h-[400px] relative">
      <Image src="/test-1.png" alt="kitrty" fill />
    </div>
  </section>
  )
}

export default Hero