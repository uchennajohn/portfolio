import React from 'react'
import './footer.css'
import {AiFillFacebook} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {BsTwitter} from "react-icons/bs"


const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo'>Uchenna</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#contact'>Contact</a></li>
      <li><a href='portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
    </ul>
    <div className='footer_socials'>
      <a href='https://facebook.com'><AiFillFacebook/></a>
      <a href='https://instagram.com'><FiInstagram/></a>
      <a href='https://twitter.com'><BsTwitter/></a>
    </div>
    <div className='footer__copyright'>
      <small>&copy; Uchenna All Rights Reserved.</small>
    </div>
   </footer>
  )
}

export default Footer