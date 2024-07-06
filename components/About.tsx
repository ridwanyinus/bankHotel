import React from "react";
import Image from "next/image";
import vector14 from "@/public/Vector 14.svg";
import eclipse18 from "@/public/Ellipse 18.svg";
import vector6 from "@/public/Vector 6.svg";

const About = () => {
  return (
    <main className="bg-primary mt-0 py-14 lg:pt-20  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 h-screen">
      <Image src={vector14} alt="vector-line" className="absolute right-0 desktop:w-[60%] " />
      <Image src={eclipse18} alt="eclipse-line" className="absolute desktop:w-[70%] " />
      {/* <Image src={vector6} alt="vector-line" className="absolute right-[28%] " /> */}

      <section></section>
    </main>
  );
};

export default About;
