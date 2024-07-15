"use client";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import Image from "next/image";
import room1 from "@/public/space-copenhagen-the-stratford-architonic-rs-10-28-arcit18 1.png";
import room2 from "@/public/space-copenhagen-the-stratford-architonic-rs-11-30-arcit18 1.png";
import btn from "@/public/buttonroom.svg";
import star8 from "@/public/Star 8.svg";
import Swal from "sweetalert2";

const Rooms = () => {
  
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

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);

  return (
    <main
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
      id="rooms"
      className="bg-white-100 py-10 lg:py-14  lg:pt-10 w-full h-full  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 desktop:pt-16 2xl:pt-20 desktop:pb-20 largesceen:pb-36">
      <div className="sm:flex justify-between  sm:mt-12">
        <div className="sm:mt-20 xl:mt-0">
          <p className="text-end text-gradient text-sm mb-8 sm:hidden">70 rooms</p>
          <h2 className="text-gradient uppercase text-5xl xs:text-[3.2rem] leading-none lg:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] ">
            Rooms <br className="hidden sm:block" /> & apartments
          </h2>
        </div>

        <div className="w-[9rem] lg:w-[12.5rem] desktop:w-[20.938rem] largesceen:w-[27.5rem] max-sm:mt-8">
          <p className="uppercase text-gradient lg:text-base 2xl:text-lg largesceen:text-[1.625rem] max-lg:hidden">All room decoration was made with ecological certified and safe materials.</p>
          <p className="uppercase text-gradient text-xs md:text-sm lg:hidden">All room decoration was made with ecological certified and safe materials.</p>
        </div>
      </div>

      <section className="mt-10 md:mt-20 flex justify-between flex-col-reverse sm:flex-row">
        <div className="flex justify-around flex-col w-fit">
          <Image src={room1} alt="room-1" className="largesceen:w-[17.875rem] xl:w-[13.563rem] max-xl:hidden"priority/>

          <a href="/" className="w-[5rem] desktop:w-[7.375rem] largesceen:w-auto hidden lg:block">
            <Image src={btn} alt="btn" />
          </a>
        </div>

        <div className="flex flex-col justify-around">
          <div className="text-gradient lg:text-sm  2xl:text-[1.375rem] uppercase border border-primary border-opacity-[0.32] rounded-full md:px-5 py-1  2xl:py-5 2xl:px-10 flex  items-center gap-x-4 2xl:gap-8 leading-none max-lg:hidden w-fit">
            <Image src={star8} alt="star" className="max-2xl:w-[30px] h-auto animi-1" /> since 1973
          </div>

          <div className="relative  largesceen:mt-20">
            <h3 className="text-3xl sm:text-[1.75rem] desktop:text-4xl largesceen:text-[3.125rem] text-gradient tracking-[0.094rem] mb-8 w-fit capitalize">Superior twin</h3>

            <div className="max-sm:flex flex-row-reverse justify-between max-sm:mt-8">
              <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[13.813rem] sm:w-[70%] lg:w-[250px] desktop:w-[20.938rem] text-opacity-[0.8]">
                The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms,
                numerous facilities, and exceptional service.
              </p>
              <a href="/" className="w-[3rem] xs:w-[4rem]  sm:hidden">
                <Image src={btn} alt="btn" />
              </a>
            </div>

            <p className="text-primary md:text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[85%] sm:w-[70%] lg:w-[250px] desktop:w-[20.938rem] text-opacity-[0.8] mt-8 desktop:mt-16 max-sm:hidden">
              01 <span className="text-[#00000033] ">/ 04</span>
            </p>
          </div>
        </div>

        <div className="relative ">
          <Image src={room2} alt="room image" className="lg:w-[22.25rem] desktop:w-[35.75rem] largesceen:h-[52.5rem] largesceen:w-[37.5rem]" priority/>
          <p className="text-primary  leading-[155.556%]  text-opacity-[0.8] text-right tracking-widest my-8 sm:hidden">
            01 <span className="text-[#00000033] ">/ 04</span>
          </p>

          <div className="absolute bottom-0 sm:-bottom-28 xl:bottom-0 right-0  w-48 h-48 small:m-5 label">
            <button type="button" onClick={handleSubmit} className="cursor-pointer flex items-center justify-center  no-underline">
              <object type="image/svg+xml" data="/Polygon 5.svg" className="w-[80px] xl:w-[120px]">
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px]  xl:text-sm">Book room</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rooms;
