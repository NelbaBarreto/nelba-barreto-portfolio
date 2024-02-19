import React from "react";
import iconoGato from "../img/icons8-gato-64.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-retro-150 border-b-retro-100 border-b-4">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={iconoGato} alt="Icono Nelba Barreto" width="50" height="50" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://nelbabarreto.com/">
            Home
          </a>
          <a className="navbar-item" href="https://bulma.io/">
            About me
          </a>
          <a className="navbar-item" href="https://bulma.io/">
            Projects
          </a>
          <a className="navbar-item" href="https://bulma.io/">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;