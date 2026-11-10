import React, { useContext, useState } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const DetailBlock = ({ title, children }) => (
  <div>
    <h4 className="font-semibold text-white mb-1">{title}</h4>
    {children}
  </div>
);

const ProjectCard = ({ project }) => {
  const { language } = useContext(LanguageContext);
  const [expanded, setExpanded] = useState(false);
  const t = translations[language];
  const hasDetails = project.contributions || project.context || project.outcome || project.focus;

  return (
    <article className="flex flex-col bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-colors duration-300">
      {project.image && (
        <img
          className="w-full h-48 object-cover"
          src={project.image.src}
          alt={project.image.alt}
        />
      )}

      <div className="p-8 space-y-5">
        <div className="space-y-2">
          {project.kind && (
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{project.kind}</p>
          )}
          {project.link ? (
            <a
              className="font-bold text-xl text-white hover:text-primary-400 transition-colors duration-300"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
              <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2 text-sm opacity-70" />
            </a>
          ) : (
            <h3 className="font-bold text-xl text-white">{project.name}</h3>
          )}
        </div>

        <p className="text-slate-300 leading-relaxed">
          {project.summary || project.description}
        </p>

        {hasDetails && expanded && (
          <div className="space-y-4 text-slate-300 animate-fade-in">
            {project.context && (
              <DetailBlock title={t.project_context}>
                <p className="leading-relaxed">{project.context}</p>
              </DetailBlock>
            )}
            {project.contributions && (
              <DetailBlock title={t.project_contributions}>
                <ul className="list-disc pl-5 space-y-1 marker:text-slate-500">
                  {project.contributions.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </DetailBlock>
            )}
            {project.focus && (
              <DetailBlock title={t.project_focus}>
                <p className="leading-relaxed">{project.focus}</p>
              </DetailBlock>
            )}
            {project.outcome && (
              <DetailBlock title={t.project_outcome}>
                <p className="leading-relaxed">{project.outcome}</p>
              </DetailBlock>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block bg-slate-800 text-slate-300 rounded-md px-2.5 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {hasDetails && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-300"
            >
              {expanded ? t.hide_details : t.show_details}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 text-xs transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
          {project.links?.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-300"
            >
              {link.label}
              <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2 text-xs" />
            </a>
          ))}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              {t.view_on_github}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [showAll, setShowAll] = useState(false);
  const t = translations[language];
  const featured = t.projects_list.filter((project) => project.featured !== false);
  const others = t.projects_list.filter((project) => project.featured === false);
  const visible = showAll ? [...featured, ...others] : featured;

  return (
    <section className="bg-slate-900/60 rounded-2xl mt-8 p-8 border border-slate-800" id="projects">
      <Title>{t.projects}</Title>
      <p className="text-slate-300 text-lg leading-relaxed mt-4 mb-10">
        {t.projects_main}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-start">
        {visible.map((project) =>
          <ProjectCard key={project.id} project={project} />
        )}
      </div>
      {others.length > 0 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-slate-700 text-slate-200 font-semibold hover:border-primary-500 hover:text-white transition-colors duration-300"
          >
            {showAll ? t.show_fewer_projects : `${t.view_more_projects} (${others.length})`}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-2 text-xs transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects;
