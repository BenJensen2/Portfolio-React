import React from 'react';

const Resume = (props)=>{
  return(
    <div>
      <div className="portrait">
        <img src="Portrait2.jpg" alt="" />
      </div>
      {/* <div className="left">
        <h3 id="about_me" className="sidebar_header">ABOUT ME</h3>
        <div className="aboutMe">
          <p>
            I care about people. Whether that is developing for, building
            relationships with or helping through life, my heart is for others.
            Software development comes natural for me and I thoroughly enjoy
            developing elegant software solutions to help people with their daily lives.
            I am enthusiastic, open-minded and humble. If you hire me for a
            project or your company, rest assured I will build the team along
            with the software. I hope to hear from you with any interests. Enjoy
            the rest of my content!
          </p>
          <br />
          <p>- Ben</p>
        </div>
        <h3 className="sidebar_header">CONTACT</h3>
        <ul>
          <li className="contact_list">
            <img src="phone.jpg" alt="" />
            <span className="contact_text basic_text">
              920 619 3430
            </span>
          </li>
          <li className="contact_list">
            <img src="email.jpg" alt="" />
            <span className="contact_text basic_text">
              btjensen@mtu.edu
            </span>
          </li>
          <li className="contact_list contact_address_box">
            <div id="address">
              <img src="address.jpg" alt="" />
            </div>
            <div className="contact_text contact_address basic_text">
              508 Sea Cliff Way Oceanside, CA 92056
            </div>
          </li>
        </ul>
        <h3 className="sidebar_header">EDUCATION</h3>
        <div className="education">
          <div className="sub_content">
            <h4 className="sidebar_subheader">
              CODING DOJO <span className="dates"> (APR 2020 - AUG 2020) </span>
            </h4>
            <p className="basic_text">14 week Immersive</p>
            <p className="basic_text">Full Stack Software Development Program</p>
            <ul className="basic_text">
              <li className="circle_list">Python/Django/SQLite</li>
              <li className="circle_list">C#/ASP.NET/SQL</li>
              <li className="circle_list">Javascript/React/Express/Node/MongoDB</li>
              <li className="circle_list">HTML, CSS, JS</li>
            </ul>
            <br />
            <h4 className="sidebar_subheader">
              MICHIGAN TECHNOLOGICAL UNIVERSITY
              <span className="dates"> (SEP 2010 - MAY 2015) </span>
            </h4>
            <p className="basic_text">
              Bachelor's of Science - Mechanical Engineering - 3.83 GPA
            </p>
            <ul className="basic_text">
              <li className="circle_list">Matlab, Mathematica</li>
              <li className="circle_list">Catia, UGNX, Solidworks, ProE</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <hr />
          <br />
          <h1 className="header_name">BEN JENSEN</h1>
          <h3 className="header_title">FULL STACK SOFTWARE DEVELOPER</h3>
          <br />
          <hr />
        </div>
        <div className="content">
          <div className="main_content">
            <div className="skills">
              <div className="main_content_header_box">
                <h3 className="main_content_header">SKILLS</h3>
                <img className="main_content_pics" src="skills.jpg" alt="" />
              </div>
              <hr />
              <div className="sub_content">
                <h4 className="main_content_subheader">Programming Languages</h4>
                <p className="basic_text">
                  C#, Python, Javascript, SQL, Matlab, Visual Basic, HTML, CSS
                </p>
                <br />
                <h4 className="main_content_subheader">Technologies</h4>
                <p className="basic_text">
                  ASP.NET, Django, React, Mongoose, Express, MongoDB, NodeJS,
                  SQL server, AWS, Bootstrap, jQuery, VS Code, Postman
                </p>
                <br />
                <h4 className="main_content_subheader">Collaboration Tools</h4>
                <p className="basic_text">Azure Devops, Slack, Trello, Git</p>
              </div>
            </div>
            <div className="projects">
              <div className="main_content_header_box">
                <h3 className="main_content_header">PROJECTS</h3>
                <img className="main_content_pics" src="skills.jpg" alt="" />
              </div>
              <hr />
              <div className="sub_content">
                <h4 className="main_content_subheader">
                  Adventure SPA
                  <span className="technologies"
                    >(React, Axios, Express, NodeJS, Mongoose, MongoDB NoSQL,
                    HTML, CSS)</span
                  >
                </h4>
                <p className="basic_text">
                  Outdoor adventure dashboard with multiple types of activities
                </p>
                <ul>
                  <li className="circle_list">
                    API access of currently existing outdoor adventure
                    databases.
                  </li>
                  <li className="circle_list">
                    Centrally focused Mapbox to display all layers of data.
                  </li>
                  <li className="circle_list">
                    Activity weather data based upon map centerpoint.
                  </li>
                </ul>
                <br />
                <div>
                  <h4 className="main_content_subheader">
                    Food Drop Off Organzer
                    <span className="technologies"
                      >(Python, Django, SQL, HTML, CSS, Javascript, Ajax,
                      Bootstrap)</span
                    >
                  </h4>
                  <p className="basic_text">
                    Restaurant order management for Los Angeles small restaurant
                    food drops.
                  </p>
                  <ul>
                    <li className="circle_list">
                      Restaurant menu and event management.
                    </li>
                    <li className="circle_list">
                      User food ordering with status and messaging.
                    </li>
                    <li className="circle_list">
                      Restaurant and user login and registration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="work_experience">
              <div className="main_content_header_box">
                <h3 className="main_content_header">WORK EXPERIENCE</h3>
                <img className="main_content_pics" src="experience.jpg" alt="" />
              </div>
              <hr />
              <div className="sub_content">
                <h4 className="main_content_subheader">
                  Intelligence Officer - United States Marine Corps
                </h4>
                <h6>MAY 2015 - APR 2020</h6>
                <ul>
                  <li className="basic_text circle_list">
                    Led small teams of highly intelligent individuals through
                    analysis and presentation of threats and their effect on
                    missions.
                  </li>
                  <li className="basic_text circle_list">
                    Participated in multiple joint exercises while collaborating
                    with all levels of operations.
                  </li>
                </ul>
                <br />
                <h4 className="main_content_subheader">
                  Mechanical Engineer - Oshkosh Corporation
                </h4>
                <h6>MAY 2014 - AUG 2014</h6>
                <ul>
                  <li className="basic_text circle_list">
                    Led design of new center body component on the Striker
                    rescue truck.
                  </li>
                  <li className="basic_text circle_list">
                    Provided engineering support on the Snozzle airport
                    firefighting device and the Stinger pump station.
                  </li>
                </ul>
                <br />
                <h4 className="main_content_subheader">
                  Mechanical Engineer - Kohler Company
                </h4>
                <h6>JAN 2012 - JUN 2012</h6>
                <ul>
                  <li className="basic_text circle_list">
                    Inherited development of UV test stand for Vikrell products.
                  </li>
                  <li className="basic_text circle_list">
                    Matlab code analysis of crack propogation within bath
                    products.
                  </li>
                  <li className="basic_text circle_list">
                    Development of full testing procedure while pinpointing and
                    modifying accuracy issues to meet Gage R&R requirements.
                  </li>
                  <li className="basic_text circle_list">
                    Designed dynamic shower door display stand.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Resume;