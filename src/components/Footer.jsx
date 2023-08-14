import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css';

import {IoLocationSharp} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'




function Footer() {
  return (
    <div>
      
      <div className="container">
        <div className="sub-container">
            <div className="box box1">
                <p className="heading ">Get In Touch</p>
                <p className="foot-text"> <span> <IoLocationSharp/> </span> Nyati Estate Road,Pune-60,Maharashtra,India</p>
                <p className="foot-text"> <span className='grmail' > <GrMail/> </span> studentconnect@codevita.live</p>
                <div className="social-media-icons">
             
                 <div className="icon">
                 <NavLink className="footer-linK" style={{ textDecoration: 'none',color:"#ffffff", }} to="https://www.facebook.com/codevitalive"><BsFacebook/></NavLink>
                 </div>
                
                <div className="icon">
                <NavLink className="footer-linK" style={{ textDecoration: 'none',color:"#ffffff" }} to="https://www.youtube.com/channel/UCi2AzaYuWFF5doDCoT2iWvA/featured"><FaYoutube/></NavLink>
                </div>
                <div className="icon">
                <NavLink  className="footer-linK"style={{ textDecoration: 'none',color:"#ffffff" }} to="https://www.instagram.com/codevitalive/"><FaInstagram/></NavLink>
                </div>
                <div className="icon"><NavLink className="footer-linK" style={{ textDecoration: 'none',color:"#ffffff" }} to="linkedin.com/school/codevita-live/"><FaLinkedin/></NavLink></div>
      
                
                
                

             
              

             
                </div>
            </div>
            
            <div className="box">
                <p className="heading link-heading">Popular Links</p>
                <nav>
                    <ul className='nav-tabs' >
                    <li className='footer-link footer-links' >
                        <NavLink style={{ textDecoration: 'none' , color:"#ffffff"}} to="/sb"> &gt; Home</NavLink>
                    </li>
                    <li className='footer-link footer-links '>
                        <NavLink  style={{ textDecoration: 'none',color:"#ffffff" }} to="/dsf"> &gt; Skill-Bewery</NavLink>
                    </li>
                    <li className='footer-link footer-links' >
                        <NavLink style={{ textDecoration: 'none',color:"#ffffff" }} to="/csfl">&gt; DSF</NavLink>
                    </li>
                    <li className='footer-link  footer-links'>
                        <NavLink style={{ textDecoration: 'none',color:"#ffffff" }} to="/tc">&gt; CEL</NavLink>
                    </li>
                    </ul>
                </nav>
            </div>

            <div className="box foot-font">
                    Never stop learning, because life never stops teaching!
            </div>

        </div>
      </div>
      <div className="copyright text-black">
      © Codevita Live, All Right Reserved. 
      </div>
    </div>
  )
}

export default Footer

