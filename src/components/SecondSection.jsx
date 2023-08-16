import React from 'react';
import check from '../assets/check.svg';
import { textDetails } from '../Data/text';
import img0 from '../assets/image0.jpg'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.gif'
import img3 from '../assets/image3.webp'
import { BsArrowRight } from 'react-icons/bs';
import { text } from '@fortawesome/fontawesome-svg-core';


const SecondSection = ({ index, isSecondButton, height, width,imgheight,imgwidth }) => {
    const imageArr = [img0, img1, img2, img3];
    console.log(textDetails[0].heading)
    return (
        <div className='w-[100%] h-[60vh] mt-[80px] mb-[60px]'>
            <div className=' w-11/12 flex flex-row justify-between mx-auto'>
                {/* left section */}
                <div className='max-w-[50%] w-[50%] flex flex-col'>
                    <div className='mx-auto px-[80px]'>
                        <p className='text-bold text-3xl text-black'>{textDetails[index]?.heading}</p>
                    </div>
                    {/* black line and dot */}
                    <div className='max-auto pl-[80px] flex flex-row gap-2 mt-[20px] mb-[24px]'>
                        <div className='bg-black w-[53px] h-[4px]'></div>
                        <div className='bg-black w-[4px] h-[4px]'></div>
                    </div>
                    <div className='pl-[80px] mb-[35px]'>
                        <p className='text-black'>{textDetails[index]?.subHeading}</p>
                    </div>
                    <div className='pl-[80px] flex flex-row items-center justify-center'>
                        {/* left check box */}
                        <div className='flex flex-col justify-start max-w-[50%] w-[50%] gap-3'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div><img src={check} alt="" className='w-[30px] h-[30px]' /></div>
                                <p className='text-black text-lg'>{textDetails[index]?.points[0]}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div><img src={check} alt="" className='w-[30px] h-[30px]' /></div>
                                <p className='text-black text-lg'>{textDetails[index]?.points[1]}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div><img src={check} alt="" className='w-[30px] h-[30px]' /></div>
                                <p className='text-black text-lg'>{textDetails[index]?.points[2]}</p>
                            </div>

                        </div>
                        {/* right check box */}
                        <div className='flex flex-col justify-start max-w-[50%] w-[50%] gap-3'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div><img src={check} alt="" className='w-[30px] h-[30px]' /></div>
                                <p className='text-black text-lg'>{textDetails[index]?.points[3]}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div><img src={check} alt="" className='w-[30px] h-[30px]' /></div>
                                <p className='text-black text-lg'>{textDetails[index]?.points[4]}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div><img src={check} alt="" className='w-[30px] h-[30px]' /></div>
                                <p className='text-black text-lg'>{textDetails[index]?.points[5]}</p>
                            </div>

                        </div>
                    </div>

                    <div className='ml-[75px] flex flex-row gap-[95px]'>
                        <div>
                            <button className={`text-white font-semibold text-[18px] rounded-md w-[${width}px] h-[${height}px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
                                <div>{textDetails[index]?.buttonText}</div>
                                <BsArrowRight size={24} />
                            </button>
                        </div>
                        {
                            isSecondButton ? (
                                <button className={`text-white font-semibold text-[18px] rounded-md w-[200px] h-[35px] bg-gradient-to-r hover:bg-gradient-to-l from-[#f96c23] to-[#fe8f01] mt-10 ml-3 shadow-2xl flex flex-row gap-3 items-center px-[14px] justify-center`}>
                                    <div>{textDetails[index]?.buttonText2}</div>
                                <BsArrowRight size={24} />
                            </button>
                            ) : ("")
                        }
                    </div>
                </div>
                {/* right section */}
                <div className='max-w-[50%] w-[50%] flex pl-[130px]'>
                    <img src={imageArr[index]} alt="" className={`w-[${imgwidth}px] h-[${imgheight}px]`} />
                </div>
            </div>

        </div>
    )
}

export default SecondSection;
