import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
     <a href="#" className='footer_logo'>Deepak</a> 
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_social">
      <a href="https://facebook.com" target = "_blank"><AiFillFacebook/></a>
      <a href="https://instagram.com" target = "_blank"><FaInstagramSquare/></a>
      <a href="https://twitter.com" target = "_blank"><FaTwitterSquare/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Deepak. All right reserved.</small>
    </div>
    </footer>
  )
}

export default Footer
