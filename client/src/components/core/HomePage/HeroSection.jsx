import React from "react";
import HeroImage from "../../../assests/HeroImage.png";
import HumanInChair from "../../../assests/HumanChair.png";
const HeroSection = () => {
  return (
    <div className="h-[543px] flex items-center justify-center relative text-white">
      <div className="max-w-[1292px] max-h-[375px] absolute bg-[#3785FA]">
        <img src={HeroImage} alt="background" className="w-full h-full "/>
      </div>
      <div className="absolute flex items-center justify-center">
        <div className="w-[40%] flex">
          <img src={HumanInChair} alt="HumanInChair" className="mx-auto" />
        </div>
        <div className="w-[40%] flex flex-col items-start gap-[26px]">
          <div className="text-[34px] font-bold ">Alumini Form</div>
          <div className="text-[22px]">Share Your Entrepreneurial Journey Story and Inspire All Fellow and Upcoming Alumnis! </div>
          <div className="text-[20px] font-bold py-[15px] bg-[#2D235A] text-white w-[231.03px] text-center rounded-[4px]">Share Your Experience</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
