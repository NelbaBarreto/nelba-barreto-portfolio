import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import iguanodon from "../img/iguanodon.jpg";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Footer = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <div className="my-4 mx-5">
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="flex items-center justify-center">
        <span className="text-gray-400 mr-4">
          {translations[language].developed_by}
        </span>
        <img
          onClick={() => navigate("/iguanodon")}
          src={iguanodon}
          className="w-10 rounded-full cursor-pointer"
          alt="Iguanodon"
        />
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
