import { useState } from "react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
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
      <div className="flex">
        <button
          className="font-semibold py-2 px-2 text-center text-white rounded-l-lg bg-retro-100 sm:w-fit hover:bg-retro-50"
        >
          <a
            href={selected?.link}
            target="_blank"
            rel="noreferrer"
          >
            View my Resume
          </a>
        </button>
        <form className="bg-retro-100 rounded-r-lg hover:bg-retro-50">
          <select
            id="languages"
            className="bg-retro-100 rounded-r-lg min-h-full cursor-pointer text-xl hover:bg-retro-50"
            value={selected.value}
            onChange={(e) => setSelected(resume_languages.find(lang => lang.value === e.target.value))}
          >
            {resume_languages.map(lang => (
              <option key={lang.id} value={lang.value}>
                &nbsp;{lang.text}
              </option>
            ))}
          </select>
        </form>

      </div>

    )
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
            <span
              className="group bg-gradient-to-r from-[rgba(255,0,0,1)] via-[rgba(255,255,255,1)] to-[rgba(0,0,255,1)] bg-clip-text text-transparent font-bold"
            >
              Paraguay
            </span>
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
          className="text-retro-150"
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
