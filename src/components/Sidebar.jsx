import React, { useState } from "react";
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="lg:hidden lg:min-h-14">
      <button 
        className="my-auto min-h-14"
        onClick={() => setHidden(!hidden)}
      >
        <FontAwesomeIcon className="text-3xl text-background-50 mx-2" icon={faBurger} />
      </button>
      <div id="dropdown-menu"
        className={classNames("lg:hidden mt-2", { hidden })}
      >
        <a href="#" className="block text-white py-2 px-4">Dropdown Item 1</a>
        <a href="#" className="block text-white py-2 px-4">Dropdown Item 2</a>
        <a href="#" className="block text-white py-2 px-4">Dropdown Item 3</a>
      </div>
    </div>
  )
}

export default Sidebar;