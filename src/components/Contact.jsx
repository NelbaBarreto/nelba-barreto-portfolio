import React, { useState, useContext } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl mt-8 p-8 border border-slate-700/50 shadow-2xl" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Title>{translations[language].contact}</Title>
        
        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/nelba-barreto/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:bg-slate-700/50"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} className="text-primary-400 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-white font-medium group-hover:text-primary-300 transition-colors duration-300">LinkedIn</p>
              <p className="text-slate-400 text-sm">nelba-barreto</p>
            </div>
          </a>

          <a
            href="mailto:barretonelba@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-accent-500/50 transition-all duration-300 hover:bg-slate-700/50"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-lg group-hover:bg-accent-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-accent-400 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-white font-medium group-hover:text-accent-300 transition-colors duration-300">Email</p>
              <p className="text-slate-400 text-sm">barretonelba@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="border-t border-slate-600 flex-grow mr-4"></div>
          <span className="text-slate-400 text-sm font-medium px-4">{translations[language].or}</span>
          <div className="border-t border-slate-600 flex-grow ml-4"></div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <span className="mr-2">💬</span>
            {translations[language].send_message}
          </h3>
          
          <form className="space-y-6" name="contact" method="post" netlify>
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                  {translations[language].name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder={translations[language].name_placeholder}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                  {translations[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder={translations[language].email_placeholder}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                {translations[language].message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="..."
                required
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                disabled={!formData.name || !formData.email || !formData.message}
              >
                {translations[language].send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
