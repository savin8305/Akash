import React, { useRef } from "react";

const About = () => {
  const imageRef = useRef(null);

  return (
    <>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>

      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Akash Vishwakarma</h1>
        <p className="about_left_text">
          Hi! I am Akash Vishwakarma From Rewa, Madhya Pradesh. I am Computer
          Science Engineering Graduate (2024) .
        </p>
        <div className="about_left_socialMedia"></div>
      </div>
    </>
  );
};

export default About;
