import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PredictForm from "../components/core/PredictPage/PredictionForm";

const Predict = () => {
  return (
    <div className="h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <PredictForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Predict;
