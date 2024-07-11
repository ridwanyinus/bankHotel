"use client";
import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import "animate.css";
import btn from "@/public/button - default.svg";
import Image from "next/image";
import star8 from "@/public/Star 8.svg";
import vector4 from "@/public/Vector 4.svg";
import divider from "@/public/Rectangle 68.svg";
import hero from "@/public/space-copenhagen-the-stratford-architonic-rs-8-03-arcit18 1.png";
import DateTimePicker from "./DateTimePicker";

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsPopupVisible(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Swal.fire({
      title: "Submit your name and email",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Name" />
        <input id="swal-input2" class="swal2-input" placeholder="Email" />
      `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      preConfirm: () => {
        const name = (document.getElementById("swal-input1") as HTMLInputElement).value;
        const email = (document.getElementById("swal-input2") as HTMLInputElement).value;
        if (!name || !email) {
          Swal.showValidationMessage(`Please enter both name and email`);
          return false;
        }
        return { name: name, email: email };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const swalWithTailwindButtons = Swal.mixin({
          customClass: {
            confirmButton: "bg-primary text-white font-bold py-2 px-4 rounded hover:bg-[#1B3B36] mr-2",
            cancelButton: "bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700",
          },
          buttonsStyling: true,
        });

        swalWithTailwindButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, book it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((confirmResult) => {
            if (confirmResult.isConfirmed) {
              swalWithTailwindButtons
                .fire({
                  title: "Room Booked Successfully!",
                  text: `Your room has been booked. We look forward to welcoming you, ${result.value.name}.`,
                  icon: "success",
                })
                .then(() => {
                  setIsPopupVisible(false);
                });
            } else if (confirmResult.dismiss === Swal.DismissReason.cancel) {
              swalWithTailwindButtons.fire({
                title: "Cancelled",
                text: "Your booking has been cancelled.",
                icon: "error",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className=" bg-primary mt-0 py-14 lg:pt-20  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44">
      <div className="grid  md:grid-cols-3 lg:grid-cols-3 mb-14 small:mb-16 largesceen:mb-24">
        <div className="md:col-span-2 animate__animated animate__fadeInLeft">
          <h1 className="text-white-100 text-[4.7rem] small:text-[5rem] lg:text-[7.5rem] desktop:text-[10.625rem] heading leading-none mb-6 md:mb-8 lg:mb-14 max-md:text-center">
            Bank<span className="text-secondary inline-flex">Hotel</span>
          </h1>
          <p className="uppercase text-xs md:text-sm desktop:text-base largesceen:text-[1.625rem] max-md:text-center text-secondary">rooms // restaurant // congress hall // wine bar</p>
          <div className="border border-white-100 border-opacity-[0.32] block md:hidden w-[60%] mx-auto mt-6"></div>
        </div>

        <div className="h-full flex lg:flex-col justify-between md:gap-x-10 lg:gap-x-0 lg:ml-20 2xl:ml-0">
          <div className="flex justify-between">
            <div className="text-white-100 lg:text-sm  2xl:text-[1.375rem] uppercase border border-white-100 border-opacity-[0.32] rounded-full md:px-5   2xl:py-5 2xl:px-10 flex  items-center gap-x-4 2xl:gap-8 leading-none max-lg:hidden">
              <Image src={star8} alt="star" className="max-2xl:w-[30px] h-auto animi-1" /> since 1973
            </div>

            <button className="md:w-[45px] 2xl:w-[4.375rem] max-md:hidden pointer-events-none">
              <Image src={btn} alt="btn" />
            </button>
          </div>

          <p className="max-md:text-center max-md:mx-auto w-[85%] md:w-[13.625rem] lg:w-[90%] xl:w-[21.875rem] text-white-100 text-sm lg:text-base largesceen:text-xl leading-[155.556%] max-md:block max-md:mt-6 max-md:leading-[164.286%]">
            The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>
      </div>

      <section className="">
        <div className="relative ">
          <Image
            src={hero}
            alt="hero"
            priority
            placeholder="blur"
            className="object-center md:object-cover lg:object-contain largesceen:object-fill w-full h-96 md:h-[30.438rem] lg:h-full  xl:h-full -z-10"
          />
          <div className="absolute top-0 desktop:top-0 right-0 max-lg:hidden bg-[#313F387A]">
            <div className="flex items-center justify-center">
              <details className="group block [&_summary::-webkit-details-marker  lg:w-[15.5rem] lg:h-[6.25rem] 2xl:w-[20rem]  2xl:h-[7.813rem] largesceen:h-[9.375rem] open:bg-[#313F387A]">
                <summary className="flex cursor-pointer px-10  transition  w-full h-full uppercase justify-between items-center">
                  <span className="text-xs 2xl:text-base text-white-100 font-medium leading-[125%]"> Check in </span>

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

              <details className="group block [&_summary::-webkit-details-marker]:hidden  lg:w-[15.5rem] lg:h-[6.25rem] 2xl:w-[20rem]  2xl:h-[7.813rem] largesceen:h-[9.375rem] open:bg-[#313F387A]">
                <summary className="flex cursor-pointer px-10  transition w-full h-full  uppercase justify-between items-center">
                  <span className="text-xs 2xl:text-base text-white-100 font-medium leading-[125%]"> Check Out </span>

                  <span className="transition group-open:-rotate-180">
                    <Image src={vector4} alt="Vector" className="w-[14px] 2xl:w-[18px]" />
                  </span>
                </summary>

                <div className="absolute mt-1 px-[6px] py-2 pb-4 space-y-2 ">
                  <DateTimePicker
                    buttonText="CHECK OUT"
                    notificationTitle="Thank You for Staying with Us"
                    notificationMessage="Your check-out is complete. We hope to see you again soon."
                    notificationButtonText="Got It"
                  />
                </div>
              </details>

              <div className="lg:w-[15.5rem] lg:h-[6.25rem] 2xl:w-[20rem]  2xl:h-[7.813rem] largesceen:h-[9.375rem] flex  items-center justify-center bg-secondary hover:bg-[#FCC000]">
                <a href="/Rooms" className="text-gradient uppercase  text-center text-sm 2xl:text-base py-14   w-full mx-auto block ">
                  book room
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-[6rem] md:-bottom-16 right-0  w-48 h-48 small:m-5 lg:hidden label">
            <button type="button" onClick={handleSubmit} className="flex items-center justify-center  no-underline">
              <object type="image/svg+xml" data="/Polygon 5.svg" className="w-[80px] md:w-[120px]">
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
            </button>
          </div>
        </div>
      </section>

      <div className="md:flex justify-between mt-4 lg:mt-12">
        <div className="max-md:hidden">
          <p className="text-secondary underline uppercase md:text-xs  lg:text-base 2xl:text-lg largesceen:text-[1.625rem] mb-2">+38 032 297 50 20</p>
          <p className="text-white-100 underline uppercase md:text-xs  lg:text-base 2xl:text-lg largesceen:text-[1.625rem]">8 Lystopadovoho Chynu, Lviv</p>
        </div>
        <div>
          <p className=" md:text-right text-white-100 text-xs uppercase lg:text-base 2xl:text-lg largesceen:text-[1.625rem]">
            Art & Congress <br />
            hall
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
