import React from "react";
import skillsData from "../../../assests/data/data.json";
import { useState } from "react";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    cgpa: "",
    sgpa: "",
    percentage12: "",
    percentage10: "",
    gender: "",
    branch: "",
    internship: "",
    skills: [],
  });

  function changeHandler(event) {
    console.log("This is event ", event);
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
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
              name="cgpa"
              className="border"
              onChange={changeHandler}
              value={formData.cgpa}
            />
          </label>
          <label>
            <p>What is your SGPA in 6th semester</p>
            <input
              type="number"
              name="sgpa"
              className="border"
              onChange={changeHandler}
              value={formData.sgpa}
            />
          </label>
          <label>
            <p>What was your percentage in 12th class?</p>
            <input
              type="number"
              name="percentage12"
              className="border"
              onChange={changeHandler}
              value={formData.percentage12}
            />
          </label>
          <label>
            <p>What was your percentage in 10th class?</p>
            <input
              type="number"
              name="percentage10"
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
                  name="gender"
                  value="male"
                  onChange={changeHandler}
                />
                <p>Male</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={changeHandler}
                />
                <p>Female</p>
              </label>
            </div>
          </label>
          <label>
            <p>Provide Your Branch</p>
            <select
              name="branch"
              value={formData.branch}
              onChange={changeHandler}
            >
              <option value="">-- Select Branch --</option>
              <option value="Computer Science and Engineering">
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
                  name="internship"
                  value="yes"
                  onChange={changeHandler}
                />
                <p>Yes</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  name="internship"
                  value="no"
                  onChange={changeHandler}
                />
                <p>No</p>
              </label>
            </div>
          </label>
          <label>
            <p>Provide Your Skills</p>
            <select name="skills" value={formData.value} onChange={changeHandler}>
              <option value="">-- Select Skills --</option>
              {skillsData.skills.map((skill) => (
                <option value={skill.name}>
                  <div key={skill.id} className="flex">
                    <input type="checkbox" />
                    <p>{skill.name}</p>
                  </div>
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
