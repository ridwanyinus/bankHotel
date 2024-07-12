import React from "react";
import labela from "@/public/labelr.svg";
import Image from "next/image";

const RestaurantHero = () => {
  return (
    <main className="py-14 lg:pt-20  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44">
      <h1 className="text-6xl sm:text-8xl md:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] text-secondary leading-[86.667%]  w-fit  mb-8 md:mb-14">“Safe” restaurant</h1>

      <div className="sm:flex  justify-between lg:justify-around largesceen:justify-evenly fourk:justify-evenly sm:pt-14">
        <h1 className="text-white-100 capitalize text-2xl  lg:text-3xl xl:text-4xl desktop:text-[3.125rem] largesceen:text-[3.75rem]">One of a Kind</h1>

        <div className="relative max-sm:mt-20 max-sm:ml-16">
          <p className="text-white-100 text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%]     sm:w-[15.625rem] desktop:w-[21.875rem] largesceen:w-[25rem] text-opacity-[0.8]">
            Bank Hotel proudly welcomes you to the Safe Restaurant, a place where you will wish you could dine every day. The restaurant offers a unique menu developed by the team of professionals led
            by chef Mary-Ann Jones, the wine list with more than 250 items, the outstanding service, and the unforgettable atmosphere.
          </p>
          <Image src={labela} alt="label" className="absolute w-[5.313rem]  -top-14 -left-14  label" />
        </div>
      </div>
      
      
      
    </main>
  );
};

export default RestaurantHero;
