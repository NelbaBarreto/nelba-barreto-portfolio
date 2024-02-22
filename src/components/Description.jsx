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
        I'm a developer with +4 years of experience overall. Currently, I develop and optimize ETL scripts for data warehouses,
        utilizing advanced Oracle SQL and PL/SQL. I have successfully enhanced the performance and quality of data
        extraction, transformation, and loading processes. Previously, I worked as an Oracle developer and as a web
        developer. In these roles, I contributed to projects involving modification, maintenance, and creation of information
        systems, reports, and forms, with a focus on financial regulations compliance and customer service optimization. I
        describe myself as a responsible, curious, and flexible professional, dedicated to continuous learning as a means to
        enhance and expand my skills, both professionally and personally.
      </section>
    </div>
  )
}

export default Description;
