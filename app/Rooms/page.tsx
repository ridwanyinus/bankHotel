"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import RoomHero from "./RoomHero";
import Image from "next/image";
import best from "@/public/space-copenhagen-the-stratford-architonic-2-ed-reeve-24-arcit18 1.png";
import star from "@/public/Star 8.svg";
import Footer from "@/components/Footer";
import BookARoom from "./BookARoom";
const Rooms = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main>
      <section className="pb-3 bg-primary">
        <Navbar />
      </section>

      <RoomHero />

      <section className="bg-primary py-12 sm:py-28 px-5 md:px-[1.9rem] desktop:px-28 largesceen:px-44 ">
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

      <section className="bg-primary desktop:py-28 px-5 md:px-[1.9rem] desktop:px-28 largesceen:px-44">
        <p className="text-secondary sm:text-lg md:text-2xl desktop:text-[2.5rem] capitalize">Premier Standard</p>
        <div className="pt-10 sm:pt-14 md:pt-16 desktop:pt-20 largesceen:pt-28 flex justify-center">
          <Image src={best} alt="diver" className="largesceen:w-full h-[27.5rem] sm:h-auto xl:h-[45.75rem] desktop:h-auto largesceen:h-[55.75rem] mx-auto" priority placeholder="blur" />
        </div>
      </section>

      <section className="pt-10 lg:pt-14 px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 sm:pt-16 desktop:pt-24 largesceen:py-24 bg-white-100">
        <BookARoom />
      </section>

      <Footer />
    </main>
  );
};

export default Rooms;
