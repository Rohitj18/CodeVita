import React, { useState } from 'react'
import './Nav.css';
// import { NavLink, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'



function Nav() {

  let titleArr = ["Code Vita Live","Skill-Brewery","Data Science FastTrack","Cybersecutiry Evangelist Live","Terms & Conditions"];
  let routesArr = ["","skillbrewry","datascience","cybersecurity","tc"];
  const [index,setIndex] = useState(0);

  const clickHandler = (event)=>{
    let temp = Number(event.target.getAttribute('data-id'));
    setIndex(temp);
  }

  return (
    
    <div className="nav-bar absolute w-[100%] z-10">
    
       <div className="logo flex flex-row justify-between items-center gap-2">
        <BsSearch color='black'/>
        <NavLink style={{ textDecoration: 'none' }} to={`/${routesArr[index]}`}>{titleArr[index]}</NavLink>
       </div>

      <nav>
        <ul className='nav-tabs' >
          <li className='nav-link'>
            <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/skillbrewry" onClick={clickHandler}>Skill-Brewery</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink data-id="2" style={{ textDecoration: 'none' }} to="/datascience" onClick={clickHandler}>Data Science Fast Track</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink data-id="3" style={{ textDecoration: 'none', }} to="/cybersecurity" onClick={clickHandler}>Cyber Security Evangelist Live</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink data-id="4" style={{ textDecoration: 'none' }} to="/tc" onClick={clickHandler}>Terms and Condition</NavLink>
          </li>
        </ul>
      </nav>

      <div className="home flex items-center justify-center w-[80px] h-[30px] p-[10px] rounded-md bg-gradient-to-br from-[#f67f23] to-[#f2921b]">
        <NavLink data-id="0"  style={{ textDecoration: 'none' }} to="/" onClick={clickHandler}>Home</NavLink>
      
      </div>
      

    </div>
    
  )
}

export default Nav