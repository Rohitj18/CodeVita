import React from 'react'
import './Nav.css';
// import { NavLink, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'



function Nav() {
  return (
    
    <div className="nav-bar absolute w-[100%] z-10">
    
       <div className="logo flex flex-row justify-between items-center gap-2">
        <BsSearch color='black'/>
        <NavLink style={{ textDecoration: 'none' }} to="/" >Code Vita Live</NavLink>
       </div>

      <nav>
        <ul className='nav-tabs' >
          <li className='nav-link'>
            <NavLink style={{ textDecoration: 'none' }} to="/skillbrewry">Skill-Brewery</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink style={{ textDecoration: 'none' }} to="/datascience">Data Science Fast Track</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink style={{ textDecoration: 'none', }} to="/cybersecurity">Cyber Security Evangelist Live</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink style={{ textDecoration: 'none' }} to="/tc">Terms and Condition</NavLink>
          </li>
        </ul>
      </nav>

      <div className="home flex items-center justify-center w-[80px] h-[30px] p-[10px] rounded-md bg-gradient-to-br from-[#f67f23] to-[#f2921b]">
        <NavLink style={{ textDecoration: 'none' }} to="/" >Home</NavLink>
      
      </div>
      

    </div>
    
  )
}

export default Nav