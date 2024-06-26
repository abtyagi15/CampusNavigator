import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PlusIcon from "../../../../assests/tracker/daily_target_plus.png";
import axios from "axios";
import { useSelector } from "react-redux";

const AppliedCompanies = () => {
  const [dailyTarget, setDailyTarget] = useState(0);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const { token } = useSelector((state) => state.auth);

  //updating the value of daily target in the database
  const sendDailyTarget = async () => {
    console.log("Before sending request to backend");
    const response = await axios.post(
      `${backendUrl}/daily-target`,
      dailyTarget,
      {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    console.log(data);
  };

  useEffect(() => {
    const currentDate = new Date();
    const isoStringCurrentDay = currentDate.toISOString();
    let specificDate = currentDate;
    specificDate.setUTCHours(0, 0, 0, 0);
    const isoStringPastDay = specificDate.toISOString();

    console.log(
      "Before sending get request to retrieve daily target",
      isoStringCurrentDay,isoStringPastDay
    );
    const fetchDailyTarget = async () => {
      const response = await axios.get(`${backendUrl}/applied-companies`, {
        headers: {
          Authorisation: `Bearer ${token}`,
          isoStringCurrentDay: isoStringCurrentDay,
          isoStringPastDay: isoStringPastDay
        },
      });
      const data = await response.data;
      console.log(data.data.length);
      setDailyTarget(data.data.length);
    };
    fetchDailyTarget();
  }, []);
  return (
    <div>
      <div className="flex justify-end my-4">
        <div className="flex gap-0.5 dark:text-white items-center">
          Daily Target : <span>{dailyTarget}</span>
          <span>/</span>
          <span>40</span>
          <img
            src={PlusIcon}
            alt="Icon to increase target number"
            className="w-6 h-6 cursor-pointer"
            onClick={(prev) => {
              dailyTarget < 40 &&
                setDailyTarget((prev) => prev + 1) &&
                console.log(dailyTarget);
              sendDailyTarget();
            }}
          />
        </div>
      </div>
      <div className="px-2">
        <div>
          <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
            <span className="text-white">Today</span>
            <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
          </div>
          <div className="px-4">
            <table className="w-full">
              <thead className="border">
                <td>Company Name</td>
                <td>Applied Role</td>
                <td>Time</td>
                <td>Other</td>
              </thead>
              <tbody className="border">
                <tr>
                  <td>Hexaware</td>
                  <td>Graduate Engineer Trainee</td>
                  <td>{Date.now()}</td>
                  <td>No Remark</td>
                </tr>
                <tr>
                  <td>Talent Serve</td>
                  <td>Full Stack Developer</td>
                  <td>{Date.now()}</td>
                  <td>No Remark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
          <span className="text-white">Yesterday</span>
          <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
        </div>
        <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
          <span className="text-white">Day before Yesterday</span>
          <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
        </div>
      </div>
    </div>
  );
};

export default AppliedCompanies;
