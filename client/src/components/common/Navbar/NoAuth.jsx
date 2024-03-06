import React from 'react'
import {Link} from "react-router-dom"

const NoAuth = ({pathname}) => {
  return (
    <div className="flex w-[440px] justify-between items-center">
    <div className="text-[#3652DD] border-2 border-[#3652DD] text-[18px] px-[15px] py-[17px] rounded-[4px]">
      Share Your Experience
    </div>
    <Link to={pathname=== "/signup" ? "/login" : "/signup"}>
      <div className="text-[18px] bg-[#3652DD] px-[30px] py-[17px] text-white rounded-[4px] ">
        {pathname === "/signup" ? "LOGIN" : "SIGNUP"}
      </div>
    </Link>
  </div>
  )
}

export default NoAuth