"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import vector4 from "@/public/Vector 4.svg";
import divider from "@/public/Rectangle 68.svg";
import Image from "next/image";
import star8 from "@/public/Star 5.svg";
import Image1 from "@/public/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import DateTimePicker from "@/components/DateTimePicker";

const RestaurantFooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <footer
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
      id="contacts"
      className="pb-2 sm:pb-6 pt-12 md:pt-16 lg:pt-20 w-full h-full  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 desktop:pt-28 2xl:pt-36 largesceen:pb-6 bg-primary">
      <p className="text-white-100 text-2xl sm:text-3xl lg:text-[2.375rem] desktop:text-[3.125rem] largesceen:text-[5rem]   flex  h-full leading-normal w-fit mb-10  sm:mb-16 lg:mb-20 p-3 largesceen:p-5 border-b">
        +38 032 297 50 20
      </p>

      <p className="text-xs uppercase lg:text-base desktop:text-lg largesceen:text-[1.625rem] text-white-100  text-end  mr-[10%]">
        8 Lystopadovoho <br /> Chynu,Lviv
      </p>

      <section className="py-8 sm:py-12 lg:py-20 desktop:py-32 largesceen:py-44 flex  justify-between relative w-full">
        <div className="">
          <h2
            className=" text-white-100 uppercase text-[4.5rem] xs:text-[5.25rem] sm:text-[7rem] leading-none lg:text-[8rem] desktop:text-[12.625rem] largesceen:text-[18.75rem] max-sm:absolute"
            data-aos="fade-up">
            <span className="inline-flex gap-4">
              Get in <Image src={star8} alt="star" className="animi-1 w-9 sm:w-[4rem] lg:w-[6.25rem] desktop:w-auto  largesceen:h-auto" />{" "}
            </span>
            <br />
            <span className="text-secondary relative top-0 sm:top-5 desktop:top-12 fourk:left-[90%] left-[20%] sm:left-[60%] lg:left-[80%]">touch</span>
          </h2>
        </div>

        <div>
          <Image src={Image1} alt="room image" className="max-small:mt-12 w-40 sm:w-[12rem] md:w-[18rem] lg:w-[27.688rem] xl:mr-28 desktop:mr-0" />
        </div>
      </section>

      <p className="lg:pt-10 desktop:pt-20 text-white-100 text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem] text-left max-sm:hidden">Find a room</p>

      <div className="relative pt-8 lg:pt-12">
        <div className="max-sm:hidden bg-white-100 border-[#00000033] border w-fit">
          <div className="flex items-center justify-center">
            <details className="group block [&_summary::-webkit-details-marker sm:w-44 sm:h-16 lg:w-[11rem]  desktop:w-[15.5rem] lg:h-[2rem] desktop:h-[6.25rem] 2xl:w-[20rem]  2xl:h-[7.813rem] largesceen:h-[9.375rem]  bg-[#313F387A]">
              <summary className="flex cursor-pointer px-10  transition  w-full h-full uppercase justify-between items-center">
                <span className="text-xs 2xl:text-base text-white-100 font-medium leading-[125%] group-hover:text-white-100"> Check in </span>

                <span className="transition group-open:-rotate-180">
                  <Image src={vector4} alt="Vector" className="w-[14px] 2xl:w-[18px]" />
                </span>
              </summary>

              <div className="absolute  mt-1 px-[6px] py-2 space-y-2 ">
                <DateTimePicker
                  buttonText="CHECK IN"
                  notificationTitle="Check-In Confirmed"
                  notificationMessage="Your check-in has been confirmed. Please proceed to your room"
                  notificationButtonText="OK"
                />
              </div>
            </details>
            <Image src={divider} alt="divider" className="h-[64px] w-auto" />

            <details className="group block [&_summary::-webkit-details-marker]:hidden sm:w-44 sm:h-16 lg:w-[11rem] desktop:w-[15.5rem] lg:h-[2rem] desktop:h-[6.25rem] 2xl:w-[20rem]  2xl:h-[7.813rem] largesceen:h-[9.375rem] bg-[#313F387A]">
              <summary className="flex cursor-pointer px-10  transition w-full h-full  uppercase justify-between items-center">
                <span className="text-xs 2xl:text-base text-white-100 font-medium leading-[125%] "> Check Out </span>

                <span className="transition group-open:-rotate-180">
                  <Image src={vector4} alt="Vector" className="w-[14px] 2xl:w-[18px]" />
                </span>
              </summary>

              <div className="absolute mt-1 px-[6px] py-2 space-y-2 ">
                <DateTimePicker
                  buttonText="CHECK OUT"
                  notificationTitle="Thank You for Staying with Us"
                  notificationMessage="Your check-out is complete. We hope to see you again soon."
                  notificationButtonText="Got It"
                />
              </div>
            </details>

            <div className="sm:w-44  lg:w-[11rem] desktop:w-[15.5rem]  desktop:h-[6.25rem] 2xl:w-[20rem]  2xl:h-[7.813rem] largesceen:h-[9.375rem] flex  items-center justify-center bg-secondary hover:bg-[#FCC412]">
              <a href="/Rooms" className="text-gradient uppercase py-8 lg:py-[2rem] largesceen:py-[9rem] text-center text-sm 2xl:text-base  h-full w-full mx-auto block ">
                book room
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="sm:pt-10 lg:pt-20 desktop:pt-32 largesceen:pt-44 flex flex-col sm:flex-row max-sm:gap-y-6 sm:gap-x-12 md:gap-x-20 lg:gap-x-28 desktop:gap-x-40 largesceen:gap-x-60">
        <div className="gap-y-5 sm:gap-y-12 flex flex-col">
          <p className="text-white-100 text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem]">
            <span className="text-secondary">/</span>About us
          </p>

          <p className="text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[80%] sm:w-[10rem] md:w-[13rem] lg:w-[17rem] text-white-100 text-opacity-[0.8]">
            The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.
          </p>

          <p className="text-[0.813rem] md:text-sm text-white-100 text-opacity-70  pt-8 hidden lg:block">
            ©2024 All rights reserved. BankHotel <br /> Designed by Ridwan https://ridwanyinus.vercel.app
          </p>
        </div>

        <div className="gap-y-5 sm:gap-y-12 flex flex-col">
          <p className="text-white-100 text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem]">
            <span className="text-secondary">/</span>News
          </p>

          <p className="text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[80%] sm:w-[10rem] md:w-[13rem] lg:w-[17rem] text-white-100 text-opacity-[0.8]">
            Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.
          </p>

          <div className="flex justify-between max-sm:w-[70%] w-full border border-[#00000033] rounded p-2 sm:p-2 lg:p-4">
            <input
              type="email"
              name="email"
              className="text-white-100 outline-none focus:outline-none placeholder:text-start placeholder:text-xs lg:placeholder:text-sm placeholder:uppercase text-base flex-1 max-sm:w-[60%] bg-transparent"
              required
              placeholder="Email"
            />
            <IoIosSend color="#fffcf6 " size={20} />
          </div>
        </div>

        <div className="gap-y-3 sm:gap-y-12 flex flex-col">
          <p className="text-white-100 text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem]">
            <span className="text-secondary">/</span>Social
          </p>

          <div className="flex gap-x-5">
            <a href="/" className=" ">
              <FaFacebook size={32} className="w-5 sm:w-[25px] desktop:w-auto text-white-100 hover:text-secondary" />
            </a>
            <a href="/" className="">
              <FaInstagram size={32} className="w-5 sm:w-[25px] desktop:w-auto text-white-100 hover:text-secondary" />
            </a>
            <a href="/" className="">
              <FaTwitter size={32} className="w-5 sm:w-[25px] desktop:w-auto text-white-100 hover:text-secondary" />
            </a>
          </div>
        </div>
      </section>
      <p className="text-[0.813rem] md:text-sm text-white-100 text-opacity-70 pt-6 text-center  sm:hidden">
        ©2024 All rights reserved. BankHotel <br /> Designed by Ridwan https://ridwanyinus.vercel.app
      </p>
    </footer>
  );
};

export default RestaurantFooter;
