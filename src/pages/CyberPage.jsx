import React from 'react'
import CoursesFirstSection from '../components/utilityComponents/CoursesFirstSection'
import SecondSection from '../components/SecondSection'
import Form from '../components/utilityComponents/Form'
import cybergif from '../assets/cyberbanner.jpg'
const CyberPage = () => {
  return (
    <div>
      <CoursesFirstSection index={2}  width1={250} width2={250} width3={250}/>
      <SecondSection index={3} height={40} width={270} isSecondButton={false} imgheight={300} imgwidth={500}/>
      <img src={cybergif} alt="" className='w-[100%] h-[380px]'/>
      <Form/>
    </div>
  )
}

export default CyberPage
