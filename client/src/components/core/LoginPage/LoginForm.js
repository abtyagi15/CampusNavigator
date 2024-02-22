import React, { useState } from "react";

const LoginForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
    console.log(backendUrl);
  }
  async function submitHandler(event){
    event.preventDefault();
    try{
        const response = await fetch(`${backendUrl}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        const data = await response.json();
        console.log(data);
        
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="border   w-[500px] mx-auto rounded-[32px] flex flex-col items-center">
      <div className="text-[32px] text-[#333333] my-[20px]">LOGIN</div>
      <form className="flex flex-col gap-3 text-[16px] w-[80%]">
        <label>
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
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
            value={formData.password}
          />
        </label>
        <div className="text-[20px] rounded-[32px] bg-[#aaaaaa] text-white text-center my-[24px] py-[21px]" onClick={submitHandler}>
          Log in
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
