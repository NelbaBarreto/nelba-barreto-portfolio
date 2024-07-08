import React from "react";
import Title from "./Title";
import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";

const ProjectCard = ({ project }) => {
  const cardClassName = `px-6 py-4 ${project.color}`;

  return (
    <a
      className="max-w-sm rounded overflow-hidden shadow-lg w-50 m-10 cursor-pointer hover:shadow-retro-150"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="w-full" src={project.image?.src} alt={project.image?.alt} />
      <div className={cardClassName}>
        <div
          className="font-bold text-xl mb-2 text-white hover:underline"
        >
          {project.name}
        </div>
        <p className="text-white text-base">
          {project.description}
        </p>
      </div>
    </a>
  )
}

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "DinoSource",
      description: "Under construction. Explorative analysis of dinosaur data 🦖.",
      image: { src: gallimimus, alt: "A Gallimimus" },
      link: "https://www.nhm.ac.uk/content/nhmwww/en/home/discover/dino-directory/gallimimus.html",
      color: "bg-green-700"
    },
    {
      id: 1,
      name: "Applied Data Science Capstone",
      description: "Final project to obtain the IBM Data Science Professional Certificate 🚀.",
      image: { src: spaceRace, alt: "A rocket" },
      link: "https://github.com/NelbaBarreto/applied-data-science-capstone",
      color: "bg-green-700"
    },

  ];

  return (
    <section id="projects">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project, id) =>
          <ProjectCard key={id} project={project} />
        )}
      </div>
    </section>
  )
}

export default Projects;