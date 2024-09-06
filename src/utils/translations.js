import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";
import spotify from "../img/spotify.jpg";

export const translations = {
  en: {
    sections: [
      { id: 0, label: "Home", href: "#home" },
      { id: 1, label: "Projects", href: "#projects" },
      { id: 2, label: "Certifications", href: "#certifications" },
      { id: 3, label: "Contact", href: "#contact" }
    ],
    view_resume: "View my Resume",
    resume_link: "https://drive.google.com/file/d/14GHSh5eb40HSrDX1Yr-XBe2jYdXUps7R/view?usp=drive_link",
    greeting: "Hello! I'm",
    description: [
      "I am a results-oriented professional with over five years of experience. I leverage my expertise in SQL/PLSQL and Python to enhance data quality and streamline processing times for data warehouses.",
      "I want to transition into a data engineering role where I can work with cloud technologies. I am dedicated to continuous learning and seeking new challenges to improve my skills in modern data engineering practices.",
      "I aim to join a team that utilizes cutting-edge technologies to drive data solutions and contribute to impactful projects."
    ],
    from: "From",
    projects: "Projects",
    projects_main: "Although I participated in multiple projects throughout my professional career, which can be seen on my Linkedin profile and in my resume, the projects shown below are the ones I developed to practice my Python and data science skills.",
    projects_list: [
      {
        id: 0,
        name: "DinoSource",
        description: "Descriptive analysis of dinosaur data 🦕.",
        image: { src: gallimimus, alt: "A Gallimimus" },
        link: "https://dinosource.onrender.com",
        github: "https://github.com/NelbaBarreto/dinosource_dash",
        tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      },
      {
        id: 1,
        name: "Applied Data Science Capstone",
        description: "Final project to obtain the IBM Data Science Professional Certificate 🚀.",
        image: { src: spaceRace, alt: "A rocket" },
        link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
        github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
        tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      },
      {
        id: 2,
        name: "Get to Know me Through Music",
        description: "Azure data engineering pipeline to analyze and visualize my music listening habits using data from the Spotify API 🎶. Under construction 🏗️.",
        image: { src: spotify, alt: "Spotify App Logo" },
        link: "https://nelbabarreto.com/spotify",
        tags: ["azure data factory", "azure data lake"]
      },
    ],
    view_on_github: "View on GitHub",
    certifications_and_certificates: "Certifications & Certificates",
    contact: "Contact",
    or: "or",
    send_message: "Send me a Message!",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    developed_by: "Developed by Nelba Barreto"
  },
  es: {
    sections: [
      { id: 0, label: "Inicio", href: "#home" },
      { id: 1, label: "Proyectos", href: "#projects" },
      { id: 2, label: "Certificaciones", href: "#certifications" },
      { id: 3, label: "Contacto", href: "#contact" }
    ],
    view_resume: "Ver mi CV",
    resume_link: "https://drive.google.com/file/d/16DweK-aPdYpxJ7EayQyGpm7mmMzG95Fl/view?usp=sharing",
    greeting: "¡Hola! Soy",
    description: [
      "Soy una profesional orientada a resultados con más de cinco años de experiencia. Utilizo mis habilidades en SQL/PLSQL y Python para mejorar la calidad de los datos y optimizar los tiempos de procesamiento de los almacenes de datos.",
      "Me gustaría hacer la transición a un puesto de ingeniería de datos donde pueda trabajar con tecnologías en la nube. Me enfoco en aprender constantemente y buscar nuevos desafíos para mejorar mis habilidades en prácticas modernas de ingeniería de datos.",
      "Mi meta es unirme a un equipo que utiliza tecnologías de vanguardia para impulsar soluciones de datos y contribuir a proyectos de gran impacto."
    ],
    from: "De",
    projects: "Proyectos",
    projects_main: "Aunque participé en múltiples proyectos en mi carrera profesional, que pueden ser consultados en mi perfil de Linkedin y en mi CV, los proyectos mostrados a continuación son los que desarrollé para practicar mis habilidades de Python y ciencia de datos.",
    projects_list: [
      {
        id: 0,
        name: "DinoSource",
        description: "Análisis descriptivo de datos de dinosaurios 🦕.",
        image: { src: gallimimus, alt: "A Gallimimus" },
        link: "https://dinosource.onrender.com",
        github: "https://github.com/NelbaBarreto/dinosource_dash",
        tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      },
      {
        id: 1,
        name: "Applied Data Science Capstone",
        description: "Proyecto final para obtener el Certificado Profesional en Ciencias de Datos de IBM 🚀.",
        image: { src: spaceRace, alt: "A rocket" },
        link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
        github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
        tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      },
      {
        id: 2,
        name: "Conoceme a través de la Música",
        description: "Pipeline de ingeniería de datos en Azure para analizar y visualizar mis hábitos de escucha de música utilizando datos de la API de Spotify.🎶. En construcción 🏗️.",
        image: { src: spotify, alt: "Spotify App Logo" },
        link: `${process.env.REACT_APP_HOST}/spotify`,
        tags: ["azure data factory", "azure data lake"]
      },
    ],
    view_on_github: "Ver en GitHub",
    certifications_and_certificates: "Certificaciones & Certificados",
    contact: "Contacto",
    or: "o",
    send_message: "¡Enviame un Mensaje!",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar",
    developed_by: "Desarrollado por Nelba Barreto"
  },
};
