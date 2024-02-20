import React from "react";
import Logo from "../../assests/LogoImage.png";
import CurvedLine from "../../assests/curveUnderline.svg";
import ForwardArrow from "../../assests/ForwardArrow.svg";

const Footer = () => {
  return (
    <div>
      <div className="relative montserrat h-[26.34px]">
        <div className="flex item-center absolute gap-[1px]">
          <img src={Logo} alt="Logo" className="w-[27.16px]" />
          <div className="text-[19.11px] font-bold">
            Campus<span className="text-[#3652DD]">Navigator</span>
          </div>
        </div>
        <div className="absolute w-[205px] top-[15px]">
          <img src={CurvedLine} alt="CurvedLine" />
        </div>
      </div>
      <div className="flex justify-between my-[23px] items-center">
        <div className="flex flex-col gap-[10px]">
          <b>+91 9340204054</b>
          <div>abtyagi150702@gmail.com</div>
        </div>
        <div className="bg-[#3652DD] flex items-center rounded-[10px] text-white px-[42px] justify-around w-[800px]">
          <div className="text-[18px] font-bold py-[37px]">
            Subscribe to Our Newsletter
          </div>
          <div className="bg-white flex justify-between rounded-[6px] w-[416px]">
            <div className="text-[14px] py-16px text-[#0A142F] py-[12.16px] pl-[24px]">
              Email Address
            </div>
            <img
              src={ForwardArrow}
              alt="ForwardArrow"
              className=" bg-[#D6D6D6] py-[12.16px] px-[35px] rounded-r-[6px]"
            />
          </div>
        </div>
      </div>
      <hr className="border" />
      <div className="flex justify-between mt-[20px] items-center">
        <div>Social Media</div>
        <div className="flex gap-4">
          <span>A product of</span>
          <img src={Logo} alt="Logo" className="w-[26.16px]" />
        </div>
        <div>© 2024 ABTYAGI. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
