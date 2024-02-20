import React, { useContext } from "react";
import { SectionContext } from "../context";

const Navbar = () => {
  const {section, setSection} = useContext(SectionContext);
  const navbarItemClassName = "navbar-item text-background-50 font-semibold text-lg";

  return (
    <nav className="navbar bg-retro-150 border-b-retro-100 border-b-4">
      <div className="navbar-start">
        <a 
          className={navbarItemClassName} 
          href="#home"
          onClick={() => setSection(0)}
        >
          Home
        </a>
        <a 
          className={navbarItemClassName} 
          href="#about-me"
          onClick={() => setSection(1)}
        >
          About me
        </a>
        <a 
          className={navbarItemClassName} 
          href="#projects"
          onClick={() => setSection(2)}
        >
          Projects
        </a>
        <a 
          className={navbarItemClassName} 
          href="#contact"
          onClick={() => setSection(3)}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar;