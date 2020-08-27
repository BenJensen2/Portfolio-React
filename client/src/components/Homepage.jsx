import React from "react";
import '../styles/homepage.css'
import Portrait from '../images/portrait.jpg'
import Resume from '../images/thumbnails/resume.png'

const Homepage = (props) => {
  return (
    <div className="Home">
      <h1>Hi I'm Ben</h1>
      <div className="resume highlights">
        <a href="/projects">
          <img className="thumbnail" src={Resume} alt=""/>
        </a>
        Resume
      </div>
      <div className="Jumbo">
        <img className="portrait" src={Portrait} alt="" />
      </div>
    </div>
  )
}

export default Homepage;