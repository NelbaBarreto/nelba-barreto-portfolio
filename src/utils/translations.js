import { projects } from "./projects";
// import spaceRace from "../img/space_race.jpg";
// import ankylosaurus from "../img/ankylosaurus.jpg";
// import spotify from "../img/spotify.jpg";

export const translations = {
  en: {
    sections: [
      { id: 0, label: "Home", href: "#home" },
      { id: 1, label: "Projects", href: "#projects" },
      { id: 2, label: "Certifications", href: "#certifications" },
      { id: 3, label: "Contact", href: "#contact" }
    ],
    view_resume: "View my Resume",
    resume_link: "https://drive.google.com/file/d/1k9u7yWnBcDlnAVf0tkxOxcjdCSXs-5cx/view?usp=sharing",
    greeting: "Hello! I'm",
    description: [
      "I'm a Data Engineer with over seven years of experience in technology, with a background in software development, financial systems, ETL, and business intelligence.",
      "I build data pipelines and ETL/ELT processes with SQL, Python, Airflow, and dbt, integrating core banking systems, operational databases, and cloud services such as Amazon S3 and Athena.",
      "I'm currently finishing my Master's thesis in Data Science and deepening my AWS skills.",
    ],
    from: "From",
    projects: "Projects",
    projects_main: "Selected work from my professional experience and Master's research. Work project details are kept general to respect confidentiality.",
    project_contributions: "My role & contributions",
    project_context: "Context",
    project_outcome: "Outcome",
    project_focus: "Research focus",
    view_more_projects: "View more projects",
    show_fewer_projects: "Show fewer projects",
    show_details: "Show details",
    hide_details: "Hide details",
    projects_list: [
      ...projects.en,
      // {
      //   id: 0,
      //   name: "Applied Data Science Capstone",
      //   description: "Comprehensive data science project analyzing SpaceX launch data using machine learning algorithms to predict successful launches. Features advanced data visualization and statistical analysis 🚀.",
      //   image: { src: spaceRace, alt: "A rocket" },
      //   link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
      //   github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
      //   tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      // },
      // {
      //   id: 1,
      //   name: "DinoSource",
      //   description: "Interactive data visualization platform analyzing dinosaur fossil data from the Natural History Museum. Built with Python and Plotly, featuring dynamic charts and statistical insights 🦕.",
      //   image: { src: ankylosaurus, alt: "Two ankylosaurus" },
      //   link: "https://dinosource.onrender.com",
      //   github: "https://github.com/NelbaBarreto/dinosource_dash",
      //   tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      // },
      // {
      //   id: 2,
      //   name: "Get to Know me Through Music",
      //   description: "End-to-end Azure data engineering pipeline analyzing personal music listening habits using Spotify API data. Features automated ETL processes, data lake storage, and interactive dashboards 🎶.",
      //   image: { src: spotify, alt: "Spotify App Logo" },
      //   link: "https://nelbabarreto.com/spotify",
      //   tags: ["azure data factory", "azure data lake", "python"]
      // },
    ],
    view_on_github: "View on GitHub",
    certifications: "Certifications",
    certifications_main: "Industry certifications in cloud architecture and database technologies, plus specialized training in deep learning.",
    view_credential: "View credential",
    view_certificate: "View certificate",
    contact: "Contact",
    or: "or",
    send_message: "Send me a Message!",
    name: "Name",
    name_placeholder: "Your name",
    email: "Email",
    email_placeholder: "your@email.com",
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
    resume_link: "https://drive.google.com/file/d/1k9u7yWnBcDlnAVf0tkxOxcjdCSXs-5cx/view?usp=sharing",
    greeting: "¡Hola! Soy",
    description: [
      "Soy Ingeniera de Datos con más de siete años de experiencia en tecnología, con trayectoria en desarrollo de software, sistemas financieros, ETL e inteligencia de negocios.",
      "Construyo pipelines de datos y procesos ETL/ELT con SQL, Python, Airflow y dbt, integrando sistemas core bancarios, bases de datos operativas y servicios cloud como Amazon S3 y Athena.",
      "Actualmente me encuentro finalizando mi tesis de la Maestría en Ciencias de Datos y profundizando mis conocimientos en AWS.",
    ],
    from: "De",
    projects: "Proyectos",
    projects_main: "Proyectos destacados de mi experiencia profesional y mi investigación de maestría. Los detalles de los proyectos laborales se presentan de forma general por confidencialidad.",
    project_contributions: "Mi rol y contribuciones",
    project_context: "Contexto",
    project_outcome: "Resultado",
    project_focus: "Foco de la investigación",
    view_more_projects: "Ver más proyectos",
    show_fewer_projects: "Ver menos proyectos",
    show_details: "Ver detalles",
    hide_details: "Ocultar detalles",
    projects_list: [
      ...projects.es,
      // {
      //   id: 0,
      //   name: "Applied Data Science Capstone",
      //   description: "Proyecto integral de ciencia de datos que analiza datos de lanzamientos de SpaceX usando algoritmos de machine learning para predecir lanzamientos exitosos. Incluye visualización avanzada de datos y análisis estadístico 🚀.",
      //   image: { src: spaceRace, alt: "A rocket" },
      //   link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
      //   github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
      //   tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      // },
      // {
      //   id: 1,
      //   name: "DinoSource",
      //   description: "Plataforma interactiva de visualización de datos que analiza información de fósiles de dinosaurios del Museo de Historia Natural. Desarrollada con Python y Plotly, incluye gráficos dinámicos e insights estadísticos 🦕.",
      //   image: { src: ankylosaurus, alt: "Two ankylosaurus" },
      //   link: "https://dinosource.onrender.com",
      //   github: "https://github.com/NelbaBarreto/dinosource_dash",
      //   tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      // },
      // {
      //   id: 2,
      //   name: "Conoceme a través de la Música",
      //   description: "Pipeline completo de ingeniería de datos en Azure que analiza hábitos de escucha musical personal usando datos de la API de Spotify. Incluye procesos ETL automatizados, almacenamiento en data lake y dashboards interactivos 🎶.",
      //   image: { src: spotify, alt: "Spotify App Logo" },
      //   link: `${process.env.REACT_APP_HOST}/spotify`,
      //   tags: ["azure data factory", "azure data lake", "python"]
      // },
    ],
    view_on_github: "Ver en GitHub",
    certifications: "Certificaciones",
    certifications_main: "Certificaciones de la industria en arquitectura cloud y bases de datos, además de formación especializada en deep learning.",
    view_credential: "Ver credencial",
    view_certificate: "Ver certificado",
    contact: "Contacto",
    or: "o",
    send_message: "¡Enviame un Mensaje!",
    name: "Nombre",
    name_placeholder: "Tu nombre",
    email: "Email",
    email_placeholder: "tu@email.com",
    message: "Mensaje",
    send: "Enviar",
    developed_by: "Desarrollado por Nelba Barreto"
  },
};
