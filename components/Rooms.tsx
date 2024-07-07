import React from "react";
import Image from "next/image";

const Rooms = () => {
  return (
    <main className="bg-white-100 py-14  lg:pt-10 w-full h-full  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 desktop:pt-16 2xl:pt-20">
      <div className="sm:flex justify-between  sm:mt-12 ">
        <div className="sm:mt-20">
          <p className="text-end text-gradient text-sm mb-8">70 rooms</p>
          <h2 className="text-gradient uppercase text-[3.2rem] leading-none lg:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] ">
            Rooms <br className="hidden sm:block" /> & apartments
          </h2>
        </div>

        <div className="w-[9rem] lg:w-[12.5rem] desktop:w-[20.938rem] largesceen:w-[27.5rem] max-sm:mt-8">
          <p className="uppercase text-gradient lg:text-base 2xl:text-lg largesceen:text-[1.625rem] max-lg:hidden">All room decoration was made with ecological certified and safe materials.</p>
          <p className="uppercase text-gradient text-xs md:text-sm lg:hidden">All room decoration was made with ecological certified and safe materials.</p>
        </div>
      </div>
    </main>
  );
};

export default Rooms;
