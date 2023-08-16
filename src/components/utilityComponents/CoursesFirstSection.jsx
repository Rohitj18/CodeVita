import React from "react";
import './CoursesFirstSection.css';
import {data} from '../../Data/data';
import img0 from '../../assets/coursepageimages/skillimg.png'
import img1 from '../../assets/coursepageimages/datascienceimg.png'
import img2 from '../../assets/coursepageimages/cyberimg.png'

function CoursesFirstSection({index,width1,width2,width3 }) {
  const imageArr = [img0, img1, img2];
  
  return (
    <div className="w-[100%] h-[100vh] overflow-y-hidden overflow-x-hidden bg-[#F5F5F4]">
      <div className="w-11/12 mx-auto h-[100%] flex flex-row items-center justify-between  ">


        <div className="flex flex-col items-left justify-center h-[100%] max-w-[45%] text-blue-400 ">
          <p className="font-bold flex bg-clip-text text-blue-rgba px-[15px] text-4xl items-center">
          {data[index]?.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f67f23] to-[#f2921b] ml-[12px] "></span>
          </p>
          <p className="ml-4 mt-7 mb-3 text-lg text-black">
          {data[index]?.description}
          </p>
           
            <p className="ml-4 mt-7  text-lg text-black font-bold" >Key Highlight's : </p>

          <div className="flex flex-row" >
                <button className={`text-white font-semibold text-[18px] rounded-md w-[${width1}px] h-[35px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
                            <div>{data[index]?.highlight1}</div>
                           
                </button>
                <button className={`text-white font-semibold text-[18px] rounded-md w-[${width2}px] h-[35px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
                            <div>{data[index]?.highlight2}</div>
                           
                </button>
                <button className={`text-white font-semibold text-[18px] rounded-md w-[${width3}px] h-[35px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
                            <div>{data[index]?.highlight3}</div>
                 
                </button>
        </div>
        
        </div>
        
        <div className='icon-dots w-[800px] h-[600px] flex   justify-center  items-center'  >
            <img   src={imageArr[index]} alt="" />
        </div>

      

      </div>
    </div>
  );
}

export default CoursesFirstSection;
