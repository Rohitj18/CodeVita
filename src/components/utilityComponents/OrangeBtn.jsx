import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const OrangeBtn = ({width}) => {
    let wid=width.toString()+"px";
    console.log(typeof(wid));
  return (
    <div className={``}>
      <button className={`text-white font-semibold text-[18px] rounded-md w-[${wid}] h-[30px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
        <div>Explore More</div>
        <BsArrowRight size={24}/>
      </button>
    </div>
  )
}

export default OrangeBtn
