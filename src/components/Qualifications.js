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
            <p>
              This BCS course gives a good understanding of the different types of software development projects, roles, repsonsabilities and processes. Also this course and the ISTQB software tester certification is very helpful knowledge to any developer, as it gives a good understanding on how softwares are evaluated and accepted.
            </p>
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
            <p>
              IT Carrer Switch offers a well established and accepted full stack and web developer course. The majority of the course is built on the Codecademy knowledge base, but it also includes additional learning materials, tutor support, and finally project works to practise what we learnt in theory. Altogether it gave a solid and reliable knowledge that I will be able to build on in future software development jobs.
            </p>
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
            <p>
              This certificate, which is accepted wordwide, was the final exam for the web development part of the IT Carreer Switch course. This exam prooves that I can understand and write CSS and HTML correctly even with time pressure.
            </p>
            <img src={badge} width='100' alt='Microsoft Badge logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualifications;
