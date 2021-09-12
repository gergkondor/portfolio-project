import React from "react";
import badge from "../images/microsoftBadge.png";
import testerBadge from "../images/CTFL.png";
import codeCadLogo from '../images/codecademyLogo.png';
import ITCSLogo from '../images/ITCSwitchLogo.png';
import bcsLogo from '../images/bcs-logo.png';

const Qualifications = () => {
  return (
    <div id="qualifications" className="qualifications">
      <div className="d-flex justify-content-center my-5">
        <h1>Qualifications</h1>
      </div>
      <div className="container qualifications-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020</h3>
            <p>ISTQB Foundation Level Certification in Software Testing</p>
            <img src={testerBadge} width='100' alt='ISTQB badge logo' />
            <img src={bcsLogo} height='100' alt='BCS logo' />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - 2021</h3>
            <p>Full Stack Software Developer course by IT Career Switch using CodeCademy</p>
            <img src={ITCSLogo} width='200' alt='IT Career Switch logo' />
            <img src={codeCadLogo} width='100' alt='CodeCademy logo' />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021 August</h3>
            <p>Microsoft 98-383: Introduction to Programming Using HTML and CSS certification</p>
            <img src={badge} width='100' alt='Microsoft Badge logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualifications;
