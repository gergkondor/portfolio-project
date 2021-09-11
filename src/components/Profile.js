import React from 'react';
import author from "../me.jpg";

const Profile = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author"/>
          </div>

        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
            I am a full stack developer. I chose this profession because I like to create things from scratch and it keeps my mind sharp as it always brings new challenges and learning opportunities.
            <br/>
            Outside of work my hobbies are woodworking and rock-climbing where I can also express my creative nature in different ways.
            In woodworking I design and build unique guitars and small furnitures and climbing requires intense focus, strength, problem solving and determination, and it's also fun.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
