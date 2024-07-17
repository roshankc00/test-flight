import { Metadata } from "next";

import OfferDetails from "./_components/OfferDetails";
import React from "react";

export const metadata: Metadata = {
  title: "Meridian Travels | Offers",
  description: "View all offera and grab your favorite one",
};

const OfferPage = () => {
  return (
    <div>
      <OfferDetails />
    </div>
  );
};

export default OfferPage;
