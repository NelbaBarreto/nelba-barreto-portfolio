import React, { useContext } from "react";
import foto from "../img/foto.png"
import Description from "./Description";
import classNames from "classnames"
import { languages } from "../utils";
import { LanguageContext } from "../context";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-slate-900/60 rounded-2xl mt-6 p-8 border border-slate-800">
      
      <div className="relative z-10">
        {/* Language selector with improved design */}
        <div className="font-semibold inline-flex rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 p-1" role="group">
          {languages.map((lang, idx) => {
            return (
              <button
                key={idx}
                className={classNames(
                  "px-4 py-2 mx-1 rounded-lg transition-all duration-300 font-medium",
                  {
                    "bg-primary-500 text-white": language === lang.value,
                    "bg-transparent text-slate-300 hover:bg-slate-700/50 hover:text-white": language !== lang.value
                  }
                )}
                onClick={() => setLanguage(lang.value)}
              >
                {lang.label}
              </button>
            )
          })}
        </div>

        <header className="py-12" id="home">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-center">
            <div className="mx-auto my-auto relative group">
              <img 
                src={foto} 
                className="relative h-64 w-64 rounded-full border-4 border-slate-700" 
                alt="Profile - Nelba Barreto" 
              />
            </div>
            <div className="lg:col-span-3">
              <Description />
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header;