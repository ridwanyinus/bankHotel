import React from "react";
import btn from "@/public/button - default.svg";
import Image from "next/image";
import star8 from "@/public/Star 8.svg";
import hero from "@/public/space-copenhagen-the-stratford-architonic-rs-8-03-arcit18 1.png";

const Hero = () => {
  return (
    <main className="bg-primary h-full mt-0 py-14 lg:pt-20  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 ">
      <div className="grid  md:grid-cols-3 lg:grid-cols-3 mb-16 largesceen:mb-24">
        <div className="md:col-span-2">
          <h1 className="text-white-100 text-[4.7rem] small:text-[5rem] lg:text-[7.5rem] desktop:text-[10.625rem] heading leading-none mb-6 md:mb-8 lg:mb-14 max-md:text-center">
            Bank<span className="text-secondary inline-flex">Hotel</span>
          </h1>
          <p className="uppercase text-xs md:text-sm desktop:text-lg largesceen:text-[1.625rem] max-md:text-center text-secondary">rooms // restaurant // congress hall // wine bar</p>
          <div className="border border-white-100 border-opacity-[0.32] block md:hidden w-[60%] mx-auto mt-6"></div>
        </div>

        <div className="h-full flex lg:flex-col justify-between md:gap-x-10 lg:gap-x-0">
          <div className="flex justify-between">
            <button className="text-white-100 lg:text-lg xl:text-xl 2xl:text-[1.375rem] uppercase border border-white-100 border-opacity-[0.32] rounded-full md:px-5 xl:py-3 xl:px-8 2xl:py-5 2xl:px-10 flex  items-center gap-x-4 2xl:gap-8 leading-none max-lg:hidden">
              <Image src={star8} alt="star" /> since 1973
            </button>
            <a href="/" className="md:w-[45px] desktop:w-[4.375rem] max-md:hidden">
              <Image src={btn} alt="btn" />
            </a>
          </div>

          <p className="max-md:text-center max-md:mx-auto w-[85%] md:w-[13.625rem] lg:w-[90%] xl:w-[21.875rem] text-white-100 text-sm lg:text-lg largesceen:text-xl leading-[155.556%] max-md:block max-md:mt-6 max-md:leading-[164.286%]">
            The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>
      </div>

      <section className="w-full">
        <Image src={hero} alt="hero" priority placeholder="blur" className="object-center md:object-cover lg:object-contain largesceen:object-fill w-full h-96 md:h-[30.438rem]  xl:h-full" />
      </section>
    </main>
  );
};

export default Hero;
