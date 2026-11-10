import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="mt-16 mb-8 mx-5">
      <div className="border-t border-slate-700/50 pt-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/NelbaBarreto"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:bg-primary-500/10"
            >
              <FontAwesomeIcon icon={faGithub} className="text-slate-400 group-hover:text-primary-400 text-xl transition-colors duration-300" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/nelba-barreto/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:bg-primary-500/10"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-slate-400 group-hover:text-primary-400 text-xl transition-colors duration-300" />
            </a>
            
            <a
              href="mailto:barretonelba@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-accent-500/50 transition-all duration-300 hover:bg-accent-500/10"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-slate-400 group-hover:text-accent-400 text-xl transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              {translations[language].developed_by} © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
