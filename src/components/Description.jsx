import { useState } from "react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import CustomDropdown from "./CustomDropdown";
import { resume_languages } from "./utils";

const Description = () => {
  const [conductor, setConductor] = useState();
  const [selected, setSelected] = useState(resume_languages[0]);

  const onOnce = () => {
    conductor?.shoot();
  };

  const onInit = ({ conductor }) => {
    setConductor(conductor);
  };

  const Resume = () => {
    return (
      <div className="flex items-stretch">
        <a
          href={selected?.link}
          className="font-semibold py-2 px-4 text-center text-white rounded-l-lg hover:bg-purple-500 bg-purple-700 flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          View my Resume
        </a>
        <form className="bg-purple-500 rounded-r-lg hover:bg-purple-700 flex items-center">
          <CustomDropdown
            options={resume_languages}
            selected={selected}
            setSelected={setSelected}
            className="h-full"
          />
        </form>
      </div>
    );
  }  
  
  const Main = () => {
    return (
      <div className="mb-4">
        <section>
          <p>I am a results-oriented professional with over five years of experience. I leverage my expertise in SQL/PLSQL and Python to enhance data quality and streamline processing times for data warehouses.</p>
          <p>I want to transition into a data engineering role where I can work with cloud technologies. I am dedicated to continuous learning and seeking new challenges to expand my skills in modern data engineering practices.</p>
          <p>I aim to join a team that utilizes cutting-edge technologies to drive data solutions and contribute to impactful projects.</p>
        </section>
        <br />
        <span className="font-semibold">
          📍From Lambaré,&nbsp;
          <a
            href="https://time.is/en/Paraguay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <span>Paraguay</span>
          </a>
          &nbsp;(GMT-4)&nbsp;&nbsp;
        </span>
      </div>
    )
  }

  return (
    <div className="text-white">
      <h1 className="sm:text-5xl text-4xl text-white font-bold my-2 lg:mb-4 lg:my-0">
        Hello! I'm&nbsp;
        <button
          className="text-purple-500"
          onClick={onOnce}
        >
          Nelba
        </button>
        ✨
      </h1>
      <Realistic onInit={onInit} />
      <Main />
      <Resume />
    </div>
  )
}

export default Description;
