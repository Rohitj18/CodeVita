import React from 'react'
import CoursesFirstSection from '../components/utilityComponents/CoursesFirstSection'
import SecondSection from '../components/Sections/SecondSection'
import SkillBreweryForm from '../components/SkillbreweryComponents/SkillBreweryForm'
import SkillbreweryVideoSection from '../components/SkillbreweryComponents/SkillbreweryVideoSection'

const SkillsBrewry = () => {
  return (
    <div className='relative'>
      <CoursesFirstSection index={0} width1={230} width2={200} width3={250}/>
      <SecondSection index={1} height={40} width={270} isSecondButton={false} imgwidth={370}/>
      <SkillBreweryForm/>
      <SkillbreweryVideoSection/>
    </div>
  )
}

export default SkillsBrewry
