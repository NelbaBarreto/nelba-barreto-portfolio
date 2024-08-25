import React from "react";
import { useNavigate } from "react-router-dom";
import iguanodon from "../img/iguanodon.jpg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="my-4 mx-5">
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="flex items-center justify-center">
        <span className="text-gray-400 mr-4">
          Desarrollado por Nelba Barreto
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
