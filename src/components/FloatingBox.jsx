import React from 'react'
import icon1 from '../assets/boxicon1.svg'
import icon2 from '../assets/boxicon2-9658.svg'
import icon3 from '../assets/boxicon3.svg'

const FloatingBox = () => {
  return (
    <div className='absolute left-[20%] top-[680px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-10px] z-10'>
      <div className='flex flex-col w-[965px] h-[240px] bg-[#1b2265] rounded-lg p-[32px] items-center'>
        {/* box 1 */}
        <div className=''>
            <p className='text-white font-bold text-2xl text-center'>If you have the courage and the commitment to learn coding, then CodeVita will empower you.</p>
        </div>

        {/* box 2 */}
        <div className='pt-[16px] pb-[24px]'>
            <p className='text-white text-lg'>NO MATTER WHAT IT TAKES!</p>
        </div>

        {/* box 3 */}
        <div className='flex flex-row'>
            <div className='flex flex-row justify-between items-center'>
                <img src={icon1} alt="" className='w-[40px] h-[40px] mr-3'/>
                <p>Content designed by IIT & Stanford alumni</p>
            </div>
            <div className='flex flex-row justify-between items-center px-[32px]'>
                <img src={icon2} alt="" className='w-[40px] h-[40px] mr-3'/>
                <p>Instant 1:1 doubt resolution</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <img src={icon3} alt="" className='w-[40px] h-[40px] mr-3'/>
                <p>Practical learning with 100+ problems & 10+ projects in each course</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default FloatingBox
