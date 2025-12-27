import { useState, useContext } from "react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Description = () => {
  const { language } = useContext(LanguageContext);
  const [conductor, setConductor] = useState();

  const onOnce = () => {
    conductor?.shoot();
  };

  const onInit = ({ conductor }) => {
    setConductor(conductor);
  };

  // const Resume = () => {
  //   return (
  //     <div className="flex items-stretch mt-6">
  //       <a
  //         href={translations[language].resume_link}
  //         className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 hover:from-primary-600 hover:to-primary-700"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <span className="mr-2">{translations[language].view_resume}</span>
  //         <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  //         </svg>
  //       </a>
  //     </div>
  //   );
  // }

  const Main = () => {
    return (
      <div className="mb-6 space-y-4">
        <section className="space-y-4">
          {translations[language].description.map((p, idx) => (
            <p key={idx} className="text-slate-300 leading-relaxed text-lg">{p}</p>
          ))}
        </section>
        <div className="flex items-center text-slate-400">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-lg">
            {translations[language].from} 
            <a
              href="https://time.is/en/Paraguay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 hover:underline transition-colors duration-300 ml-1"
            >
              Lambaré, Paraguay
            </a>
            <span className="ml-2 text-sm bg-slate-700 px-2 py-1 rounded-full">GMT-3</span>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="text-white animate-fade-in">
      <h1 className="font-display md:text-6xl text-3xl sm:text-5xl text-white font-bold my-4 lg:mb-6 lg:my-0 leading-tight">
        <span className="text-slate-200">{translations[language].greeting} </span>
        <button
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 hover:from-primary-300 hover:to-accent-300 transition-all duration-300 hover:scale-105 inline-block"
          onClick={onOnce}
        >
         Nelba
        </button>
        <span className="ml-2 text-4xl animate-float">✨</span>
      </h1>
      <Realistic onInit={onInit} />
      <Main />
      {/* <Resume /> */}
    </div>
  )
}

export default Description;
