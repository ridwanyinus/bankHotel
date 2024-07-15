import React from "react";
import Image from "next/image";
import label from "@/public/plabel.svg";
import gallery1 from "@/public/space-copenhagen-the-stratford-architonic-rs-10-28-arcit18 1.png";
import gallery2 from "@/public/ccd-cheng-chung-design-hualuxe-xi-an-hi-tech-zone-architonic-20-qiu-xin-10-arcit18 1.png";
import gallery3 from "@/public/space-copenhagen-the-stratford-architonic-jw-8-18-arcit18 1.png";
import gallery4 from "@/public/space-copenhagen-the-stratford-architonic-jw-2-16-arcit18 1.png";
import gallery5 from "@/public/space-copenhagen-the-stratford-architonic-rs-4-26-arcit18 1.png";
import polygon from "@/public/Polygon 7.svg";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const Gallery = () => {
  const quotes = [
    {
      quote: "Bank hotel Bank__hotel© Bank hotel Bank hotel Bank hotel Bank hotel Bank hotel Bank hotel",
    },
  ];
  return (
    <main className="bg-primary py-12 small:pt-32 lg:py-24 pt-24 sm:pt-36 lg:pt-48 desktop:pt-60 2xl:pt-72 largesceen:pt-80 ">
      <div className="flex relative">
        <p className="text-white-100 text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem] text-left absolute  pl-5 md:pl-[1.9rem] largesceen:pl-14 fourk:pl-44 hidden sm:block">
          Art & Congress <br />
          hall
        </p>
        <Image src={label} alt="label" className="label mx-auto w-[3.125rem] md:w-[4.375rem] desktop:w-[6rem] largesceen:w-[9.375rem]" />
      </div>
      <h1 className="text-6xl sm:text-8xl md:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] text-center leading-none   uppercase text-secondary pt-4 largesceen:pt-12">
        our <span className="block sm:inline-flex">Gallery</span>
      </h1>
      <p className=" text-white-100 text-[0.813rem]  leading-[155.556%] w-[85%]  text-opacity-[0.8] text-center block mx-auto my-8 sm:hidden">
        The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms, numerous
        facilities, and exceptional service.
      </p>
      <section className="flex pt-8 sm:pt-16 justify-between">
        <div className="flex flex-col justify-between">
          <Image src={gallery1} alt="Gallery-Image 1" className="max-sm:w-[95%] lg:w-[10.125rem] xl:w-[13rem] desktop:w-[16rem] 2xl:w-[17rem] largesceen:w-[19.5rem]" priority />
          <Image
            src={gallery2}
            priority
            alt="Gallery-Image 2"
            className="max-sm:mt-8 max-sm:w-[95%] md:min-w-[10rem] lg:w-[7.875rem] xl:w-[10rem] desktop:w-[15.063rem] 2xl:w-[17rem] largesceen:w-[19.75.rem] fourk:w-[25rem] pl-5 md:pl-[1.9rem] largesceen:pl-14 fourk:pl-44"
          />
        </div>

        <div className="">
          <p className=" text-white-100 text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[85%] sm:w-[70%] lg:w-[250px] desktop:w-[27.688rem] largesceen:w-[28.125rem] text-opacity-[0.8] text-center block mx-auto mb-36 max-sm:hidden">
            The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms,
            numerous facilities, and exceptional service.
          </p>
          <Image
            src={gallery3}
            priority
            alt="Gallery image 3"
            className=" max-sm:hidden sm:w-[20rem] md:w-[25rem] lg:w-[30.125rem] xl:w-[25rem] desktop:w-[43.125rem] 2xl:w-[45rem] largesceen:w-[57.25rem] sm:mx-auto"
          />

          <p className="flex text-white-100 text-[0.813rem] desktop:text-base 2xl:text-[1.375rem] leading-[155.556%] w-[85%] sm:w-[70%] lg:w-[250px] desktop:w-[27.688rem] largesceen:w-[28.125rem] text-opacity-[0.8] italic mt-20 max-sm:hidden">
            <span className="mr-3 desktop:mr-6 sm:ml-16 lg:ml-0">
              <Image src={polygon} alt="polygon" />{" "}
            </span>
            It is our pleasure to meet your most unrealistic expectations.
          </p>
        </div>

        <div className="flex flex-col justify-between items-end relative">
          <Image
            src={gallery4}
            priority
            alt="gallery-4 image"
            className="max-sm:w-[95%]  lg:w-[10.125rem] xl:w-[13rem] desktop:w-[16rem] 2xl:w-[17rem] largesceen:w-[20.125rem] relative max-sm:top-4"
          />
          <Image
            src={gallery5}
            priority
            alt="gallery-5 image"
            className="max-sm:w-[95%] max-sm:h-[7.688rem] lg:min-w-[20.688rem] lg:h-[10rem]  desktop:w-[22.938rem] xl:h-[13.375rem] 2xl:w-[22rem] largesceen:w-[27.688rem] largesceen:h-[17.75rem] object-cover pr-5 md:pr-[1.9rem] largesceen:pr-14 fourk:pr-44 fourk:w-[35rem] absolute bottom-0 md:-bottom-48"
          />
        </div>
      </section>

      <p className="flex text-white-100 text-[0.813rem] desktop:text-base 2xl:text-[1.375rem] leading-[155.556%] w-[85%] sm:w-[70%] lg:w-[250px] desktop:w-[27.688rem] largesceen:w-[28.125rem] text-opacity-[0.8] italic mt-12 pl-3 sm:hidden">
        <span className="mr-3 desktop:mr-6 ">
          <Image src={polygon} alt="polygon" />{" "}
        </span>
        It is our pleasure to meet your most unrealistic expectations.
      </p>

      <div className="pt-8 md:pt-24 ">
        <InfiniteMovingCards items={quotes} />
        <InfiniteMovingCards items={quotes} direction="right" />
      </div>
    </main>
  );
};

export default Gallery;
