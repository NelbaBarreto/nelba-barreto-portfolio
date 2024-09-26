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
    <section className="bg-gray-800 border border-gray-950 rounded-lg p-10 my-5 shadow-md shadow-gray-950" id="contact">
      <Title>{translations[language].contact}</Title>
      <br />
      <ul className="inline">
        <li className="mb-4">
          <a
            className="text-white"
            href="https://www.linkedin.com/in/nelba-barreto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            <span className="ml-2 hover:underline">Nelba Barreto</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            className="text-white"
            href="mailto:barretonelba@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            <span className="ml-2 hover:underline">barretonelba@gmail.com</span>
          </a>
        </li>
      </ul>

      <div className="flex items-center justify-center my-6">
        <div className="border-t border-gray-500 flex-grow mr-3"></div>
        <span className="text-white text-sm">{translations[language].or}</span>
        <div className="border-t border-gray-500 flex-grow ml-3"></div>
      </div>

      <form className="mt-8 space-y-6" name="contact" method="post">
        <h3 className="text-lg text-white font-bold">{translations[language].send_message} 💜</h3>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium">
            {translations[language].name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium">
            {translations[language].email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white text-sm font-medium">
            {translations[language].message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-purple-700 border-purple-950 border px-4 py-2 rounded-lg text-white disabled:bg-purple-400 font-semibold"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            {translations[language].send}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
