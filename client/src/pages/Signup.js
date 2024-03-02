import React from "react";
import Navbar from "../components/common/Navbar";
import SignupForm from "../components/core/SignupPage/SignupForm";  
import Footer from "../components/common/Footer";

export const Signup = () => {
  return (
    <div className="h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <SignupForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
