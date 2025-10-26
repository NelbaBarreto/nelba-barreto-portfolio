import React, { useState, useContext } from "react";
import classNames from "classnames"
import { SectionContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Sidebar = () => {
  const { section, setSection } = useContext(SectionContext);
  const { language } = useContext(LanguageContext);
  const [hidden, setHidden] = useState(true);

  return (
    <div className="lg:hidden lg:min-h-14">
      <button
        className="my-auto min-h-14"
        onClick={() => setHidden(!hidden)}
      >
        <FontAwesomeIcon className="text-3xl text-white mx-2" icon={faBurger} />
      </button>
      <div
        className={classNames("lg:hidden mx-2 mt-2 absolute rounded-md bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600", { hidden })}
      >
        {translations[language].sections.map((option, index) => {
          return (
            <a
              key={index}
              className={classNames("block border-b-background-50 text-white text-md py-2 px-4 w-36 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-600 hover:font-semibold", 
              { "bg-gradient-to-r from-purple-600 to-violet-600 font-semibold": section === option.id, 
                "border-b": option.id !== (translations[language].sections.length) - 1,
                "rounded-b-md": option.id === (translations[language].sections.length) - 1,
                "rounded-t-lg": option.id === 0
              })}
              href={option.href}
              onClick={() => {setSection(option.id); setHidden(true)}}
            >
              {option.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar;