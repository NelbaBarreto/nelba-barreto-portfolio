import React from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./utils";

const ProjectCard = ({ project }) => {
  const cardClassName = `px-6 py-4 h-full ${project.color}`;

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg w-50 my-10"
    >
      <img className="w-full" src={project.image?.src} alt={project.image?.alt} />
      <div className={cardClassName}>
        <a
          className="font-bold text-xl mb-2 text-white hover:underline"
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
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:shadow-md hover:shadow-retro-100">
                #{tag}
              </span>
            )
          })}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-semibold py-2 px-2 text-center text-white rounded-lg bg-black sm:w-fit -50 mt-2 hover:shadow-gray-700 hover:shadow-md"
        >
          <span className="text-lg mr-2">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="bg-gray-800 rounded-lg mt-5  p-10" id="projects">
      <Title>Projects</Title>
      <br />
      <p className="text-white">
        Although I participated in multiple projects throughout my professional career, which can be seen on my LinkedIn and in my resume, the projects shown below are the ones I developed to practice my Python and data science skills.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project, id) =>
          <ProjectCard key={id} project={project} />
        )}
      </div>
    </section>
  )
}

export default Projects;