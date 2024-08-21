import React, { useContext } from "react";
import { SectionContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames"
import Sidebar from "./Sidebar";
import {options } from "./utils";

const Navbar = () => {
  const { section, setSection } = useContext(SectionContext);
  const navbarItemClassName = "navbar-item font-semibold text-lg text-white";

  return (
    <nav className="navbar bg-purple-500">
      <div className="navbar-menu hidden">
        <div className="navbar-start">
          {options.map((option, index) => {
            return (
              <a
                key={index}
                className={classNames(navbarItemClassName, { "bg-purple-700": section === option.id })}
                href={option.href}
                onClick={() => setSection(option.id)}
              >
                {option.label}
              </a>
            )
          })}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons my-auto">
              <button>
                <a
                  className="text-white mx-2"
                  href="https://www.linkedin.com/in/nelba-barreto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a>
              </button>
              <button>
                <a
                  className="text-white mx-2"
                  href="https://github.com/NelbaBarreto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
              </button>
              <button>
                <a
                  className="text-white mx-2"
                  href="mailto:barretonelba@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </nav >
  )
}

export default Navbar;