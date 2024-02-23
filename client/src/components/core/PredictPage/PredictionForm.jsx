import React from "react";
import skillsData from "../../../assests/data/data.json";
import { useState } from "react";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    Branch: "",
    Gender: "",
    tenth_percentage: "",
    twelfth_percentage: "",
    CGPA_Till_sixth: "",
    sixth_Sem_SGPA: "",
    Internship: "",
    Skills: [],
  });

  function changeHandler(event) {
    console.log("This is event ", event);
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: name === "skills" ? [...prev.skills, value] : value,
      };
    });
    // console.log(formData);
    // console.log("This is formData skills ",formData.skills);
  }

  async function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    const response = await fetch("http://localhost:3001/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <div className="text-center text-[32px]">Make Your Prediction</div>
      <form className="flex mx-auto w-[600px] gap-4">
        <div className="border rounded-[5px] p-[20px]">
          <label>
            <p>What is your CGPA</p>
            <input
              type="number"
              name="CGPA_Till_sixth"
              className="border"
              onChange={changeHandler}
              value={formData.cgpa}
            />
          </label>
          <label>
            <p>What is your SGPA in 6th semester</p>
            <input
              type="number"
              name="sixth_Sem_SGPA"
              className="border"
              onChange={changeHandler}
              value={formData.sgpa}
            />
          </label>
          <label>
            <p>What was your percentage in 12th class?</p>
            <input
              type="number"
              name="twelfth_percentage"
              className="border"
              onChange={changeHandler}
              value={formData.percentage12}
            />
          </label>
          <label>
            <p>What was your percentage in 10th class?</p>
            <input
              type="number"
              name="tenth_percentage"
              className="border"
              onChange={changeHandler}
              value={formData.percentage10}
            />
          </label>
        </div>
        <div className="border rounded-[5px] p-[20px]">
          <label>
            <p>What is your Gender?</p>
            <div className="flex">
              <label className="flex">
                <input
                  type="radio"
                  name="Gender"
                  value="Male"
                  onChange={changeHandler}
                />
                <p>Male</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  name="Gender"
                  value="Female"
                  onChange={changeHandler}
                />
                <p>Female</p>
              </label>
            </div>
          </label>
          <label>
            <p>Provide Your Branch</p>
            <select
              name="Branch"
              value={formData.branch}
              onChange={changeHandler}
            >
              <option value="">-- Select Branch --</option>
              <option value="Computer Science & Engineering">
                Computer Science and Engineering
              </option>
              <option n value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Bio Medical Engineering">
                Bio Medical Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="opElectronics & Communication Engineeringtion3">
                Electronics & Communication Engineering
              </option>
              <option value="Electronics & Instrumentation Engineering">
                Electronics & Instrumentation Engineering
              </option>
              <option value="Pertro Chemical Engineering">
                Pertro Chemical Engineering{" "}
              </option>
            </select>
          </label>
          <label>
            <p>Have you done any Internship ?</p>
            <div className="flex">
              <label className="flex">
                <input
                  type="radio"
                  name="Internship"
                  value="Yes"
                  onChange={changeHandler}
                />
                <p>Yes</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  name="Internship"
                  value="No"
                  onChange={changeHandler}
                />
                <p>No</p>
              </label>
            </div>
          </label>
          <label>
            <p>Provide Your Skills</p>
            <select
              name="Skills"
              value={formData.Skills}
              onChange={changeHandler}
            >
              <option>-- Select Skills --</option>
              {skillsData.skills.map((skill) => (
                <option key={skill.id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
          </label>
          <button
            className="border px-[15px] py-[10px] rounded-[4px] text-center"
            onClick={submitHandler}
          >
            Predict
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
