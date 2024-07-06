import React from "react";
import btn from "@/public/button - default.svg";
import Image from "next/image";
import star8 from "@/public/Star 8.svg";
import vector4 from "@/public/Vector 4.svg";
import divider from "@/public/Rectangle 68.svg";
import polygon from "@/public/Polygon 5.svg";
import hero from "@/public/space-copenhagen-the-stratford-architonic-rs-8-03-arcit18 1.png";

const Hero = () => {
  return (
    <main className="bg-primary h-full mt-0 py-14 lg:pt-20  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 largesceen:pb-48">
      <div className="grid  md:grid-cols-3 lg:grid-cols-3 mb-14 small:mb-16 largesceen:mb-24">
        <div className="md:col-span-2">
          <h1 className="text-white-100 text-[4.7rem] small:text-[5rem] lg:text-[7.5rem] desktop:text-[10.625rem] heading leading-none mb-6 md:mb-8 lg:mb-14 max-md:text-center">
            Bank<span className="text-secondary inline-flex">Hotel</span>
          </h1>
          <p className="uppercase text-xs md:text-sm desktop:text-lg largesceen:text-[1.625rem] max-md:text-center text-secondary">rooms // restaurant // congress hall // wine bar</p>
          <div className="border border-white-100 border-opacity-[0.32] block md:hidden w-[60%] mx-auto mt-6"></div>
        </div>

        <div className="h-full flex lg:flex-col justify-between md:gap-x-10 lg:gap-x-0">
          <div className="flex justify-between">
            <div className="text-white-100 lg:text-lg xl:text-xl 2xl:text-[1.375rem] uppercase border border-white-100 border-opacity-[0.32] rounded-full md:px-5 xl:py-3  2xl:py-5 2xl:px-10 flex  items-center gap-x-4 2xl:gap-8 leading-none max-lg:hidden">
              <Image src={star8} alt="star" className="max-md:w-[30px]" /> since 1973
            </div>

            <a href="/" className="md:w-[45px] 2xl:w-[4.375rem] max-md:hidden">
              <Image src={btn} alt="btn" />
            </a>
          </div>

          <p className="max-md:text-center max-md:mx-auto w-[85%] md:w-[13.625rem] lg:w-[90%] xl:w-[21.875rem] text-white-100 text-sm lg:text-lg largesceen:text-xl leading-[155.556%] max-md:block max-md:mt-6 max-md:leading-[164.286%]">
            The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>
      </div>

      <section className="w-full ">
        <div className="relative">
          <Image
            src={hero}
            alt="hero"
            priority
            placeholder="blur"
            className="object-center md:object-cover lg:object-contain largesceen:object-fill w-full h-96 md:h-[30.438rem] lg:h-full  xl:h-full "
          />
          <div className="absolute top-0 desktop:top-0 right-0 max-lg:hidden bg-[#313F387A]">
            <div className="flex items-center justify-center">
              <details className="group block [&_summary::-webkit-details-marker  lg:w-[15.5rem] lg:h-[6.25rem] desktop:w-[20rem]  desktop:h-[7.813rem] largesceen:h-[9.375rem]">
                <summary className="flex cursor-pointer px-10  transition  w-full h-full uppercase justify-between items-center">
                  <span className="text-xs desktop:text-base text-white-100 font-medium leading-[125%]"> Check in </span>

                  <span className="transition group-open:-rotate-180">
                    <Image src={vector4} alt="Vector" />
                  </span>
                </summary>

                <div className="absolute  mt-1 px-[6px] py-2 space-y-2 ">
                  <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">RUS</p>
                  <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">FRA</p>
                  <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">DEU</p>
                </div>
              </details>
              <Image src={divider} alt="divider" className="h-[64px] " />

              <details className="group block [&_summary::-webkit-details-marker]:hidden  lg:w-[15.5rem] lg:h-[6.25rem] desktop:w-[20rem]  desktop:h-[7.813rem] largesceen:h-[9.375rem]">
                <summary className="flex cursor-pointer px-10  transition w-full h-full  uppercase justify-between items-center">
                  <span className="text-xs desktop:text-base text-white-100 font-medium leading-[125%]"> Check Out </span>

                  <span className="transition group-open:-rotate-180">
                    <Image src={vector4} alt="Vector" />
                  </span>
                </summary>

                <div className="absolute mt-1 px-[6px] py-2 space-y-2 ">
                  <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">RUS</p>
                  <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">FRA</p>
                  <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">DEU</p>
                </div>
              </details>

              <div className="lg:w-[15.5rem] lg:h-[6.25rem] desktop:w-[20rem]  desktop:h-[7.813rem] largesceen:h-[9.375rem] flex  items-center justify-center bg-secondary">
                <a href="/" className="text-gradient uppercase  text-center text-sm desktop:text-base py-14   w-full mx-auto block ">
                  book room
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-[6rem] md:-bottom-16 right-0  w-48 h-48 small:m-5">
            <a href="/" className="flex items-center justify-center  no-underline">
              <object type="image/svg+xml" data="/Polygon 5.svg" className="w-[80px] md:w-[120px]">
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
