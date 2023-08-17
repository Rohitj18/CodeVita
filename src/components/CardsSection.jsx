import React from 'react'
import homeimg from '../assets/homeimg-removebg-preview.png'
import './CardsSection.css'
const CardsSection = () => {
    return (
        <div className='w-[100%] h-fit mx-auto transition-all '>
            <div className='w-[80.7%] mx-auto flex justify-center items-center text-[#4372F4] text-lg text-bold mt-6'>Our Offerings</div>
            <div className='w-[80.7%] flex items-center justify-center mx-auto text-4xl text-bold text-black pt-[5px]'>Programs Currently Open For Enrollment:</div>
            <div className='w-[80.7%] mx-auto  flex flex-row gap-2 mt-[18px] mb-[24px] justify-center'>
                        <div className='bg-black w-[53px] h-[4px]'></div>
                        <div className='bg-black w-[4px] h-[4px]'></div>
            </div>
            <div className='w-[80.7%] flex flex-row items-center justify-between gap-3 mx-auto'>
                {/* box 1 */}
                <div className='bg-off-white flex flex-col gap-4 justify-center items-center w-[383px] h-[370px] px-[25px] py-[30px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-[1.1] transition duration-300 ease-in'>
                    <div className='flex justify-center items-center'>
                        <img src={homeimg} alt="" className='w-[80px] h-[80px]' />
                    </div>
                    <div className='text-center text-black text-bold text-xl'>
                        Skill-Brewery
                    </div>
                    <div className='text-black text-center'>
                        Skill Brewery, is Codevita Live’s premium free Internship cum training program intended for college students.Work on cool hands-on projects to amplify your profile and perform peer reviews of your co-interns.
                    </div>
                    
                    <div className=" mt-[10px] btn-pink w-[50%] h-[40px] text-center flex justify-center items-center text-white text-semibold">Apply Now</div>
                    
                </div>
                {/* box 2 */}
                <div className='bg-off-white flex flex-col gap-4 justify-center items-center w-[383px] h-[370px] px-[25px] py-[30px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-[1.1] transition duration-300 ease-in'>
                    <div className='flex justify-center items-center'>
                        <img src={homeimg} alt="" className='w-[80px] h-[80px]' />
                    </div>
                    <div className='text-center text-black text-bold text-xl'>
                        Data Science FastTrack
                    </div>
                    <div className='text-black text-center'>
                        Learn the intricacies of data science and machine learning including data visualization, wrangling, clustering, algorithms and a lot more in 6 months and supercharge your resume with up to 10 capstone projects!
                    </div>
                    <div className=" mt-[10px] btn-pink w-[50%] h-[40px] text-center flex justify-center items-center text-white text-semibold">Apply Now</div>
                </div>
                {/* box 3 */}
                <div className='bg-off-white flex flex-col gap-4 justify-center items-center w-[383px] h-[370px] px-[25px] py-[30px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-[1.1] transition duration-300 ease-in'>
                    <div className='flex justify-center items-center'>
                        <img src={homeimg} alt="" className='w-[80px] h-[80px]' />
                    </div>
                    <div className='text-center text-black text-bold text-xl'>
                        Cybesecurity Evangelist Live
                    </div>
                    <div className='text-black text-center gap-4'>
                        Take your cybersecurity skills from zero to hero with Codevita Live's Cybersecurity Evangelist course. Led by industry experts, you'll learn to identify vulnerabilities, secure networks, and protect against cyber threats
                    </div>
                    <div className=" mt-[10px] btn-pink w-[50%] h-[40px] text-center flex justify-center items-center text-white text-semibold">Apply Now</div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection
