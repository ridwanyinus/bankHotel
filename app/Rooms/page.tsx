import React from "react";
import Navbar from "@/components/Navbar";
import RoomHero from "./RoomHero";
const Rooms = () => {
  return (
    <main>
      <section className="pb-3 bg-primary">
        <Navbar />
      </section>

      <section>
        <RoomHero />
      </section>
    </main>
  );
};

export default Rooms;
