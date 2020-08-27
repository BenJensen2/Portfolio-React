import React from 'react';
import Resume from '../documents/Resume.png'
import Github_Logo from '../images/github.png'
import Adobe_Logo from '../images/adobe.png'
import '../styles/projects.css'

const Projects = (props) => {

  return (
    <div>
      <div className="main_content">
        {/* <div className="full_stack">
          <h1>Full Stack Projects</h1>
        </div> */}
        <div className="html_css">
          <h1>HTML & CSS Projects</h1>
          <div className="project">
            <div className="project_scroll">
              <img className="project_pic" src={Resume} alt="" />
            </div>
            <div className="links">
              <a href="">
                <img className="link_logo" src={Adobe_Logo} alt="" />
              </a>
              <a href="https://github.com/BenJensen2/Resume">
                <img className="link_logo" src={Github_Logo} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="mini_projects">
          <h2>Mini Projects: Full Stack & below</h2>
          <div className="stacks">
            <div className="python">
              <h4>Python/Django</h4>
              <div className="python_projects">
                <div className="card">Dojo Reads</div>
                <div className="card">Books & Authors</div>
                <div className="card">Users & Bank Accounts</div>
                <div className="card">Ninja Gold</div>
                <div className="card">Login & Registration</div>
                <div className="card">Time Display</div>
                <div className="card">TV Shows</div>
                <div className="card">Dojo Survey</div>
              </div>
            </div>
            <div className="cSharp">
              <h4>C#/ASP.NET</h4>
              <div className="cSharp_projects">
                <div className="card">Wedding Planner</div>
                <div className="card">Bank Accounts</div>
                <div className="card">CRUDelicious</div>
                <div className="card">Chefs N Dishes</div>
                <div className="card">Login & Registration</div>
                <div className="card">Hungry Ninja</div>
                <div className="card">Dojodachi</div>
                <div className="card">Form Submission</div>
              </div>
            </div>
            <div className="mern">
              <h4>MERN</h4>
              <p className="mern_tech">(MongoDB, Express, React.js, Node.js)</p>
              <div className="mern_projects">
                <div className="card">Authors</div>
                <div className="card">Faker API</div>
                <div className="card">ToDo List</div>
                <div className="card">Tabs</div>
                <div className="card">Routing</div>
                <div className="card">Pokemon</div>
                <div className="card">Hooks</div>
                <div className="card">Boxes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <div className="resource_links">
            <div className="card">
              <a href="https://github.com/BenJensen2/Algos">
                Algorithms
              <img className="link_logo" src={Github_Logo} alt="" />
              </a>
            </div>
            <div className="card">
              <a href="https://github.com/BenJensen2/Reference">
                Reference Code
              <img className="link_logo" src={Github_Logo} alt="" />
              </a>
            </div>
            <div className="card">
              <a href="https://github.com/BenJensen2/Study">
                Study Materials
              <img className="link_logo" src={Github_Logo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects