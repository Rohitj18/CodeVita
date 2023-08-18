import React from 'react'
import tncimg from '../assets/terms-and-conditions.jpg'
import SecondSection from '../components/SecondSection'
import TnCsection from '../components/TnCsection'

const TandC = () => {
  return (
    <div className='relative bg-[#f7f7f7]'>
      <div>
        <div className='bg-[#f7f7f7]'>
          <img src={tncimg} alt="" className='h-[600px]'/>
          <SecondSection index={4} height={40} width={270} isSecondButton={false} imgwidth={370}/>
        </div>
          <TnCsection/>
      </div>
    </div>
  )
}

export default TandC
