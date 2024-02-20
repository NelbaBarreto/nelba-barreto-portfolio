import React from "react";
import foto from "../img/foto.jpg"
import Confetti from "./Confetti";

const Header = () => {
  return (
    <header className="container pt-5" id="home">
      <div className="columns">
        <div className="column is-one-quarter mb-10">
          <img src={foto} className="h-60 rounded-full" alt="foto nelba barreto" />
        </div>
        <div className="column">
          <Confetti />
        </div>
      </div>
    </header>
  )
}

export default Header;