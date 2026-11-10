import React, { useContext } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { certifications } from "../utils/certifications";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";

const CertificationCard = ({ certification }) => {
  const { language } = useContext(LanguageContext);
  const href = certification.url || certification.image;
  const baseClassName = "p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 space-y-1";

  const content = (
    <>
      <h3 className="font-semibold text-white leading-snug">{certification.name[language]}</h3>
      <p className="text-sm text-slate-400">{certification.issuer} · {certification.year}</p>
      {href && (
        <span className="inline-flex items-center text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
          {certification.url ? translations[language].view_credential : translations[language].view_certificate}
          <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2 text-xs" />
        </span>
      )}
    </>
  );

  if (!href) {
    return <div className={baseClassName}>{content}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${baseClassName} hover:border-primary-500/50 hover:bg-slate-700/50 transition-all duration-300`}
    >
      {content}
    </a>
  )
}

const Certifications = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="bg-slate-900/60 rounded-2xl mt-8 p-8 border border-slate-800" id="certifications">

      <div className="relative z-10">
        <Title>{translations[language].certifications}</Title>
        <p className="text-slate-300 text-lg leading-relaxed mt-4 mb-8">
          {translations[language].certifications_main}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
          {certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications;
