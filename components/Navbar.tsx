"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { navItems } from "@/Data";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav className={`${scroll ? "is-sticky" : ""} bg-primary flex px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 pt-5 justify-between items-center mb-0`}>
      <div>
        <Link href="/" className="ml-4 text-white-100 capitalize lg:text-base desktop:text-xl leading-none font-medium z-[999] relative logo">
          BankHotel
        </Link>
      </div>

      <div className="flex gap-x-10 2xl:gap-x-16 max-xl:hidden">
        {navItems.map((item, idx: number) => (
          <ul key={`link=${idx}`}>
            <li className="flex">
              <Link
                href={item.link}
                className={`text-white-100 text-xs largesceen:text-sm leading-normal font-normal uppercase hover:text-secondary hover:font-semibold ${pathname === item.link ? "active" : ""}`}>
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>

      <div>
        <p className="stick text-xs largesceen:text-base text-white-100 leading-none max-xl:hidden">+38 032 297 50 20</p>
      </div>

      {/* Mobile Nav */}
      <section className="xl:hidden z-[995]">
        <div>
          {toggleMenu ? (
            <IoClose size={30} color="#ffffff" onClick={() => setToggleMenu(false)} className="relative z-10" />
          ) : (
            <AiOutlineAlignLeft size={30} onClick={() => setToggleMenu(true)} className="relative z-10 text-[#FFFCF6] stick" />
          )}

          {toggleMenu && (
            <div className="w-full fixed top-0 right-0 h-screen">
              <div className=" overflow-hidden w-full h-full bg-primary scale-up-ver-top transition-all pt-28 pl-2 sm:pl-12 pb-3">
                {navItems.map((item, idx: number) => (
                  <ul key={`link=${idx}`}>
                    <li className="flex px-4 py-1 last:mb-4">
                      <Link href={item.link} className="text-2xl xs:text-3xl transition-all text-left leading-none text-secondary font-medium">
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                ))}
                <p className="text-center text-white-100 text-base xs:text-xl uppercase pt-8">+38 032 297 50 20</p>
                <p className="text-center text-white-100 text-base xs:text-xl uppercase pt-4">8 Lystopadovoho Chynu, Lviv</p>

                <div className="flex gap-4 justify-center pt-5">
                  <a href="/" className="text-secondary uppercase text-xs">
                    <FaFacebook size={20} />
                  </a>
                  <a href="/" className="text-secondary uppercase text-xs">
                    <FaInstagram size={20} />
                  </a>
                  <a href="/" className="text-secondary uppercase text-xs">
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
