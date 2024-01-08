import Features from "@/components/landingPage/Features";
import HeaderNav from "@/components/landingPage/HeaderNav";
import Hero from "@/components/landingPage/Hero";
import Hook from "@/components/landingPage/Hook";


export default function Home() {
  return (
    <main className="bg-[#111] text-white min-h-screen">


      {/* header */}
      <HeaderNav />


      {/* Hero */}
      <Hero />

      {/* features */}
      <Features />


      {/* Hook */}
      <Hook />


    </main>
  )
}
