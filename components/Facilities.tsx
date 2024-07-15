"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import divider from "@/public/divider.png";
import image1 from "@/public/facility1.png";
import image2 from "@/public/facility2.png";
import star8 from "@/public/Star 8.svg";
import label from "@/public/labelF.svg";
import vector from "@/public/VectorY.svg";
import ice from "@/public/space-copenhagen-the-stratford-architonic-jw4-04-arcit18 1.png";
import btn from "@/public/buttonroom.svg";
import wine from "@/public/wine-reserve.jpg";
import conference from "@/public/conference.jpg";
import best from "@/public/space-copenhagen-the-stratford-architonic-2-ed-reeve-24-arcit18 1.png";

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main data-aos="fade-up" data-aos-delay="0" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="400" className="bg-white-100  w-full h-full">
      <Image src={divider} alt="diver" className="w-[97%] block mx-auto" />
      <section className="py-10 lg:py-14  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 sm:pt-16 desktop:pt-28 largesceen:pt-44 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <p className="max-sm:text-right text-gradient text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem]">
              Art & Congress <br />
              hall
            </p>
          </div>

          <div>
            <Image src={image2} alt="facility image" className="lg:w-[14.438rem] desktop:w-[20.938rem] largesceen:w-[27.688rem] hidden sm:block" priority />
          </div>
        </div>

        <div className="flex flex-col justify-between sm:ml-16 desktop:ml-10 largesceen:ml-0">
          <div className="sm:mb-14 lg:mb-36">
            <h2 className="text-gradient uppercase text-[3.2rem] leading-none lg:text-[6rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] xs:ml-16 sm:ml-0 max-sm:mb-12">
              our <br className="" />
              faci{" "}
              <span className="flex w-fit">
                <Image src={star8} alt="star" className=" lg:w-[50px] mx-6 sm:mx-8 lg:mx-[4rem] desktop:mx-[5rem] largesceen:mx-[6.875rem] h-auto animi-1" /> lities
              </span>
            </h2>

            <div>
              <Image src={image2} alt="facility image" className="lg:w-[14.438rem] desktop:w-[20.938rem] largesceen:w-[27.688rem] sm:hidden" priority/>
            </div>
          </div>

          <div>
            <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[13.813rem] sm:w-[70%] lg:w-[250px] desktop:w-[20.938rem] text-opacity-[0.8] max-sm:mt-12 xs:ml-[35%] sm:ml-0">
              Bank Hotel offers you a wide range of additional services and facilities. Visit our restaurant to try exclusive meals, book a conference hall to organize a business meeting, or relax in
              the art-bar.
            </p>
          </div>
        </div>

        <div className="relative hidden sm:block">
          <Image src={image1} alt="facility image" className="lg:w-[14.438rem] desktop:w-[20.938rem] largesceen:w-[27.688rem]"priority/>
          <Image
            src={label}
            alt="label"
            className="absolute sm:-top-6 sm:-left-6 desktop:-top-12 largesceen:-top-20 desktop:-left-12 largesceen:-left-20  sm:w-[3rem] desktop:w-[6rem] largesceen:w-auto animi-1"
          />
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        id="restaurant"
        className="flex flex-col sm:flex-row justify-between sm:items-center py-10 lg:py-14 px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 sm:pt-16 desktop:pt-28 largesceen:pt-44">
        <div>
          <a href="/" className="w-[5rem] desktop:w-[7.375rem] largesceen:w-auto hidden lg:block rotate-90">
            <Image src={btn} alt="btn" />
          </a>
        </div>

        <div>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] max-sm:ml-[35%]">01</h1>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
            Ice <br /> restaurant
          </h1>

          <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
            The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.
          </p>
        </div>

        <div>
          <Image src={ice} alt="ice room" className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem]" priority />
        </div>
      </section>
      <Image src={divider} alt="diver" className="w-[97%] block mx-auto" />

      <section
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        id="conference-hall"
        className="flex flex-col sm:flex-row justify-between sm:items-center py-10 lg:py-14 px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 sm:pt-16 desktop:pt-28 largesceen:pt-44">
        <div>
          <a href="/" className="w-[5rem] desktop:w-[7.375rem] largesceen:w-auto hidden lg:block rotate-90">
            <Image src={btn} alt="btn" />
          </a>
        </div>

        <div>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] max-sm:ml-[35%]">02</h1>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
            conference <br /> hall
          </h1>

          <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
            Discover the sophisticated atmosphere of our Conference Hall, where state-of-the-art technology, flexible seating, and professional support create the ideal setting for your business
            events.
          </p>
        </div>

        <div>
          <Image src={conference} alt="ice room" className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] largesceen:h-full" priority />
        </div>
      </section>
      <Image src={divider} alt="diver" className="w-[97%] block mx-auto" />

      <section
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        className="flex flex-col sm:flex-row justify-between sm:items-center py-10 lg:py-14 px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 sm:pt-16 desktop:pt-28 largesceen:pt-44">
        <div>
          <a href="/" className="w-[5rem] desktop:w-[7.375rem] largesceen:w-auto hidden lg:block rotate-90">
            <Image src={btn} alt="btn" />
          </a>
        </div>

        <div>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] max-sm:ml-[35%]">03</h1>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
            Wine bar <br /> “reserve”
          </h1>

          <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
            Experience the refined atmosphere of the Reserve Wine Bar, where premium wines, exquisite small plates, and a cozy ambiance set the perfect mood for relaxation and enjoyment.
          </p>
        </div>

        <div>
          <Image src={wine} alt="ice room" className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] largesceen:h-full object-cover" priority />
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        className="py-10 lg:py-14 sm:pt-16 desktop:pt-28 largesceen:pt-44 relative w-full  ">
        <Image
          src={best}
          alt="diver"
          className="absolute  top-0 right-0 py-10 sm:py-20 largesceen:w-full largesceen:py-44 h-[30.5rem] sm:h-auto xl:h-[45.75rem] desktop:h-auto largesceen:h-[85.75rem]"
          priority
          placeholder="blur"
        />
        <Image src={vector} alt="diver" className="hidden xs:block absolute bottom-0  sm:-bottom-4 md:-bottom-20 largesceen:-bottom-60 right-0 largesceen:w-full" priority />

        <div className="relative px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 pt-12 desktop:pt-28 largesceen:pt-44">
          <h2 className="text-secondary uppercase text-[3.2rem] leading-none lg:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] mb-32 sm:mb-28 lg:mb-36">
            Best <br className="hidden sm:block" /> apartments
          </h2>
          <p className="text-secondary text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[63%] sm:w-[300px] desktop:w-[27.625rem] uppercase">
            All room decoration was made with ecological certified and safe materials.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Facilities;
