import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {GrContact} from "react-icons/gr"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : " "}>< AiOutlineHome/></a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about ' ? 'active' : " "}>< AiOutlineUser/></a>
    <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience ' ? 'active' : " "}>< BsBook/></a>
    <a href='#services'>< RiServiceLine/></a>
    <a href='#contact'>< GrContact/></a> 
   </nav>
  )
}

export default Nav