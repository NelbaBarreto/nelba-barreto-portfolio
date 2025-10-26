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
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-primary-500/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
          src={project.image?.src} 
          alt={project.image?.alt} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <a
            className="font-bold text-xl text-white hover:text-primary-400 transition-colors duration-300 group/link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="group-hover/link:underline">{project.name}</span>
            <FontAwesomeIcon 
              icon={faUpRightFromSquare} 
              className="ml-2 text-sm opacity-70 group-hover/link:opacity-100 transition-opacity duration-300" 
            />
          </a>
        </div>
        
        <p className="text-slate-300 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="inline-block bg-slate-700/50 text-primary-300 rounded-full px-3 py-1 text-xs font-medium border border-slate-600/50 hover:border-primary-500/50 transition-colors duration-300"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white rounded-lg hover:from-purple-500 hover:via-violet-500 hover:to-purple-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-purple-500/25 z-10 relative"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <span>{translations[language].view_on_github}</span>
          </a>
        )}
      </div>
    </div>
  )
}

const Projects = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl mt-8 p-8 border border-slate-700/50 shadow-2xl" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Title>{translations[language].projects}</Title>
        <p className="text-slate-300 text-lg leading-relaxed mt-4 mb-8">
          {translations[language].projects_main}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {translations[language].projects_list.map((project, id) =>
            <ProjectCard key={id} project={project} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects;