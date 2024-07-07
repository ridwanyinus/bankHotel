import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
    </main>
  );
}
