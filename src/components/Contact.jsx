import React from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <Title>Contact</Title>
      <br />
      <ul className="inline">
        <li className="mb-4">
          <a
            className="text-white"
            href="https://www.linkedin.com/in/nelba-barreto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            <span className="ml-2 hover:underline">Nelba Barreto</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            className="text-white"
            href="https://github.com/NelbaBarreto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            <span className="ml-2 hover:underline">NelbaBarreto</span>
          </a>
        </li>
        <li>
          <a
            className="text-white"
            href="mailto:barretonelba@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl"  />
            <span className="ml-2 hover:underline">barretonelba@gmail.com</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact;