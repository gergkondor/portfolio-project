import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

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
      <a href="mailto:example@gmail.com" className="btn-main-offer">Contact me</a>
      </div>
    </div>
  )
}

export default Header
