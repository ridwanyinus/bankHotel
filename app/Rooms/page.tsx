import React from "react";
import Navbar from "@/components/Navbar";
import RoomHero from "./RoomHero";
import Image from "next/image";
import star from "@/public/Star 8.svg";
const Rooms = () => {
  return (
    <main>
      <section className="pb-3 bg-primary">
        <Navbar />
      </section>

      <section>
        <RoomHero />
      </section>

      <section className="bg-primary py-28 px-5 md:px-[1.9rem] desktop:px-28 largesceen:px-44 ">
        <div className="text-white-100 lg:text-sm  2xl:text-[1.375rem] uppercase border border-white-100 border-opacity-[0.32] rounded-full px-3 md:px-5 py-2  2xl:py-5 2xl:px-10 flex  items-center gap-x-4 2xl:gap-8 leading-none  w-fit">
          <Image src={star} alt="star" className="max-2xl:w-[30px] h-auto animi-1" /> since 1973
        </div>

        <div className="lg:flex justify-between pt-12 xl:pt-28">
          <h1 className="text-3xl sm:text-[2.5rem] md:text-[3rem] lg:text-[3.125rem] text-white-100 tracking-[1.5px] leading-[120%] sm:w-[33rem] md:w-[35.938rem]  desktop:w-[43.125rem] largesceen:w-[47.313rem]">
            All suites have a unique design because we want our every guest to feel special.
          </h1>
          <p className="w-[90%] sm:w-[80%] lg:w-[22.4rem] desktop:w-[20.938rem] largesceen:w-[21.875rem] text-white-100 text-lg leading-[155.556%] text-opacity-[0.8] pt-12 lg:pt-0 ">
            The Superior twin would perfectly match the needs of those who plan to stay long. The bright and airy room is equipped with superior soft Italian furniture. Large windows open a beautiful
            view to the historical part of the city. Contemporary interior design and comfortable beds will make your stay cozy and delightful.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Rooms;
