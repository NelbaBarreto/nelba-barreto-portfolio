import React from "react";
import foto from "../img/foto.jpg"
import Description from "./Description";

const Header = () => {
  return (
    <div className="bg-gray-800 rounded-lg mt-5 p-10">
      <header className="py-10" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="mx-auto my-auto">
            <img src={foto} className="h-60 rounded-full" alt="foto nelba barreto" />
          </div>
          <div className="lg:col-span-3">
            <Description />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;