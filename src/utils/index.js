import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";
import usa from "../img/icons8-usa-96.png";
import spain from "../img/icons8-spain-96.png";
import spotify from "../img/spotify.jpg";

export const languages = [
  { id: 0, label: "ES", value: "es", className: "p-2 rounded-tl-lg text-white rounded-bl-lg" },
  { id: 1, label: "EN", value: "en", className: "p-2 rounded-tr-lg text-white rounded-br-lg" }
];

export const resume_languages = [
  { id: 0, value: "EN", icon: usa, link: "https://drive.google.com/file/d/1CUVMWD6ANQf98Vj4evdk-sAx7glRB9wF/view?usp=sharing", texto: "English" },
  { id: 1, value: "ES", icon: spain, link: "https://drive.google.com/file/d/1nL-B00Vg5gQJsavHDSJwkypiK0n2wJeN/view?usp=sharing", texto: "Español"  }
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
  {
    id: 2,
    name: "Get to Know me Through Music",
    description: "Azure data engineering pipeline to analyze and visualize my music listening habits using data from the Spotify API 🎶. Under construction 🏗️.",
    image: { src: spotify, alt: "Spotify App Logo" },
    link: "https://nelbabarreto.com/spotify",
    tags: ["azure data factory", "azure data lake"]
  },
];
