import React from "react";
import {Router} from '@reach/router'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Projects from './Projects'
import Management from './Management'
import Resources from './Resources'

const Main = (props) => {
  return (
    <div className="Main">
      <Navbar/>
      <Router>
        <Homepage path="/"/>
        <Projects path="/projects"/>
        <Management path="/management"/>
        <Resources path="/resources"/>
      </Router>
    </div>
  )
}

export default Main;