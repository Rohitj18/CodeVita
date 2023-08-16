import React from "react";
import "./Curtains.css";
import { useState } from "react";
import googlelogo from '../assets/google.png'
import whitegirl from '../assets/white-girl.png'
import blackguy from '../assets/black-guy.png'
import whitegirl2 from '../assets/white-girl2.png'
import indianboy from '../assets/indian-boy.png'
import jpmorganlogo from '../assets/jp-morgan-chase.png'
import cnlogo from '../assets/cn-logo.png'
import alvaralogo from '../assets/avalaralogo.png'

const Curtains = () => {

  const [expandData, setExpandData] = useState({ "1": true, "2": false, "3": false, "4": false });

  const hoverHandler = (event) => {
    let newObj = { ...expandData };
    for (const key in newObj) {
      if (key == event.target.getAttribute('data-id')) {
        newObj[key] = true;
      } else {
        newObj[key] = false;
      }
    }
    setExpandData(newObj);
  }

  return (
    <div className="w-[100%] h-screen bg-[#f5f5f4] flex flex-col">
      <div className="w-[76%] h-screen mx-auto">
        {/* heading */}
        <div className="w-[100%] text-center text-black font-semibold text-3xl  py-[30px]">
          "Elevating Education, Empowering Futures: <span className="text-[#f96c23]">Your Journey Starts Here!</span>"
        </div>
        {/* curtains */}
        <div className={`w-[100%] h-[500px] flex flex-row items-stretch mt-[-45px] rounded-md`}>
          <div class="container rounded-md ">
            {/* box1 */}
            <div data-id="1" onMouseEnter={hoverHandler} className={`relative group box box1 rounded-tl-md rounded-bl-md bg-[#7533b7] z-0 ${expandData["1"] === true ? "box-expand" : ""}`}>
              {/* heading */}
              <div data-id="1" onMouseEnter={hoverHandler} className="group-hover max-w-[282px] max-h-[84px] text-bold  py-[42px] text-3xl mb-[42px] px-[32px]">
                CS novice to Google
              </div>
              <div data-id="1" onMouseEnter={hoverHandler} className="group-hover hidden-class">

                {/* lower section */}
                <div data-id="1" onMouseEnter={hoverHandler} className="max-w-[368px] px-[32px] max-h-[254px]">
                  {/* up */}
                  <div data-id="1" onMouseEnter={hoverHandler} className="mb-[24px] mt-[20px]">
                    Despite being from a tier 3 college, I would like to thank my mentors & teachers at CodeVita who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.
                  </div>
                  {/* down */}
                  <div data-id="1" onMouseEnter={hoverHandler}>
                    <p data-id="1" onMouseEnter={hoverHandler}>Ariana Fisherman</p>
                    <p data-id="1" onMouseEnter={hoverHandler}>Software Engineer</p>
                    <div className="w-[84px] h-[44px] mt-3">
                      <img src={googlelogo} alt="" className="w-[100%] h-[100%]" />
                    </div>
                  </div>
                </div>

              </div>
              <div data-id="1" onMouseEnter={hoverHandler} className="absolute w-[300px] h-[240px] right-[-60px] bottom-0">
                <img data-id="1" onMouseEnter={hoverHandler} src={whitegirl} alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
            {/* box2 */}
            <div data-id="2" onMouseEnter={hoverHandler} className={`box box1 bg-[#421d68] ${expandData["2"] === true ? "box-expand" : ""}`}>
              {/* heading */}
              <div data-id="2" onMouseEnter={hoverHandler} className="group-hover max-w-[340px] max-h-[84px] text-bold  py-[42px] text-3xl mb-[42px] px-[32px]">
                College dropout to a package of 10 LPA
              </div>
              <div data-id="2" onMouseEnter={hoverHandler} className="group-hover hidden-class">

                {/* lower section */}
                <div className="max-w-[360px] px-[32px] max-h-[254px]">
                  {/* up */}
                  <div data-id="2" onMouseEnter={hoverHandler} className="mb-[24px] mt-[50px]">
                    The experience and knowledge I learned at CodeVita greatly sharpened my skills and allowed me to pass the technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.
                  </div>
                  {/* down */}
                  <div data-id="2" onMouseEnter={hoverHandler}>
                    <p data-id="2" onMouseEnter={hoverHandler}>Ashly Baker</p>
                    <p data-id="2" onMouseEnter={hoverHandler}>Quant Analyst</p>
                    <div className="w-[80px] h-[44px] mt-3">
                      <img src={alvaralogo} alt="" className="w-[100%] h-[100%]" />
                    </div>
                  </div>
                </div>

              </div>
              <div data-id="2" onMouseEnter={hoverHandler} className="absolute w-[330px] h-[220px] right-[-50px] bottom-0">
                <img data-id="2" onMouseEnter={hoverHandler} src={whitegirl2} alt="" className="w-[100%] h-[100%]" />
              </div>

            </div>
            {/* box3 */}
            <div data-id="3" onMouseEnter={hoverHandler} className={`box box1 bg-[#2f154c] ${expandData["3"] === true ? "box-expand" : ""}`}>
              <div data-id="3" onMouseEnter={hoverHandler} className="group-hover max-w-[282px] max-h-[84px] text-bold  py-[42px] text-3xl mb-[42px] px-[32px]">
                Non-CS branch to Top Company
              </div>
              <div data-id="3" onMouseEnter={hoverHandler} className="group-hover hidden-class">
                {/* heading */}
                {/* lower section */}
                <div className="max-w-[368px] px-[32px] max-h-[254px]">
                  {/* up */}
                  <div data-id="3" onMouseEnter={hoverHandler} className="mb-[24px] mt-[50px]">
                    My experience with Coding Ninjas was wonderful. The courses strengthened my concepts and helped me in my interviews. The faculty was amazing. I would definitely recommend CodeVita.
                  </div>
                  {/* down */}
                  <div data-id="3" onMouseEnter={hoverHandler}>
                    <p data-id="3" onMouseEnter={hoverHandler}>Brandon kowolsky</p>
                    <p data-id="3" onMouseEnter={hoverHandler}>Software Engineer</p>
                    <div className="w-[84px] h-[44px] mt-3">
                      <img src={cnlogo} alt="" className="w-[100%] h-[100%]" />
                    </div>
                  </div>
                </div>

              </div>
              <div data-id="3" onMouseEnter={hoverHandler} className="absolute w-[230px] h-[230px] right-[-5px] bottom-0">
                <img data-id="3" onMouseEnter={hoverHandler} src={blackguy} alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
            {/* box 4 */}
            <div data-id="4" onMouseEnter={hoverHandler} className={`box box1 rounded-tr-md rounded-br-md bg-[#04439f] ${expandData["4"] === true ? "box-expand" : ""} `}>
              <div data-id="4" onMouseEnter={hoverHandler} className="group-hover max-w-[282px] max-h-[84px] text-bold  py-[42px] text-3xl mb-[42px] px-[32px]">
                Non Engineer to Investment Bank
              </div>
              <div data-id="4" onMouseEnter={hoverHandler} className="group-hover hidden-class">
                {/* heading */}
                {/* lower section */}
                <div className="max-w-[368px] px-[32px] max-h-[254px]">
                  {/* up */}
                  <div data-id="4" onMouseEnter={hoverHandler} className="mb-[24px] mt-[40px]">
                    CodeVita is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured.My approach towards solving a problem completely changed
                  </div>
                  {/* down */}
                  <div data-id="4" onMouseEnter={hoverHandler}>
                    <p data-id="4" onMouseEnter={hoverHandler}>Pareksha manchanda</p>
                    <p data-id="4" onMouseEnter={hoverHandler}>Software Engineer</p>
                    <div className="w-[84px] h-[44px] mt-3">
                      <img src={jpmorganlogo} alt="" className="w-[100%] h-[100%]" />
                    </div>
                  </div>
                </div>

              </div>
              <div data-id="4" onMouseEnter={hoverHandler} className="absolute w-[350px] h-[210px] right-[-80px] bottom-0">
                <img data-id="4" onMouseEnter={hoverHandler} src={indianboy} alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
          </div>
        </div>
        {/* button */}

      </div>
    </div>
  );
};

export default Curtains;
