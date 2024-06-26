import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import navigatorsIcon from "../assests/tracker/tracker_note_icon.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const Tracker = () => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  return (
    <div className="flex">
      <div className="border-b flex flex-col items-center my-2 gap-4 p-2 border-r-4 justify-center">
        <div
          className={`flex items-center border rounded-lg my-2 mb-6 py-1 px-4 ${
            showSearch ? "bg-[#F2F2F2]" : "bg-[#9e9e9e26]"
          }`}
        >
          <input
            type="text"
            name="search"
            onClick={() => setShowSearch(true)}
            className={`outline-none ${
              showSearch ? "bg-[#9e9e9e26]" : "bg-[#F2F2F2]"
            }`}
          />
          <FaSearch />
        </div>
        <div className="w-full">
          <Link to="/tracker/applied-companies">
            <div
              className={`hover:bg-[#F5F5F5] rounded-sm py-2 flex items-center gap-2 px-4 cursor-pointer ${
                location.pathname.match("tracker/applied-companies") && "bg-[#F5F5F5] hover:bg-[#9e9e9e26]"
              }`}
            >
              <img
                src={navigatorsIcon}
                alt="navigatorsIcon"
                className="w-7 h-7"
              />
              <span>Applied Companies</span>
            </div>
          </Link>
          <div className="hover:bg-[#F5F5F5] py-2 flex items-center gap-2 px-4 cursor-pointer">
            <img
              src={navigatorsIcon}
              alt="navigatorsIcon"
              className="w-7 h-7"
            />
            <span>Linkedin Connections</span>
          </div>
          <div className="hover:bg-[#F5F5F5] py-2 flex items-center gap-2 px-4 cursor-pointer">
            <img
              src={navigatorsIcon}
              alt="navigatorsIcon"
              className="w-7 h-7"
            />
            <span>Day Tracker</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Tracker;
