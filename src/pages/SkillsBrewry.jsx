import React from 'react'
import CoursesFirstSection from '../components/utilityComponents/CoursesFirstSection'
import SecondSection from '../components/SecondSection'

const SkillsBrewry = () => {
  return (
    <div className='relative'>
      <CoursesFirstSection index={0} width1={200} width2={340} width3={280}/>
      <SecondSection index={1} height={40} width={270} isSecondButton={false} imgwidth={370}/>
    </div>
  )
}

export default SkillsBrewry
