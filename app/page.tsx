import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <Footer />
    </main>
  );
}
