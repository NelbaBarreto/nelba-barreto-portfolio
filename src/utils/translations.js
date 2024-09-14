import spaceRace from "../img/space_race.jpg";
import ankylosaurus from "../img/ankylosaurus.jpg";
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
    resume_link: "https://drive.google.com/file/d/1P5dwtf7A_mR2kzzcIa7wWzA1DRHavVT2/view?usp=sharing",
    greeting: "Hello! I'm",
    description: [
      "I am a computer engineer with two years of experience in full-stack web development and three years in development with SQL and PL/SQL. I worked on web systems, financial software, and business intelligence (BI) projects. In my last experience, I was part of the BI department, where I was in charge of the implementation and optimization of ETL processes, as well as the monitoring and resolution of technical problems in the flows.",
      "I am interested in transitioning into a data engineering position where I can apply my skills and also learn modern data engineering practices.",
      "I am working towards a master's degree in data science and doing personal projects to enhance my understanding of data engineering tools in the cloud, specifically in Azure."
    ],
    from: "From",
    projects: "Projects",
    projects_main: "Although I participated in multiple projects throughout my professional career, which can be seen on my Linkedin profile and in my resume, the projects shown below are the ones I developed to practice my Python and data science skills.",
    projects_list: [
      {
        id: 0,
        name: "Applied Data Science Capstone",
        description: "Final project to obtain the IBM Data Science Professional Certificate 🚀.",
        image: { src: spaceRace, alt: "A rocket" },
        link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
        github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
        tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      },
      {
        id: 1,
        name: "DinoSource",
        description: "Descriptive analysis of dinosaur data 🦕. The dataset used in this project was obtained from the website of the Natural History Museum in London.",
        image: { src: ankylosaurus, alt: "Two ankylosaurus" },
        link: "https://dinosource.onrender.com",
        github: "https://github.com/NelbaBarreto/dinosource_dash",
        tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      },
      // {
      //   id: 2,
      //   name: "Get to Know me Through Music",
      //   description: "Azure data engineering pipeline to analyze and visualize my music listening habits using data from the Spotify API 🎶. Under construction 🏗️.",
      //   image: { src: spotify, alt: "Spotify App Logo" },
      //   link: "https://nelbabarreto.com/spotify",
      //   tags: ["azure data factory", "azure data lake"]
      // },
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
    resume_link: "https://drive.google.com/file/d/1LnS_enDKKQB0ufNbmuY56weXEiosvQxR/view?usp=drive_link",
    greeting: "¡Hola! Soy",
    description: [
      "Soy ingeniera informática con dos años de experiencia en desarrollo web full-stack y tres años en desarrollo con SQL y PL/SQL. Trabajé en proyectos de sistemas web, software financiero e inteligencia de negocios (BI). En mi última experiencia, formé parte del departamento de BI, donde estuve a cargo de la implementación y optimización de procesos ETL, así como del seguimiento y resolución de problemas técnicos en los flujos.",
      "Estoy interesada en hacer la transición a un puesto de ingeniería de datos donde pueda aplicar mis habilidades y además, aprender prácticas modernas de ingeniería de datos.",
      "Actualmente, estoy cursando una maestría en ciencia de datos y realizando proyectos personales para mejorar mi comprensión de las herramientas de ingeniería de datos en la nube, específicamente en Azure.",
    ],
    from: "De",
    projects: "Proyectos",
    projects_main: "Aunque participé en múltiples proyectos en mi carrera profesional, que pueden ser consultados en mi perfil de Linkedin y en mi CV, los proyectos mostrados a continuación son los que desarrollé para practicar mis habilidades de Python y ciencia de datos.",
    projects_list: [
      {
        id: 0,
        name: "Applied Data Science Capstone",
        description: "Proyecto final para obtener el Certificado Profesional en Ciencias de Datos de IBM 🚀.",
        image: { src: spaceRace, alt: "A rocket" },
        link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
        github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
        tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      },
      {
        id: 1,
        name: "DinoSource",
        description: "Análisis descriptivo de datos de dinosaurios 🦕. El conjunto de datos utilizado en este proyecto fue obtenido del sitio web del Museo de Historia Natural de Londres.",
        image: { src: ankylosaurus, alt: "Two ankylosaurus" },
        link: "https://dinosource.onrender.com",
        github: "https://github.com/NelbaBarreto/dinosource_dash",
        tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      },
      // {
      //   id: 2,
      //   name: "Conoceme a través de la Música",
      //   description: "Pipeline de ingeniería de datos en Azure para analizar y visualizar mis hábitos de escucha de música utilizando datos de la API de Spotify.🎶. En construcción 🏗️.",
      //   image: { src: spotify, alt: "Spotify App Logo" },
      //   link: `${process.env.REACT_APP_HOST}/spotify`,
      //   tags: ["azure data factory", "azure data lake"]
      // },
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
