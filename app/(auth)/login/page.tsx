import React from "react";
import LoginForms from "./_component/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian Travels | Login",
  description: "Login with your credentials",
};

const LoginPage = () => {
  return (
    <div>
      <LoginForms />
    </div>
  );
};

export default LoginPage;
