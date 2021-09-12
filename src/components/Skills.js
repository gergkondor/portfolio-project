import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return ( 
        <div id="skills" className="skills">
      <h1 className="py-5">Skills</h1>
      <div className="container">
        <div className="row skills-row">
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Your website will be built with the latest proven technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Full Stack Development</h3>
              <p>HTML - CSS - JavaScript - React - Redux - Node.js - MySQL - PostgreSQL - PHP - Python - Java - C#</p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>

    )
}

export default Skills