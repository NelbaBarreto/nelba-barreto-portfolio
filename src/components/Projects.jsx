import React from "react";
import Title from "./Title";

const ProjectCard = () => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg w-50 m-10 cursor-pointer"
    >
      <img className="w-full" src="https://www.mre.gov.py/embapar-ecuador/application/files/4416/8304/8356/elex.jpg" alt="Sunset in the mountains"/>
      <div className="px-6 py-4 bg-retro-50">
        <div 
          className="font-bold text-xl mb-2 text-white hover:underline"
        >
          Exploring Facebook Reactions in Paraguay's Top Journals during Election Season
        </div>
        <p className="text-white text-base">
          Under construction &#128679;
        </p>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects">
      <Title>Projects</Title>
      {/* <ProjectCard /> */}
    </section>
  )
}

export default Projects;