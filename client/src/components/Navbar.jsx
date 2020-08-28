import React, { useState, useEffect } from 'react';
// import Logo from '../images/logo.jpg'
import LinkedIn_Logo from '../images/linkedin.png'
import Github_Logo from '../images/github3.png'
import Email_Logo from '../images/email2.png'
import '../styles/nav.css'


const Navbar = (props) => {

  const [absoluteClass, setAbsoluteClass] = useState('absolute')
  const [navSideBarClass, setNavSideBarClass] = useState('navbar_side')

  const reportWindowSize = () => {
    let windowWidth = document.documentElement.clientWidth
    if (windowWidth>768){
      setNavSideBarClass('navbar_side')

    }
  }
  window.onresize = reportWindowSize;

  const toggleHandler = (e) => {
    if (absoluteClass == 'absolute') {
      setAbsoluteClass('absolute_show')
    }
    else { setAbsoluteClass('absolute') }
    if (navSideBarClass == 'navbar_side') {
      setNavSideBarClass('navbar_side_show')
    }
    else { setNavSideBarClass('navbar_side') }
  }

  return (
    <nav>
      <div className="navbar_top">
        <div className="nav_items nav_left">
          <div className="nav_link">
            <a href="/">
              {/* <img className="name_logo" src={Logo} alt="Logo" /> */}
            </a>
          </div>
          <a id="nav_toggle" href="#" onClick={toggleHandler}>&#9776;</a>
          <div className="nav_link">
            <a id="home_Link" href="/">Home</a>
          </div>
          <div className="nav_link">
            <a id="projects_Link" href="/projects">Projects</a>
          </div>
          <div className="nav_link">
            <a href="/management">Management</a>
          </div>
          <div className="nav_link">
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
      </div>
      <div className={navSideBarClass}>
        <div className="nav_items">
          <div className="nav_link">
            <a id="home_Link" href="/">Home</a>
          </div>
          <div className="nav_link">
            <a id="projects_Link" href="/projects">Projects</a>
          </div>
          <div className="nav_link">
            <a href="/management">Management</a>
          </div>
          <div className="nav_link">
            <a href="/resources">Resources</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;