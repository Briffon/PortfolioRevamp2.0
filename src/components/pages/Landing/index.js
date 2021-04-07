import React from "react";
import RRT from "react-rotating-text";
import Particles from "react-particles-js";
import "./index.css";

function Landing() {
  return (
    <div className="section landing-container">
      <Particles
        width="100vw"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <h1>
        Making Websites <RRT items={["Modern", "Responsive", "Fast"]} />
      </h1>

      <div className="landing-container__icons">
        <img src="./images/icons/insta-icon.png" alt="instagram logo" />
        <img src="./images/icons/li.png" alt="linkedin logo" />
        <img src="./images/icons/fb.png" alt="FaceBook logo" />
        <div className="break"></div>
        <img
          className="landing-container-arrow"
          alt="down arrow"
          src="./images/icons/down-arrow.png"
        />
      </div>
    </div>
  );
}

export default Landing;
