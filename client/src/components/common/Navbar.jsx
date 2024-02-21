import React from "react";
import Logo from "../../assests/LogoImage.png";
import CurvedLine from "../../assests/curveUnderline.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-[1292px] mx-auto my-[42px] items-center">
      <Link to="/">
        <div className="relative montserrat h-[47.7px]">
          <div className="flex item-center h-[47.7px] absolute gap-[2px]">
            <img src={Logo} alt="Logo" width="43px" />
            <div className="text-[34.62px] font-bold">
              Campus<span className="text-[#3652DD]">Navigator</span>
            </div>
          </div>
          <div className="absolute top-[27px] w-[363px]">
            <img src={CurvedLine} alt="CurvedLine" />
          </div>
        </div>
      </Link>
      <div className="flex w-[440px] justify-between items-center">
        <div className="text-[#3652DD] border-2 border-[#3652DD] text-[18px] px-[15px] py-[17px] rounded-[4px]">
          Share Your Experience
        </div>
        <Link to="/login">
          <div className="text-[18px] bg-[#3652DD] px-[30px] py-[17px] text-white rounded-[4px] ">
            LOGIN
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
