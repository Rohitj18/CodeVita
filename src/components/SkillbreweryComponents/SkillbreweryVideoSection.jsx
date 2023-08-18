import React from 'react'

const SkillbreweryVideoSection = () => {
  return (
    <div className=''>
      <div>
        <div className='font-semibold text-4xl text-center text-blue-rgba py-[15px]'>
        Checkout What Our Ex Interns Have To Say
        </div>

        <div className='w-[100%] flex flex-row justify-center items-center gap-10 py-5'>

            <div className=' w-[40%] h-[350px]'>

            <iframe className='w-[100%] h-[100%]'  
                    src="https://www.youtube.com/embed/il_t1WVLNxk">
            </iframe>
            </div>

            <div className=' w-[40%] h-[350px]'>
            <iframe  className='w-[100%] h-[100%]'  
                    src="https://www.youtube.com/embed/il_t1WVLNxk">
            </iframe>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SkillbreweryVideoSection
