import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <ReactTypingEffect
          className="typed-text"
          text={["Full Stack Developer", "A web and software developer from Derby in the UK"]}
          speed={20}
          eraseSpeed={10}
          eraseDelay={2000}
          typingDelay={500}
          loop
        />
      <Link smooth={false} to="contacts" offset={0} spy={true} className="btn-main-offer" href="#">Contact me</Link>
      </div>
    </div>
  )
}

export default Header
