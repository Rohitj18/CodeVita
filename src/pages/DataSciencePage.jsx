import React from 'react'
import CoursesFirstSection from '../components/utilityComponents/CoursesFirstSection'
import SecondSection from '../components/SecondSection'
import Form from '../components/utilityComponents/Form'
import datasciencegif from '../assets/datasciencegif.gif'

const DataSciencePage = () => {
  return (
    <div className='relative'>
      <CoursesFirstSection index={1}  width1={280} width2={100} width3={360}/>
      <SecondSection index={2} height={40} width={270} isSecondButton={false} imgheight={400} imgwidth={450}/>
      <img src={datasciencegif} alt="" />
      <Form/>
    </div>
  )
}

export default DataSciencePage
