import React, { useState } from 'react';
// import Logo from '../images/logo.jpg'
import LinkedIn_Logo from '../images/linkedin.png'
import Github_Logo from '../images/github3.png'
import Email_Logo from '../images/email2.png'
import '../styles/nav.css'


const Navbar = (props) => {

  const [navLinkClass, setNavLinkClass] = useState('nav_link')

  const toggleHandler = (e) => {
    console.log("Toggle Clicked")
    if (navLinkClass == 'nav_link') {
      setNavLinkClass('nav_link_show')
    }
    else { setNavLinkClass('nav_link') }
  }

  return (
    <nav className="navbar">
      <div className="nav_items nav_left">
        <div className="nav_link">
          <a href="/">
            {/* <img className="name_logo" src={Logo} alt="Logo" /> */}
          </a>
        </div>

        <a id="nav_toggle" href="#" onClick={toggleHandler}>&#9776;</a>

        <div className={navLinkClass}>
          <a id="projects_Link" href="/projects">Projects</a>
        </div>
        <div className={navLinkClass}>
          <a href="/management">Management</a>
        </div>
        <div className={navLinkClass}>
          <a href="/resources">Resources</a>
        </div>
      </div>
      <div className="nav_items nav_right contact">
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
    </nav>
  )
}

export default Navbar;