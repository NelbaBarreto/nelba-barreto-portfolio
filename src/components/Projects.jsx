import React from "react";
import Title from "./Title";
import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";

const ProjectCard = ({ project }) => {
  const cardClassName = `px-6 py-4 h-full ${project.color}`;

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
        <div class="pt-4 pb-2">
        {project.tags.map(tag => (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>))}
        </div>
      </div>
    </a>
  )
}

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "DinoSource",
      description: "Descriptive analysis of dinosaur data 🦕.",
      image: { src: gallimimus, alt: "A Gallimimus" },
      link: "https://dinosource.onrender.com",
      color: "bg-green-700",
      tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
    },
    {
      id: 1,
      name: "Applied Data Science Capstone",
      description: "Final project to obtain the IBM Data Science Professional Certificate 🚀.",
      image: { src: spaceRace, alt: "A rocket" },
      link: "https://github.com/NelbaBarreto/applied-data-science-capstone",
      color: "bg-green-700",
      tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
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