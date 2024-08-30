import { useState, useContext } from "react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { resume_languages } from "../utils/index";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Description = () => {
  const { language } = useContext(LanguageContext);
  const [conductor, setConductor] = useState();
  const selected = resume_languages[0];

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
          className="shadow-md shadow-gray-950 px-4 py-2 rounded-lg text-white hover:bg-purple-700 bg-purple-500 font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          {translations[language].view_resume}
        </a>
      </div>
    );
  }

  const Main = () => {
    return (
      <div className="mb-4">
        <section>
          {translations[language].description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>
        <br />
        <span>
          📍{translations[language].from} Lambaré,&nbsp;
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
      <h1 className="md:text-5xl text-2xl sm:text-4xl text-white font-bold my-2 lg:mb-4 lg:my-0">
        {translations[language].greeting}&nbsp;
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
