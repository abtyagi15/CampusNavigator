import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignupContext } from "../../../context/SignupContext";

const SignupForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate();
  const SignupData = useContext(SignupContext);

  const setUserForm = SignupData.setUserForm;
  const userForm = SignupData.userForm;
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserForm((prev) => {
      return {
        ...prev,
        formData: {
          ...prev.formData,
          [name]: value,
        },
      };
    });
    console.log("SignupData", SignupData.userForm);
  };

  const submitHandler = async (event) => {
    try {
      if (
        !userForm.formData.firstName ||
        !userForm.formData.lastName ||
        !userForm.formData.email ||
        !userForm.formData.password ||
        !userForm.formData.confirmPassword
      ) {
        alert("Please fill all the fields");
        return;
      }
      if (userForm.formData.password !== userForm.formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      event.preventDefault();
      const response = await fetch(`${backendUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userForm.formData),
      });
      navigate("/verify-email");
      const data = response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
      console.log("Error in signup submit handler");
    }
  };
  return (
    <div className="border w-[500px] mx-auto rounded-[32px] flex flex-col items-center">
      <div className="text-[32px] text-[#333333] my-[20px]">SIGNUP</div>
      <form className="flex flex-col gap-3 text-[16px] w-[80%]">
        <div className="flex justify-between">
          <label>
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={userForm.formData.firstName}
              className="border h-[56px]"
            />
          </label>
          <label>
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={userForm.formData.lastName}
              className="border h-[56px]"
            />
          </label>
        </div>
        <label>
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={userForm.formData.email}
            className="border h-[56px] w-full"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="border h-[56px] w-full"
            onChange={changeHandler}
            value={userForm.formData.password}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            className="border h-[56px] w-full"
            onChange={changeHandler}
            value={userForm.formData.confirmPassword}
          />
        </label>
        <div
          className="text-[20px] rounded-[32px] bg-[#aaaaaa] text-white text-center my-[24px] py-[21px]"
          onClick={submitHandler}
        >
          Sign up
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
