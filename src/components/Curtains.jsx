import React from 'react'
import './Curtains.css'

const Curtains = () => {
  return (
    <div className='w-[100%] h-screen bg-[#f5f5f4]'>
      <div className='w-[76%] h-screen mx-auto '>
        {/* heading */}
        <div className='w-[100%] text-center text-black font-bold text-3xl mt-[100px] mb-[26px]'>
          "Elevating Education, Empowering Futures: Your Journey Starts Here!"
        </div>
        {/* curtains */}
        <div className='w-[100%] h-[500px] flex flex-row items-stretch'>
          <div class="container">
            <div className="item" data-order="1"></div>
            <div className="item" data-order="2"></div>
            <div className="item" data-order="3"></div>
            <div className="item" data-order="4"></div>
            <div className="item" data-order="5"></div>
            <div className="item" data-order="6"></div>
            <div className="item" data-order="7"></div>
          </div>
        </div>
        {/* button */}
        <div></div>
      </div>
    </div>
  )
}

export default Curtains
