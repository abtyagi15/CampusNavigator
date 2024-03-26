import React from "react";
import skillsData from "../../../assests/data/data.json";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const PredictionForm = () => {
  const backendUrl = process.env.REACT_APP_PREDICTION_MODEL_BACKEND_URL;
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
    console.log("This is event.name ", event.name);
    console.log("This is event.target ", event.target.value);
    const { name, value } = event.target;
    console.log("This is event.[name] ", name, value);
    console.log("This is backend url",backendUrl);


    setFormData((prev) => {
      return {
        ...prev,
        [name]: name === "Skills" ? [...prev.Skills, value] : value
      };
    });
    // console.log(formData);
    console.log("This is formData skills ", formData.Skills);
  }

  function unselectSkillHandler(event) {
    console.log("This is event.target", event.target);
    console.log("This is event.target", event.target.key);

    // setFormData((prev) => {
    //   const pr =   [...prev.Skills];
    // const [two, ...rest] = pr;
    //   return pr;

    // });
  }
  async function submitHandler(event) {
    try {
      event.preventDefault();
      console.log(formData);
      const response = await fetch(`${backendUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="text-center text-2xl md:text-4xl">
        Make Your Prediction
      </div>
      <form className="flex flex-col md:flex-row mx-auto w-full md:w-3/4 lg:w-[600px] gap-4">
        <div className="border rounded-lg p-4">
          <label>
            <p className="text-sm md:text-base">What is your CGPA</p>
            <input
              type="number"
              name="CGPA_Till_sixth"
              className="border"
              onChange={changeHandler}
              value={formData.cgpa}
            />
          </label>
          <label>
            <p className="text-sm md:text-base">
              What is your SGPA in 6th semester
            </p>
            <input
              type="number"
              name="sixth_Sem_SGPA"
              className="border"
              onChange={changeHandler}
              value={formData.sgpa}
            />
          </label>
          <label>
            <p className="text-sm md:text-base">
              What was your percentage in 12th class?
            </p>
            <input
              type="number"
              name="twelfth_percentage"
              className="border"
              onChange={changeHandler}
              value={formData.percentage12}
            />
          </label>
          <label>
            <p className="text-sm md:text-base">
              What was your percentage in 10th class?
            </p>
            <input
              type="number"
              name="tenth_percentage"
              className="border"
              onChange={changeHandler}
              value={formData.percentage10}
            />
          </label>
        </div>
        <div className="border rounded-lg p-4">
          <label>
            <p className="text-sm md:text-base">What is your Gender?</p>
            <div className="flex">
              <label className="flex">
                <input
                  type="radio"
                  name="Gender"
                  value="Male"
                  onChange={changeHandler}
                />
                <p className="text-sm md:text-base">Male</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  name="Gender"
                  value="Female"
                  onChange={changeHandler}
                />
                <p className="text-sm md:text-base">Female</p>
              </label>
            </div>
          </label>
          <label>
            <p className="text-sm md:text-base">Provide Your Branch</p>
            <select
              name="Branch"
              value={formData.Branch}
              onChange={changeHandler}
            >
              <option value="">-- Select Branch --</option>
              <option value="Computer Science & Engineering">
                Computer Science and Engineering
              </option>
              <option value="Mechanical Engineering">
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
            <p className="text-sm md:text-base">
              Have you done any Internship ?
            </p>
            <div className="flex">
              <label className="flex">
                <input
                  type="radio"
                  name="Internship"
                  value="Yes"
                  onChange={changeHandler}
                />
                <p className="text-sm md:text-base">Yes</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  name="Internship"
                  value="No"
                  onChange={changeHandler}
                />
                <p className="text-sm md:text-base">No</p>
              </label>
            </div>
          </label>
          <label>
            <p className="text-sm md:text-base">Provide Your Skills</p>
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
            <div className="flex flex-wrap">
              {formData.Skills.map((skill, index) => (
                <div
                  className="flex items-center"
                  key={index}
                  onClick={unselectSkillHandler}
                >
                  <span>{skill}</span>
                  <IoCloseSharp />
                </div>
              ))}
            </div>
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
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
