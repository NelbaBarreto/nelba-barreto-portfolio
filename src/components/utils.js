import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";
import usa from "../img/icons8-usa-96.png";
import spain from "../img/icons8-spain-96.png";
// import spotify from "../img/spotify.jpeg";

export const options = [
  { id: 0, label: "Home", href: "#home" },
  { id: 1, label: "Projects", href: "#projects" },
  { id: 2, label: "Certifications", href: "#certifications" },
  { id: 3, label: "Contact", href: "#contact" }
]

export const resume_languages = [
  { id: 0, value: "EN", icon: usa, link: "https://drive.google.com/file/d/1RlD3KLAWJ_cEL03NZqLks7rbvwZ_SCBP/view?usp=sharing", texto: "English" },
  { id: 1, value: "ES", icon: spain, link: "https://drive.google.com/file/d/10heteBeY3gdv7HbdE6R-biDSCdgyb06D/view?usp=sharing", texto: "Español"  }
]

export const projects = [
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
  /*{
    id: 2,
    name: "Get to Know me Through Music",
    description: "Azure data engineering pipeline to analyze and visualize my music listening habits using data from the Spotify API.",
    image: { src: spotify, alt: "Spotify App Logo" },
    link: "#",
    github: "#",
    tags: ["azure"]
  },*/
];
