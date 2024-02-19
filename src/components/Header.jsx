import React from "react";
import foto from "../img/foto.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Description = () => {
  return (
    <div className="text-white">
      <h1 className="title is-3 text-white font-bold">
        Hello! I'm <span className="text-retro-150">Nelba</span> &#127752;
      </h1>
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </section>
      <div>
        <a
          className="underline hover:text-blue-800 text-3xl"
          href="https://www.linkedin.com/in/nelba-barreto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="container pt-5">
      <div className="columns">
        <div className="column is-one-quarter">
          <img src={foto} className="h-80 rounded-full" alt="foto nelba barreto" />
        </div>
        <div className="column">
          <Description />
        </div>
      </div>
    </header>
  )
}

export default Header;