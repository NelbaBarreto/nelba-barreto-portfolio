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
          Desarrollado por Nelba Barreto©
        </span>
        <img 
          onClick={() => navigate("/iguanodon")} 
          src={iguanodon}
          className="w-16 rounded-full cursor-pointer"
          alt="Iguanodon"
        />
      </div>
    </div>
  );
};

export default Footer;
