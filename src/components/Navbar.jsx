import React from "react";

const navbarItemClassName = "navbar-item text-background-50 font-semibold text-lg";

const Navbar = () => {
  return (
    <nav className="navbar bg-retro-150 border-b-retro-100 border-b-4">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className={navbarItemClassName}  href="https://nelbabarreto.com/">
            Home
          </a>
          <a className={navbarItemClassName} href="https://bulma.io/">
            About me
          </a>
          <a className={navbarItemClassName} href="https://bulma.io/">
            Projects
          </a>       
          <a className={navbarItemClassName} href="https://bulma.io/">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;