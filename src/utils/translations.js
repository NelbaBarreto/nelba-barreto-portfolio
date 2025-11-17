import spaceRace from "../img/space_race.jpg";
import ankylosaurus from "../img/ankylosaurus.jpg";
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
    resume_link: "https://drive.google.com/file/d/1P5dwtf7A_mR2kzzcIa7wWzA1DRHavVT2/view?usp=sharing",
    greeting: "Hello! I'm",
    description: [
      "I'm a Computer Engineer with 6+ years of experience in technology. I love solving problems and turning data into meaningful solutions.",
    ],
    from: "From",
    projects: "Projects",
    projects_main: "",
    projects_list: [
      {
        id: 0,
        name: "Applied Data Science Capstone",
        description: "Comprehensive data science project analyzing SpaceX launch data using machine learning algorithms to predict successful launches. Features advanced data visualization and statistical analysis 🚀.",
        image: { src: spaceRace, alt: "A rocket" },
        link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
        github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
        tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      },
      {
        id: 1,
        name: "DinoSource",
        description: "Interactive data visualization platform analyzing dinosaur fossil data from the Natural History Museum. Built with Python and Plotly, featuring dynamic charts and statistical insights 🦕.",
        image: { src: ankylosaurus, alt: "Two ankylosaurus" },
        link: "https://dinosource.onrender.com",
        github: "https://github.com/NelbaBarreto/dinosource_dash",
        tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      },
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
      "Soy Ingeniera Informática con más de 6 años de experiencia en tecnología. Me encanta resolver problemas y convertir datos en soluciones significativas.",
    ],
    from: "De",
    projects: "Proyectos",
    projects_main: "",
    projects_list: [
      {
        id: 0,
        name: "Applied Data Science Capstone",
        description: "Proyecto integral de ciencia de datos que analiza datos de lanzamientos de SpaceX usando algoritmos de machine learning para predecir lanzamientos exitosos. Incluye visualización avanzada de datos y análisis estadístico 🚀.",
        image: { src: spaceRace, alt: "A rocket" },
        link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
        github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
        tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
      },
      {
        id: 1,
        name: "DinoSource",
        description: "Plataforma interactiva de visualización de datos que analiza información de fósiles de dinosaurios del Museo de Historia Natural. Desarrollada con Python y Plotly, incluye gráficos dinámicos e insights estadísticos 🦕.",
        image: { src: ankylosaurus, alt: "Two ankylosaurus" },
        link: "https://dinosource.onrender.com",
        github: "https://github.com/NelbaBarreto/dinosource_dash",
        tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
      },
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
