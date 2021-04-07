import React from "react";
import Button from "../Button";
import Particles from "react-particles-js";
import "./index.css";

function Card(props) {
  return (
    <div
      style={{ width: props.width, height: props.height }}
      className={`card__container ${props.class}`}
    >
      <Particles
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.3,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="card__container__picture">
        <img src={props.image} alt={`${props.name} icon`} />
      </div>
      <div className="card__container__text">
        <h3>{props.name}</h3>
        <p>{props.content}</p>
      </div>
      <Button
        className="card-button"
        content={props.button}
        onClick={props.buttonOnClick}
        width="35%"
      />
    </div>
  );
}

export default Card;
