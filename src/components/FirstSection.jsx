import React from 'react'
import Banner from '../assets/banner.mp4'
import { useTypewriter } from 'react-simple-typewriter'
import { BsArrowRight } from 'react-icons/bs'
const FirstSection = () => {

    const [text] = useTypewriter({
        words: ['PRACTICAL', 'AFFORDABLE', 'EASY'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <div className='w-[100%] h-[100vh] overflow-y-hidden overflow-x-hidden bg-[#F5F5F4]'>
            <div className='w-11/12 mx-auto h-[100%] flex flex-row items-center justify-between '>
                <div className='flex flex-col items-left justify-center h-[100%] max-w-[45%] text-blue-400'>
                    <p className='font-bold flex bg-clip-text text-blue-rgba px-[15px] text-4xl items-center'>
                        Upskilling Made<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#f67f23] to-[#f2921b] ml-[12px] '>{`{ ${text} }`}</span>
                    </p>
                    <p className='font-bold mt-2 bg-clip-text text-black px-[15px] text-3xl'>With CodeVita Skills</p>
                    <p className='ml-4 mt-7 mb-3 text-lg text-black'>CodeVita is your one-stop-shop for upscaling. Get maximum value for time
                        and resources you invest, with job-ready courses & high-technology,
                        available at the lowest cost.
                    </p>
                    <div>
                        <button className={`text-white font-semibold text-[18px] rounded-md w-[250px] h-[38px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
                            <div>Explore More</div>
                            <BsArrowRight size={24} />
                        </button>
                    </div>
                </div>
                <div className='w-[800px] h-[600px] flex items-center' >
                    <video muted loop autoPlay className='rounded-md shadow-[10.0px_14.0px_10.0px_rgba(0,0,0,0.38)]'> <source src={Banner} type='video/mp4' /></video>
                </div>

            </div>
        </div>
    )
}

export default FirstSection
