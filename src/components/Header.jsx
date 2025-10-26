import React, { useContext } from "react";
import foto from "../img/foto.jpg"
import Description from "./Description";
import classNames from "classnames"
import { languages } from "../utils";
import { LanguageContext } from "../context";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl mt-6 p-8 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 opacity-50"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-500/20 to-transparent rounded-full blur-3xl"></div>
      
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
                    "bg-primary-500 text-white shadow-lg shadow-primary-500/25": language === lang.value,
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src={foto} 
                className="relative h-64 w-64 rounded-full border-4 border-slate-600/50 shadow-2xl hover:border-primary-400/50 transition-all duration-300 hover:scale-105" 
                alt="Nelba Barreto - Ingeniera Informática" 
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
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