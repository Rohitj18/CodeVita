import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const OrangeButton = ({textsize,height,width,text,iconsize}) => {
  return (
    <div>
      <button className={`text-white font-semibold text-[${textsize}px] rounded-md w-[${width}px] h-[${height}px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
            <div>{text}</div>
            <BsArrowRight size={iconsize}/>
      </button>
    </div>
  )
}

export default OrangeButton
