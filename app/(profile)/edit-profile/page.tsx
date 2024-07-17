import React from "react";
import EditProfile from "./_components/EditProfile";
import LoginUserOnly from "@/components/permissions/LoginUserOnly";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian Travels | Edit-Profile",
  description: "Edit your  profile ",
};

const EditProfilePage = () => {
  return (
    <LoginUserOnly>
      <EditProfile />
    </LoginUserOnly>
  );
};

export default EditProfilePage;
