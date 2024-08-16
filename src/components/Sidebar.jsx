import React, { useState, useContext } from "react";
import classNames from "classnames"
import { SectionContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { options } from "./utils";

const Sidebar = () => {
  const { section, setSection } = useContext(SectionContext);
  const [hidden, setHidden] = useState(true);

  return (
    <div className="lg:hidden lg:min-h-14">
      <button
        className="my-auto min-h-14"
        onClick={() => setHidden(!hidden)}
      >
        <FontAwesomeIcon className="text-3xl text-background-50 mx-2" icon={faBurger} />
      </button>
      <div
        className={classNames("lg:hidden mx-2 mt-2 absolute rounded-md bg-retro-100", { hidden })}
      >
        {options.map((option, index) => {
          return (
            <a
              key={index}
              className={classNames("block border-b-background-50 text-white text-md py-2 px-4 w-36 hover:bg-retro-50 hover:font-semibold", 
              { "bg-retro-50 font-semibold": section === option.id, 
                "border-b": option.id !== (options.length) - 1,
                "rounded-b-md": option.id === (options.length) - 1,
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