import React from "react";
import foto from "../img/foto.jpg"

const Description = () => {
  return (
    <div className="text-white">
      <h1 className="title is-1 text-white font-bold">
        Hello! I'm <span className="text-retro-150">Nelba</span> &#127752;
      </h1>
      <section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </section>
    </div>
  )
}

const Header = () => {
  return (
    <header className="container pt-5" id="home">
      <div className="columns">
        <div className="column is-one-quarter">
          <img src={foto} className="h-60 rounded-full" alt="foto nelba barreto" />
        </div>
        <div className="column">
          <Description />
        </div>
      </div>
    </header>
  )
}

export default Header;