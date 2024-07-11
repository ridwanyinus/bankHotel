import React from "react";
import best from "@/public/roomHero.png";
import btn from "@/public/button - default.svg";
import Image from "next/image";
const RoomHero = () => {
  return (
    <main className="sm:pb-20 lg:pb-28 largesceen:pb-44 overflow-hidden">
      <section className="relative w-full  h-full max-sm:h-[60vh]">
        <Image
          src={best}
          alt="diver"
          className="absolute  top-0 right-0  largesceen:w-full desktop:pb-44 h-full w-full  sm:h-[30.438rem] lg:h-[30.438rem] xl:h-[45.75rem] desktop:h-auto largesceen:h-[80.188rem]"
          priority
          placeholder="blur"
        />

        <div className="relative px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 pt-12 desktop:pt-28 largesceen:pt-44">
          <h2 className="text-secondary  text-[3.2rem] leading-none lg:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] mb-12 sm:mb-28 lg:mb-36">
            Superior <br className="hidden sm:block" /> twin
          </h2>
          <p className="text-secondary text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[63%] sm:w-[300px] desktop:w-[27.625rem] uppercase">
            All room decoration was made with ecological certified and safe materials.
          </p>
        </div>

        <div className="absolute right-0 xs:-bottom-0 sm:-bottom-44 md:-bottom-28 w-24 sm:w-48 sm:h-48 small:m-5 label">
          <a href="/" className="flex items-center justify-center  no-underline">
            <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
              Your browser does not support SVGs
            </object>
            <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default RoomHero;
