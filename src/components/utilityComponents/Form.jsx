import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';


const Form = () => {

    const [formData, setFormData] = useState({
        mame: "",
        college: "", degree: "", semester: "", email: "", phoneno: "", date: Date.now()
    });

    var location = useLocation();

    function changeHandler(event) {

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        formData["location"]=location.pathname.substring(1,location.pathname.length);
        console.log(formData);
        const response = await Axios.post("http://localhost:4000/api/v1/createuser", formData).then(function (response) {
            toast.success("Form Submitted Sucessfully")
            console.log(response);
        }).catch(function (error) {
            toast.error("Error Occured");
            console.log(error);
        });
        console.log(response);
        console.log(formData);
    }


    return (
        <div className='w-[100%]  overflow-y-hidden overflow-x-hidden bg-off-white py-[20px]'>
            <div className='flex flex-col mt-[30px] w-[40%] mx-[auto] mb-[30px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

                <div className="text-white font-semibold text-center text-2xl mb-[8px] bg-blue-rgba h-[60px] flex justify-center items-center">
                    Registration Form
                </div>

                <form onSubmit={submitHandler} className='flex flex-col  w-[100%] h-[100%] gap-4 p-[20px]' >


                    <label htmlFor="name" className='text-black'>Name : </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black " id='name' type="text" placeholder='Name' onChange={changeHandler} name="name" value={formData.name} />

                    <label htmlFor="college" className='text-black'>College : </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black  " id='college' type="text" placeholder='College Name' onChange={changeHandler} name="college" value={formData.college} />

                    <label htmlFor="degree" className='text-black'>Degree : </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black " id='degree' type="text" placeholder='Degree' onChange={changeHandler} name="degree" value={formData.degree} />

                    <label htmlFor="sem" className='text-black'>Semester : </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black " id='semester' type="number" placeholder='Semester' onChange={changeHandler} name="semester" value={formData.semester} />

                    <label htmlFor="email" className='text-black'>E-mail : </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black " id='email' type="email" placeholder='E-mail' onChange={changeHandler} name="email" value={formData.email} />

                    <label htmlFor="phone" className='text-black'>Phone no. : </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black " id='phone' type="number" placeholder='Phone number' onChange={changeHandler} name="phoneno" value={formData.phoneno} />

                    <label htmlFor="date" className='text-black'>When would you like to start ? </label>
                    <input className="h-[40px] px-[8px] focus:outline-none border-b-2 border-blue-rgba border-solid text-black " id='date' type="date" placeholder='Current Semester' onChange={changeHandler} name="date" value={formData.date} />
                    <button className={`text-white font-semibold text-xl rounded-md w-[100%] h-[50px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-5 mb-3 shadow-2xl flex flex-row gap-3 items-center justify-center mr-[20px]`}>
                        <div>Complete Enrollment</div>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Form
