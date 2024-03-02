import React from "react";
import Navbar from "../components/common/Navbar";
import DashboardPage from "../components/core/DashboardPage/DashboardPage";  
import Footer from "../components/common/Footer";

export const Dashboard = () => {
  return (
    <div className="h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <DashboardPage />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
