import React from "react";
import ProfileInfo from "./_component/ProfileInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian Travels | Profile",
  description: "View your  profile ",
};

const ProfilePage = () => {
  return (
    <div>
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
