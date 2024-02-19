import React from "react";

const navbarItemClassName = "navbar-item text-background-50 font-semibold text-lg";

const Navbar = () => {
  return (
    <nav className="navbar bg-retro-150 border-b-retro-100 border-b-4">
      <div className="navbar-start">
        <a className={navbarItemClassName} href="#home">
          Home
        </a>
        <a className={navbarItemClassName} href="#about-me">
          About me
        </a>
        <a className={navbarItemClassName} href="#projects">
          Projects
        </a>
        <a className={navbarItemClassName} href="#contact">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar;