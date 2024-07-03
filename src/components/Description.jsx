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
      <h1 className="sm:text-5xl text-4xl text-white font-bold my-2 lg:mb-4 lg:my-0">
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
        I am a results-oriented professional with experience in data manipulation. I leverage my strong SQL/PL/SQL skills to develop and optimize ETL scripts for data warehouses, significantly improving data quality and processing times. I am passionate about data-driven decision making and transforming raw data into actionable insights. 
        Previously, I worked as a web developer, where I gained experience with project management, version control systems (Git, SVN), and user-centric design principles. This experience, coupled with my curiosity for data, led me to pursue data science and data engineering. I am currently learning Python and exploring data engineering frameworks to further my data manipulation and analysis skills.
        I am a responsible, curious, and flexible learner, always seeking new challenges and opportunities to expand my skillset. My strong English communication skills allow me to collaborate effectively in international teams.
      </section>
    </div>
  )
}

export default Description;
