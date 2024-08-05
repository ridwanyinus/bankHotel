"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`  fixed right-12 w-12 h-12 flex items-center justify-center text-white bg-secondary rounded-lg z-50 transition-all duration-1000 ${
        isVisible ? "bottom-1 animate-scroll_amini" : "bottom-[-10%] transition-all duration-300"
      } hover:bg-primary`}
      style={{ transitionProperty: "bottom" }}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
