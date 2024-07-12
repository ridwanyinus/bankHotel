import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="page">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Gallery />
        <Footer />
      </main>
    </motion.div>
  );
}
