import React, { useContext } from "react";
import gato from "../img/icons8-gato-64.png";
import { SectionContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBurger } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames"

const Navbar = () => {
  const { section, setSection } = useContext(SectionContext);
  const navbarItemClassName = "navbar-item text-background-50 font-semibold text-lg";

  return (
    <nav className="bg-retro-150 border-b-retro-100 border-b-4 h-11">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden sm:flex space-x-4">
          <div className="navbar-menu">
            <div className="navbar-start">
              <a
                className={classNames(navbarItemClassName, { "bg-retro-200 text-white": section === 0 })}
                href="#home"
                onClick={() => setSection(0)}
              >
                Home
              </a>
              <a
                className={classNames(navbarItemClassName, { "bg-retro-200 text-white": section === 1 })}
                href="#about-me"
                onClick={() => setSection(1)}
              >
                About Me
              </a>
              <a
                className={classNames(navbarItemClassName, { "bg-retro-200 text-white": section === 2 })}
                href="#projects"
                onClick={() => setSection(2)}
              >
                Projects
              </a>
              <a
                className={classNames(navbarItemClassName, { "bg-retro-200 text-white": section === 3 })}
                href="#contact"
                onClick={() => setSection(3)}
              >
                Contact
              </a>
            </div>
            {/* <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons my-auto">
                  <button>
                    <a
                      className="text-3xl text-background-50 mx-2"
                      href="https://www.linkedin.com/in/nelba-barreto/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </button>
                  <button>
                    <a
                      className="text-3xl text-background-50 mx-2"
                      href="https://github.com/NelbaBarreto/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </button>
                  <button>
                    <a
                      className="text-3xl text-background-50 mx-2"
                      href="mailto:barretonelba@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="sm:hidden">
          <button className="sm:hidden h-10 my-auto">
            <FontAwesomeIcon className="text-3xl text-background-50 mx-2" icon={faBurger} />
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;