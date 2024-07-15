
import "aos/dist/aos.css";
import Image from "next/image";
import vector14 from "@/public/about.png";
import image1 from "@/public/space-copenhagen-the-stratford-architonic-jw-25-12-arcit18 1.png";
import image2 from "@/public/space-copenhagen-the-stratford-architonic-jw-26-11-arcit18 1.png";
import vector2 from "@/public/Vector 3.svg";
import label from "@/public/labelHero.svg";
import labela from "@/public/labela.svg";

const About = () => {


  return (
    <main id="about" className=" bg-primary mt-0 max-sm:pb-8 sm:py-14 relative lg:pt-10 w-full h-full  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44  desktop:pb-20 largesceen:pb-36">
      <Image src={vector14} alt="vector-line" className="absolute right-0 top-0 overflow-hidden  h-full max-lg:hidden" />
      <section className="desktop:pt-28  flex flex-col lg:flex-row justify-between relative z-10">
        <div>
          <h1 className="text-6xl sm:text-8xl lg:hidden text-white-100 leading-none text-right w-fit uppercase mb-8 md:mb-14">
            <span className="text-secondary block">About</span> US
          </h1>
          <Image
            priority
            src={image1}
            alt="image of some of the hotels rooms"
            placeholder="blur"
            className="w-full sm:w-[90%] max-lg:mx-auto h-[23.813rem] lg:w-[23.688rem] lg:h-[35.563rem] desktop:w-[27.688rem] desktop:h-[38.75rem] largesceen:h-[52.5rem] largesceen:w-[37.5rem]"
          />
        </div>

        <div className="flex flex-col justify-end gap-48 relative max-lg:mt-8">
          <h1 className="lg:translate-y-20 lg:-translate-x-56 desktop:-translate-x-40 largesceen:translate-x-0 md:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] text-white-100 leading-none text-right w-fit uppercase max-lg:hidden ">
            <span className="text-secondary block">About</span> US
          </h1>

          <div className="sm:ml-10  lg:ml-24 desktop:ml-0 relative  largesceen:mt-20">
            <h3 className="text-3xl sm:text-[1.75rem] desktop:text-4xl largesceen:text-[3.125rem] text-white-100 tracking-[0.094rem] mb-8 w-fit capitalize">High quality</h3>
            <p className="text-white-100 text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[85%] sm:w-[70%] lg:w-[250px] desktop:w-[27.688rem] text-opacity-[0.64]">
              The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms,
              numerous facilities, and exceptional service.
            </p>
            <Image src={labela} alt="label" className="absolute w-[5.313rem] lg:hidden top-1 right-6  label" />
          </div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <div className="relative">
            <Image 
              priority
              src={image2}
              alt="image of some of the hotels rooms"
              className="md:w-[10.313rem]  md:h-[15.5rem] desktop:w-[15.188rem] desktop:h-[20.625rem] largesceen:min-w-[19.625rem] largesceen:min-h-[25.875rem] max-lg:hidden"
            />
            <Image
              src={label}
              alt="label"
              className="absolute md:-top-10 md:-left-10 desktop:-top-24 largesceen:-top-28 desktop:-left-[4.5rem] largesceen:-left-24 md:w-[3.125rem] desktop:w-[7.188rem] largesceen:w-auto label"
            />
          </div>
          <div className="w-48 h-48  hidden xl:block">
            <a href="#rooms" className="flex items-center justify-center text-white-100 no-underline w-full h-full">
              <object type="image/svg+xml" data="/Polygon 2.svg" className="xl:w-[8.375rem] largesceen:w-[12.5rem]">
                Your browser does not support SVGs
              </object>
              <p className="absolute  text-white-100  text-sm ">
                <span className="text-secondary"> Rooms</span> <br /> <span className="inline-block ml-4">and</span> <br /> apartments{" "}
                <Image src={vector2} alt="vector down" className="block mx-auto mt-6 h-[13px] largesceen:h-full" />
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
