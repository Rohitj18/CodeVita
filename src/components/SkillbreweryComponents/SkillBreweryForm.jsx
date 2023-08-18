import React from "react";
import { useState } from "react";

const SkillBreweryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    college: "",
    degree: "",
    sem: "",
    email: "",
    phoneNumber: "",
    track: "",
    verification: "",
    date: Date.now(),
  });

  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("Finally printing the entireform ka data ........");
    console.log(formData);
  }

  return (
    <div>
      <div className="w-[100%]  h-screen overflow-y-hidden overflow-x-hidden bg-off-white py-[20px] flex flex-row">
        <div className="flex flex-col mt-[30px] w-[30%] mx-[auto] mb-[30px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   border-4 ">
          {/* <div className="text-white font-semibold text-center text-2xl mb-[8px] bg-blue-rgba h-[60px] flex justify-center items-center">
            Registration Form
          </div> */}

          <form
            onSubmit={submitHandler}
            className="flex flex-col  w-[100%] h-[100%] gap-4 p-[20px]"
          >
            <label htmlFor="firtname" className="text-black">
              Name:{" "}
            </label>
            <input
              className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black "
              id="firstname"
              type="text"
              placeholder="first name"
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
            />

            <label htmlFor="college" className="text-black">
              College:{" "}
            </label>
            <input
              className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black  "
              id="college"
              type="text"
              placeholder="College Name"
              onChange={changeHandler}
              name="college"
              value={formData.college}
            />

            <label htmlFor="degree" className="text-black">
              Degree:{" "}
            </label>
            <input
              className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black "
              id="degree"
              type="text"
              placeholder="Degree"
              onChange={changeHandler}
              name="degree"
              value={formData.degree}
            />

            <label htmlFor="sem" className="text-black">
              Semester:{" "}
            </label>
            <input
              className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black "
              id="sem"
              type="number"
              placeholder="Semester"
              onChange={changeHandler}
              name="sem"
              value={formData.sem}
            />

            <label htmlFor="scrollbar" className="text-black"> Track :  </label>
            <select
              name="track"
              id="scrollbar"
              value={formData.track}
              onChange={changeHandler}
              className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black "
            >
              <option value="scarpio" className="text-black">Web Dev</option>
              <option value="fartuner" className="text-black">App Dev</option>
              <option value="Tharrr" className="text-black">Product Management</option>
              <option value="Legender" className="text-black">Computer Vision</option>
              <option value="Defender" className="text-black">Data Science</option>
              <option value="Defender" className="text-black">DBMS</option>
              <option value="Defender" className="text-black">Cybersecurity</option>
            </select>

            <label htmlFor="verify" className="text-black">
              Verification Code : {" "}
            </label>
            <input
              className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black "
              id="verify"
              type="number"
              placeholder="Semester"
              onChange={changeHandler}
              name="verification"
              value={formData.verification}

            />

            <button className={`text-white font-semibold text-xl rounded-md w-[100%] h-[40px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-5 mb-3 shadow-2xl flex flex-row gap-3 items-center justify-center mr-[20px]`}>
              <div>Submit</div>
            </button>


          </form>
        </div>

        <div className="flex flex-col mt-[30px] w-[40%] mx-[auto] mb-[30px] bg-[#F5F5F4] justify-center items-center  ">


          <div className="flex flex-row border-2 border-blue-rgba shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] ">

            <div className="flex flex-col border-r-1 justify-center items-center border-r-2 border-blue-rgba">

              <div className="text-black h-[56px] w-[100%] border-b-2 border-blue-rgba px-[10px] font-semibold text-lg">Perks</div>
              <div className="text-black h-[35px] w-[100%] border-b-2 border-blue-rgba px-[10px] font-semibold text-lg">Commitment</div>
              <div className="text-black h-[50px] w-[100%] border-b-2 border-blue-rgba px-[10px] font-semibold text-lg">Ideal For</div>
              <div className="text-black w-[100%] border-r-2 px-[10px] font-semibold text-lg">Pricing</div>

            </div>

            <div className="flex flex-col ">
              <div className="flex flex-row border-3 h-[55px] border-b-2 border-blue-rgba">

                <div className="text-black  border-r-2 border-blue-rgba px-[10px]">LinkedIn profile building</div>
                <div className="text-black  border-r-2 border-blue-rgba px-[10px]">24/7 Support</div>
                <div className="text-black  border-r-2 border-blue-rgba px-[10px]">Internship Completion Certificate</div>
                <div className="text-black  px-[10px]">project Intensive</div>

              </div>

              <div className="flex flex-col  ">
                <div className="text-black  h-[35px] px-[10px] border-b-2 border-blue-rgba">5-6 hours a week/1 month</div>
                <div className="text-black  px-[10px] border-b-2 border-blue-rgba">Students pursuing any technical/managerial field at a graduate/undergraduate level</div>
                <div className="text-black   px-[10px] ">	Free*</div>
              </div >
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default SkillBreweryForm;
