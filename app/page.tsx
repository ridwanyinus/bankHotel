import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
    </main>
  );
}
