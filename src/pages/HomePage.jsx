import React from 'react'
import FirstSection from '../components/FirstSection'
import FloatingBox from '../components/FloatingBox'
import SecondSection from '../components/SecondSection'
import Curtains from '../components/Curtains'

const HomePage = () => {
  return (
    <div className='relative'>
      <FirstSection/>
      <FloatingBox/>
      <SecondSection index={0} height={40} width={270} isSecondButton={true}/>
      <Curtains/>
    </div>
  )
}

export default HomePage
