import React from "react";
import Navbar from "../components/common/Navbar";
import VerifyEmailForm from "../components/core/VerifyEmailPage/VerifyEmailForm";  
import Footer from "../components/common/Footer";

export const VerifyEmail = () => {
  return (
    <div className="h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <VerifyEmailForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
