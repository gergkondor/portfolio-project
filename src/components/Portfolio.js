import React from 'react';
import gazetteer from '../images/gazetteer.png';
// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
   // Gazetteer
   const openPopupboxGazetteer = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={gazetteer} alt="gazetter project1" />
        <p>My first course project at IT Career Switch</p>
        <b>Visit:</b> <a className="hyper-link" href="https://gazetteer.gergokondor.me" target="_blank" >The Gazetteer</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "The Gazetteer - Project1",
        },
      },
    });
  }

  const popupboxConfigGazetteer = {
    titleBar: {
      enable: true,
      text: "The Gazetteer - Project1"
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

            <div className="portfolio-image-box" onClick={openPopupboxGazetteer}>
              <div>
                <img className="portfolio-image" src={gazetteer} alt="Kondor Guitars" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              <div className="text-center">
                <h3>The Gazetteer</h3>
                <p>A mobile-friendly map application with country info, currency converter, navigation, weather and city/street search.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigGazetteer} />
    </div>
  )
}

export default Portfolio
