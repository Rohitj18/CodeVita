import React from 'react'
import {tncdata} from '../Data/tncdata'

const TnCsection = () => {
  return (
    <div>
      <div className='w-11/12 h-[100%] flex flex-col mx-auto gap-3 bg-[#f7f7f7]'>
        {
            tncdata.map((data) => (
              <div>
                <p className='text-black text-bold'>{data.heading}</p>
                <p className='text-black '>{data.desc}</p>
              </div>  
            ))
        }
      </div>
    </div>
  )
}

export default TnCsection
