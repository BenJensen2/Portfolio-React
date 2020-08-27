import React from "react";
import '../styles/homepage.css'
import Portrait from '../images/portrait.jpg'

const Homepage = (props) => {
  return (
    <div className="Home">
    <div className="Jumbo">
      <img className="portrait" src={Portrait} alt=""/>
    </div>
    </div>
  )
}

export default Homepage;