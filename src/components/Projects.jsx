import React, { useContext } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const ProjectCard = ({ project }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="max-w-sm border-gray-950 border rounded-lg overflow-hidden shadow-md shadow-gray-950 w-50 my-10 m-auto"
    >
      <img className="w-full" src={project.image?.src} alt={project.image?.alt} />
      <div className="px-6 py-4 h-full bg-purple-700">
        <a
          className="font-bold text-lg mb-2 text-white hover:underline"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{project.name}</span>
          <span className="text-lg ml-2">
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </span>
        </a>
        <p className="text-white text-base">
          {project.description}
        </p>
        <div className="pt-4 pb-2">
          {project.tags.map((tag, idx) => {
            return (
              <span key={idx}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 shadow-md shadow-gray-950">
                #{tag}
              </span>
            )
          })}
        </div>
        {project.github ? <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-semibold py-2 px-2 text-center text-white rounded-lg bg-background-50 sm:w-fit mt-2 shadow-gray-950 shadow-md"
        >
          <span className="text-lg mr-2">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>{translations[language].view_on_github}</span>
        </a> : null}
      </div>
    </div>
  )
}

const Projects = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <section className="bg-gray-800 rounded-lg mt-5 p-10 border border-gray-950 shadow-md shadow-gray-950" id="projects">
      <Title>{translations[language].projects}</Title>
      <br />
      <p className="text-white">
        {translations[language].projects_main}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {translations[language].projects_list.map((project, id) =>
          <ProjectCard key={id} project={project} />
        )}
      </div>
    </section>
  )
}

export default Projects;