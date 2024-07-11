import React from "react";
import Navbar from "@/components/Navbar";
import RoomHero from "./RoomHero";
import Image from "next/image";
import best from "@/public/space-copenhagen-the-stratford-architonic-2-ed-reeve-24-arcit18 1.png";
import star from "@/public/Star 8.svg";
import Footer from "@/components/Footer";
import bests from "@/public/roomHero.png";
import Image1 from "@/public/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png";
const Rooms = () => {
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
        <h1 className="text-6xl sm:text-8xl md:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] text-center leading-none   uppercase text-gradient pt-4 largesceen:pt-12">
          Book a <span className="block sm:inline-flex text-secondary">room</span>
        </h1>

        <section id="restaurant" className=" py-12 sm:py-20 lg:py-28 largesceen:py-36 flex flex-col sm:flex-row justify-between sm:items-center ">
          <div className="max-md:hidden w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label">
            <a href="/" className="flex items-center justify-center  no-underline">
              <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
            </a>
          </div>

          <div>
            <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] ">$250 per night</h1>
            <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
              Azure
              <br /> Suite
            </h1>

            <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
              The Azure Suite offers a tranquil retreat with stunning ocean views. This spacious room features a king-sized bed, a private balcony, and a luxurious bathroom with a soaking tub. The
              elegant decor and modern amenities ensure a comfortable and memorable stay.
            </p>
          </div>

          <div className="relative">
            <Image src={bests} alt="azure room" className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] desktop:h-[30rem] largesceen:h-[40rem]" priority />

            <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label lg:hidden">
              <a href="/" className="flex items-center justify-center  no-underline">
                <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
                  Your browser does not support SVGs
                </object>
                <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
              </a>
            </div>
          </div>
        </section>

        <section id="restaurant" className=" py-12 sm:py-20 lg:py-28 largesceen:py-36 flex flex-col sm:flex-row justify-between sm:items-center ">
          <div className="max-md:hidden w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label">
            <a href="/" className="flex items-center justify-center  no-underline">
              <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
            </a>
          </div>

          <div>
            <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] ">$300 per night</h1>
            <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
              Emerald
              <br /> Retreat
            </h1>

            <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
              The Emerald Retreat is a serene oasis designed for ultimate relaxation. It boasts a queen-sized bed, a cozy seating area, and a private terrace overlooking lush gardens. The room is
              adorned with soft, earthy tones and natural materials, creating a calming ambiance.
            </p>
          </div>

          <div className="relative">
            <Image src={best} alt="azure room" className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] desktop:h-[30rem] largesceen:h-[40rem]" priority />

            <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label lg:hidden">
              <a href="/" className="flex items-center justify-center  no-underline">
                <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
                  Your browser does not support SVGs
                </object>
                <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
              </a>
            </div>
          </div>
        </section>

        <section id="restaurant" className=" py-12 sm:py-20 lg:py-28 largesceen:py-36 flex flex-col sm:flex-row justify-between sm:items-center ">
          <div className="max-md:hidden w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label">
            <a href="/" className="flex items-center justify-center  no-underline">
              <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
            </a>
          </div>

          <div>
            <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] ">$275 per night</h1>
            <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
              Crimson
              <br /> Deluxe
            </h1>

            <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
              The Crimson Deluxe room combines elegance and comfort with its chic design and upscale features. It includes a plush king-sized bed, a stylish sitting area, and a spacious bathroom with
              a rain shower. Guests can enjoy the vibrant city views from the large windows.
            </p>
          </div>

          <div className="relative">
            <Image src={Image1} alt="azure room" className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] desktop:h-[30rem] largesceen:h-[40rem]" priority />

            <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label lg:hidden">
              <a href="/" className="flex items-center justify-center  no-underline">
                <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
                  Your browser does not support SVGs
                </object>
                <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
              </a>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default Rooms;
