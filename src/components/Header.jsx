import React from "react";
import foto from "../img/foto.jpg"
import Description from "./Description";

const Header = () => {
  return (
    <div className="bg-gray-800 border border-gray-950 rounded-lg mt-5 p-10 shadow-md shadow-gray-950">
      <div className="font-semibold inline-flex shadow-md shadow-gray-950 rounded-lg" role="group">
        <button
          className="px-4 py-2 rounded-tl-lg text-white rounded-bl-lg bg-background-50"
        >
          Español
        </button>
        <button
          className="px-4 py-2 rounded-tr-lg text-background-50 rounded-br-lg bg-gray-200"
        >
          English
        </button>
      </div>
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