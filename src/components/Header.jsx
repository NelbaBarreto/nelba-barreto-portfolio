import React, { useContext } from "react";
import foto from "../img/foto.jpg"
import Description from "./Description";
import classNames from "classnames"
import { languages } from "../utils";
import { LanguageContext } from "../context";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-gray-800 border border-gray-950 rounded-lg mt-5 p-10 shadow-md shadow-gray-950">
      <div className="font-semibold inline-flex shadow-md shadow-gray-950 rounded-lg" role="group">
        {languages.map((lang, idx) => {
          return (
            <button
              key={idx}
              className={classNames(lang.className, { "bg-purple-700": language === lang.value })}
              onClick={() => setLanguage(lang.value)}
            >
              {lang.label}
            </button>
          )
        })}
      </div>
      <header className="py-10" id="home">
        <div className="grid grid-cols-1 xl:grid-cols-4">
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