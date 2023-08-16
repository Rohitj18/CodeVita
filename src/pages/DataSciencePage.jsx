import React from 'react'
import FirstSection from '../components/FirstSection'
import CoursesFirstSection from '../components/utilityComponents/CoursesFirstSection'
import SecondSection from '../components/SecondSection'

const DataSciencePage = () => {
  return (
    <div className='relative'>
      <CoursesFirstSection index={1}  width1={280} width2={180} width3={360}/>
      <SecondSection index={2} height={40} width={270} isSecondButton={false} imgheight={400} imgwidth={450}/>
    </div>
  )
}

export default DataSciencePage
