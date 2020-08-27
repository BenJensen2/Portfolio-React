import React from 'react';
import Logo from '../images/logo.jpg'
import LinkedIn_Logo from '../images/linkedin.png'
import Github_Logo from '../images/github3.png'
import Email_Logo from '../images/email2.png'
import '../styles/navbar.css'


const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navleft">
        <a href="/">
          <img className="name_logo" src={Logo} alt="Logo" />
        </a>
        {/* <p className="name">Ben Jensen</p> */}
        <a id="projects_Link" href="/projects">Projects</a>
        <a href="/management">Management</a>
        <a href="/resources">Resources</a>
      </div>
      <div className="contact">
        <a href="https://www.linkedin.com/in/ben-jensen-68b62940/">
          <img className="contact_logo" src={LinkedIn_Logo} alt="Logo" />
        </a>
        <a href="https://github.com/BenJensen2">
          <img className="contact_logo" src={Github_Logo} alt="Logo" />
        </a>
        <a href="Email">
          <img className="contact_logo" src={Email_Logo} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Navbar;