import React from "react";
import HotelList from "./_components/Hotel.list";
import Hotel from "./_components/Hotel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian Travels | Hotels",
  description: "View all hotels and book for you favorite one",
};

const HotelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Hotel />
    </div>
  );
};

export default HotelPage;
