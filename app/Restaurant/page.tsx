import React from "react";
import Navbars from "@/components/Navbar";
import RestaurantHero from "./RestaurantHero";
const page = () => {
  return (
    <main className="bg-primary">
      <Navbars />
      <RestaurantHero />
    </main>
  );
};

export default page;
