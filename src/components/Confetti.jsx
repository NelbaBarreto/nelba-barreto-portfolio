import { useState } from "react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";

const Description = () => {
  const [conductor, setConductor] = useState();

  const onOnce = () => {
    conductor?.shoot();
  };

  const onInit = ({ conductor }) => {
    setConductor(conductor);
  };

  return (
    <div className="text-white">
      <h1 className="text-5xl text-white font-bold my-2 lg:mb-2 lg:my-0">
        Hello! I'm&nbsp;
        <button 
          className="text-retro-150"
          onClick={onOnce}
        >
        Nelba
        </button> 
        &#127752;
      </h1>
      <Realistic onInit={onInit} />
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </section>
    </div>
  )
}

export default Description;
