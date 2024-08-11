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
            className="bg-retro-100 font-semibold rounded-r-lg min-h-full cursor-pointer text-xl hover:bg-retro-50"
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
          I am a results-oriented professional with experience in data manipulation. I leverage my strong SQL/PL/SQL skills to develop and optimize ETL scripts for data warehouses, significantly improving data quality and processing times.
          I am a responsible, curious, and flexible learner, always seeking new challenges and opportunities to expand my skillset.<br />
          Currently learning data science and aspiring to build a career in the data industry.
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
