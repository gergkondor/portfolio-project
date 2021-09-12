import React from "react";
// import logo from "../logo.jpg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React fontawesome import
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className="container-fluid">
          <Link className="navbar-brand" smooth={true} to="home" href="#">GERGO KONDOR</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: '#00a1c9' }}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth={true} to="profile" offset={-60} delay={0} className="nav-link" href="#">Profile</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="skills" offset={-60} className="nav-link" href="#">Skills</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-60} className="nav-link" href="#">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contacts" className="nav-link" href="#">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </nav>
  )
}

export default Navbar
