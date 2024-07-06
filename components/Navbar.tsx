"use client";
import { navItems } from "@/Data";
import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <nav className="bg-primary flex px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 pt-5 justify-between items-center mb-0 ">
      <div>
        <a href="/" className="text-white-100 capitalize lg:text-base desktop:text-xl leading-none font-medium z-10 relative">
          BankHotel
        </a>
      </div>

      <div className="flex gap-x-10 2xl:gap-x-16 max-xl:hidden">
        {navItems.map((items, idx: number) => (
          <ul key={`link=${idx}`}>
            <li className="flex">
              <a href={items.link} className="text-white-100 text-sm leading-normal font-normal uppercase hover:text-secondary">
                {items.name}
              </a>
            </li>
          </ul>
        ))}
      </div>

      <div>
        <p className="text-base text-white-100 leading-none max-xl:hidden">+38 032 297 50 20</p>
      </div>

      {/* Mobile Nav */}
      <section className="xl:hidden">
        <div className="">
          {toggleMenu ? (
            <IoClose size={30} color="#FCD043" onClick={() => settoggleMenu(false)} className="relative z-10" />
          ) : (
            <AiOutlineAlignLeft size={30} color="#FFFCF6" onClick={() => settoggleMenu(true)} className="relative z-10" />
          )}

          {toggleMenu && (
            <div className="flex w-full">
              <div className="absolute overflow-hidden  w-full h-screen left-0 right-0 top-0  bg-primary  scale-up-ver-top transition-all pt-28 pl-2 sm:pl-12">
                {navItems.map((items, idx: number) => (
                  <ul key={`link=${idx}`}>
                    <li className="flex  px-4 py-1 last:mb-4">
                      <a href={items.link} className="text-2xl xs:text-3xl transition-all text-left leading-none text-secondary font-medium">
                        {items.name}
                      </a>
                    </li>
                  </ul>
                ))}
                <p className="text-center text-white-100 text-base xs:text-xl uppercase pt-8">+(38) 032 297 50 20</p>
                <p className="text-center text-white-100 text-base xs:text-xl uppercase pt-4">8 Lystopadovoho Chynu, Lviv</p>

                <div className="flex gap-4 justify-center pt-5 *:underline">
                  <a href="/" className=" text-secondary  uppercase  text-xs">
                    <FaFacebook size={20} />
                  </a>
                  <a href="/" className=" text-secondary  uppercase  text-xs">
                    <FaInstagram size={20} />
                  </a>
                  <a href="/" className=" text-secondary  uppercase  text-xs">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
