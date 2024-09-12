import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="my-4 mx-5">
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="flex items-center justify-center">
        <a
          target="_blank"
          href="https://github.com/NelbaBarreto/nelba-barreto-portfolio"
          rel="noreferrer"
          className="text-gray-400 mr-4 hover:underline"
        >
          {translations[language].developed_by}
        </a>
      </div>
      <br />
      <span className="text-white text-xs">
        <a target="_blank" href="https://icons8.com/icon/121371/cat" rel="noreferrer">
          Cat
        </a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
      </span>
    </div>
  );
};

export default Footer;
