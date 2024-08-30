import React, { useContext } from "react";
import { SectionContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Sidebar from "./Sidebar";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Navbar = () => {
  const { section, setSection } = useContext(SectionContext);
  const { language } = useContext(LanguageContext);
  const navbarItemClassName = "navbar-item text-lg text-white font-semibold";

  return (
    <nav className="navbar bg-purple-500 shadow-md shadow-gray-950">
      <div className="navbar-menu hidden">
        <div className="navbar-start">
          {translations[language].sections.map((option, index) => {
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