"use client";
import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import best from "@/public/roomHero.png";
import Image from "next/image";
const RoomHero = () => {
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
    <main className="sm:pb-20  largesceen:pb-44 overflow-hidden">
      <section className="relative w-full  h-full max-sm:h-[65vh]">
        <Image
          src={best}
          alt="diver"
          className="absolute  top-0 right-0  largesceen:w-full desktop:pb-44 h-full w-full  sm:h-[30.438rem] lg:h-[30.438rem] xl:h-[46.75rem] desktop:h-auto largesceen:h-[80.188rem]"
          priority
          placeholder="blur"
        />

        <div className="relative px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 pt-12 desktop:pt-28 largesceen:pt-44">
          <h2 className="text-secondary  text-[3.2rem] leading-none lg:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] mb-20 sm:mb-28 lg:mb-36">
            Superior <br className="hidden sm:block" /> twin
          </h2>
          <p className="text-secondary text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[63%] sm:w-[300px] desktop:w-[27.625rem] uppercase">
            All room decoration was made with ecological certified and safe materials.
          </p>
        </div>

        <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 ">
          <button type="button" onClick={handleSubmit} className="label flex items-center justify-center  no-underline">
            <object type="image/svg+xml" data="/Polygon 5.svg" className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]">
              Your browser does not support SVGs
            </object>
            <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">Book room</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default RoomHero;
