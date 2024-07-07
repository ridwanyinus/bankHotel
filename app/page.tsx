import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
