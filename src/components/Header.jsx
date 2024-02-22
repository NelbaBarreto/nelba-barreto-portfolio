import React from "react";
import foto from "../img/foto.jpg"
import Confetti from "./Confetti";

const Header = () => {
  return (
    <header className="container py-10" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="mx-auto my-auto">
          <img src={foto} className="h-60 rounded-full" alt="foto nelba barreto" />
        </div>
        <div className="lg:col-span-3 lg:m-0 m-4">
          <Confetti />
        </div>
      </div>
    </header>
  )
}

export default Header;