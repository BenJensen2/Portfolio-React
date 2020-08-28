import React, { useState } from 'react';
// import Logo from '../images/logo.jpg'
import LinkedIn_Logo from '../images/linkedin.png'
import Github_Logo from '../images/github3.png'
import Email_Logo from '../images/email2.png'
import '../styles/nav.css'


const Navbar = (props) => {

  const [navLinkClass, setNavLinkClass] = useState('nav_link')
  const [absoluteClass, setAbsoluteClass] = useState('absolute')
  const [navSideBarClass, setNavSideBarClass] = useState('navbar_side')

  const toggleHandler = (e) => {
    // console.log("Toggle Clicked")
    // if (navTopLinkClass == 'nav_link') {
    //   setNavTopLinkClass('nav_link_show')
    // }
    // else { setNavTopLinkClass('nav_link') }
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
      </div>
      <div className={navSideBarClass}>
        <div className="nav_items">
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