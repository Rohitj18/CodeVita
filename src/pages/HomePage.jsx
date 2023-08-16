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
      <div className='w-[100%] h-[140px]'></div>
      <SecondSection index={0} height={40} width={270} isSecondButton={false} imgheight={470} imgwidth={450}/>
      <Curtains/>
    </div>
  )
}

export default HomePage
