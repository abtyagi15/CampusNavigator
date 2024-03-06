import React, {useState} from "react";
import { VscBell } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";

const WithAuth = () => {
    const [show, setShow] = useState(false);
    function classChangeHandler() {
        setShow(!show);
    }
  return (
    <div className="flex items-center gap-4 relative">
      <VscBell className="w-6 h-6" />
      <VscAccount className="w-6 h-6 cursor-pointer"  onClick={classChangeHandler} />
      <div className={`border p-2 rounded absolute top-7 shadow-sm right-0 ${show === false ? "hidden" : ""}`}>
        <p>Profile</p>
        <p>Setting</p>
        <p className={`flex items-center gap-1`}>
          <p>Signout</p>
          <VscSignOut />
        </p>
      </div>
    </div>
  );
};

export default WithAuth;
