import React from "react";
import foto from "../img/foto.jpg"

const Description = () => {
  return (
    <div className="text-white">
      <h1 className="title is-3 text-white font-bold">
        Hello! I'm <span className="text-retro-150">Nelba</span> &#127752;
      </h1>
      <section>
        As a technical consultant at EXCELSIS, I develop and optimize ETL scripts for data warehouses, utilizing advanced Oracle SQL and PL/SQL. I have successfully enhanced the performance and quality of data extraction, transformation, and loading processes, along with integrating with other sources of information.
        Previously, I worked as an Oracle developer at RAMA and as a web developer at Dotech Software. In these roles, I contributed to projects involving modification, maintenance, and creation of information systems, reports, and forms, with a focus on financial regulations compliance and customer service optimization. Technologies used included React.js, Slack, git, and SVN.
        I am currently learning Python, with a particular interest in the field of Data Science, as I believe it holds significant potential and applications in today's world.
        I describe myself as a responsible, curious, and flexible professional, dedicated to continuous learning as a means to enhance and expand my skills, both professionally and personally. My advanced level of English enables effective communication in international professional environments.
      </section>
    </div>
  )
}

const Header = () => {
  return (
    <header className="container pt-5">
      <div className="columns">
        <div className="column is-one-quarter">
          <img src={foto} className="h-80 rounded-full" alt="foto nelba barreto" />
        </div>
        <div className="column">
          <Description />
        </div>
      </div>
    </header>
  )
}

export default Header;