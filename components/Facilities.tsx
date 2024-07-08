import React from "react";
import Image from "next/image";
import divider from "@/public/divider.png";
import image1 from "@/public/facility1.png";
import image2 from "@/public/facility2.png";
import star8 from "@/public/Star 8.svg";
import label from "@/public/labelF.svg";

const Facilities = () => {
  return (
    <main className="bg-white-100  w-full h-full">
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
            <Image src={image2} alt="facility image" className="lg:w-[14.438rem] desktop:w-[20.938rem] largesceen:w-[27.688rem] hidden sm:block" />
          </div>
        </div>

        <div className="flex flex-col justify-between sm:ml-16 desktop:ml-10 largesceen:ml-0">
          <div className="sm:mb-14 lg:mb-36">
            <h2 className="text-gradient uppercase text-[3.2rem] leading-none lg:text-[6rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] xs:ml-16 sm:ml-0 max-sm:mb-12">
              our <br className="" />
              faci{" "}
              <span className="flex w-fit">
                <Image src={star8} alt="star" className=" lg:w-[50px] mx-6 sm:mx-8 lg:mx-[4rem] desktop:mx-[5rem] largesceen:mx-[6.875rem] h-auto" /> lities
              </span>
            </h2>

            <div>
              <Image src={image2} alt="facility image" className="lg:w-[14.438rem] desktop:w-[20.938rem] largesceen:w-[27.688rem] sm:hidden" />
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
          <Image src={image1} alt="facility image" className="lg:w-[14.438rem] desktop:w-[20.938rem] largesceen:w-[27.688rem]" />
          <Image
            src={label}
            alt="label"
            className="absolute sm:-top-6 sm:-left-6 desktop:-top-12 largesceen:-top-20 desktop:-left-12 largesceen:-left-20  sm:w-[3rem] desktop:w-[6rem] largesceen:w-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Facilities;
