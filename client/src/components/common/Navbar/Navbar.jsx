import React from "react";
import Logo from "../../../assests/LogoImage.png";
import CurvedLine from "../../../assests/curveUnderline.svg";
import { Link, useLocation } from "react-router-dom";
import NoAuth from "./NoAuth";
import WithAuth from "./WithAuth";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
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

      {pathname === "/home" ? (
        <WithAuth pathname={pathname} />
      ) : (
        <NoAuth pathname={pathname} />
      )}
    </div>
  );
};

export default Navbar;
