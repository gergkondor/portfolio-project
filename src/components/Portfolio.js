import React from 'react';
import kondorGuitars from '../images/kondor-guitars.jpg';
import runclub from '../images/runclub.jpg';
import teacozy from '../images/teacozy.jpg';
import vcexp from '../images/vcexp.jpg';
// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
   // Kondor Guitars
   const openPopupboxKondorGuitars = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={kondorGuitars} alt="kondorGuitars..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/.../...", "_blank")}>https://github.com/.../...</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Kondor Guitars Official Website",
        },
      },
    });
  }

  const popupboxConfigKondorGuitars = {
    titleBar: {
      enable: true,
      text: "Kondor Guitars Official Webpage"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Runclub
  const openPopupboxRunclub = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={runclub} alt="runclub..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a  className="hyper-link" onClick={() => window.open("https://...com/", "_blank")}>https://...com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/.../...", "_blank")}>https://github.com/.../...</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "RunClub project",
        },
      },
    });
  }

  const popupboxConfigRunclub = {
    titleBar: {
      enable: true,
      text: "RunClub project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // TEACOZY
  const openPopupboxTeaCozy = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={teacozy} alt="TeaCozy..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://...com/", "_blank")}>https://...com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/.../...", "_blank")}>https://github.com//.../...</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "TeaCozy Project",
        },
      },
    });
  }

  const popupboxConfigTeaCozy = {
    titleBar: {
      enable: true,
      text: "TeaCozy project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Vcexp 
  const openPopupboxVcexp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={vcexp} alt="Vcexp Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://...com/", "_blank")}>https://...com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/.../...", "_blank")}>https://github.com/.../...</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Vcexp Project",
        },
      },
    });
  }

  const popupboxConfigVcexp = {
    titleBar: {
      enable: true,
      text: "Vcexp project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div>
      <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-center py-5">Portfolio</h1>
          <div className="image-box-wrapper row justify-content-center">

            <div className="portfolio-image-box" onClick={openPopupboxKondorGuitars}>
              <img className="portfolio-image" src={kondorGuitars} alt="Kondor Guitars" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div className="portfolio-image-box" onClick={openPopupboxRunclub}>
              <img className="portfolio-image" src={runclub} alt="runclub" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div className="portfolio-image-box" onClick={openPopupboxTeaCozy}>
              <img className="portfolio-image" src={teacozy} alt="teacozy" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            <div className="portfolio-image-box" onClick={openPopupboxVcexp}>
              <img className="portfolio-image" src={vcexp} alt="vcexp" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigKondorGuitars} />
      <PopupboxContainer {...popupboxConfigRunclub} />
      <PopupboxContainer {...popupboxConfigTeaCozy} />
      <PopupboxContainer {...popupboxConfigVcexp} />
    </div>
  )
}

export default Portfolio
