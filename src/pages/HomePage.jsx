import React from 'react'
import FirstSection from '../components/HomeComponents/FirstSection'
import FloatingBox from '../components/HomeComponents/FloatingBox'
import SecondSection from '../components/Sections/SecondSection'
import Curtains from '../components/HomeComponents/Curtains'
import CardsSection from '../components/HomeComponents/CardsSection'
import HomePlacement from '../components/HomeComponents/HomePlacement'

const HomePage = () => {
  return (
    <div className='relative'>
      <FirstSection/>
      <FloatingBox/>
      <div className='w-[100%] h-[140px]'></div>
      <SecondSection index={0} height={40} width={270} isSecondButton={false} imgheight={300} imgwidth={450}/>
      <Curtains/>
      <CardsSection/>
      <HomePlacement/>
    </div>
  )
}

export default HomePage
