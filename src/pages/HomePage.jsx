import React from 'react'
import FirstSection from '../components/FirstSection'
import FloatingBox from '../components/FloatingBox'
import SecondSection from '../components/SecondSection'
import Curtains from '../components/Curtains'
import CardsSection from '../components/CardsSection'

const HomePage = () => {
  return (
    <div className='relative'>
      <FirstSection/>
      <FloatingBox/>
      <div className='w-[100%] h-[140px]'></div>
      <SecondSection index={0} height={40} width={270} isSecondButton={false} imgheight={300} imgwidth={450}/>
      <Curtains/>
      <CardsSection/>
    </div>
  )
}

export default HomePage
