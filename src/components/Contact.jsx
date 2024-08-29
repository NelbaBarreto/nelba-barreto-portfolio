import React, { useState } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  // const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted", formData);
  //   setFormSubmitted(true);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: ""
  //   });
  // };

  return (
    <section className="bg-gray-800 border border-gray-950 rounded-lg p-10 my-5 shadow-md shadow-gray-950" id="contact">
      <Title>Contact</Title>
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
            href="https://github.com/NelbaBarreto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            <span className="ml-2 hover:underline">NelbaBarreto</span>
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
        <span className="text-white text-sm">or</span>
        <div className="border-t border-gray-500 flex-grow ml-3"></div>
      </div>

      <form className="mt-8 space-y-6" name="contact" method="post">
        <h3 className="text-lg text-white font-bold">Send me a Message! 💜</h3>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium">
            Name
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
            Email
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
            Message
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
            className="bg-purple-700 border-purple-950 border px-4 py-2 rounded-lg text-white disabled:bg-purple-400"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
