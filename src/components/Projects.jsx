import React from "react";
import Title from "./Title";

const ProjectCard = ({ project }) => {
  const cardClassName = `px-6 py-4 ${project.color}`;

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg w-50 m-10 cursor-pointer hover:shadow-retro-150"
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
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      id: 0, 
      name: "DinoSource", 
      description: "Under construction", 
      image: { src: "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/gallim.jpg", alt: "A color photo of a polling station in Paraguay." },
      color: "bg-green-500"
    }
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