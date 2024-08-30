import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";
import spotify from "../img/spotify.jpg";
import ibmDataScience from "../img/ibm_data_science.jpg"
import bigData from "../img/big_data.jpg";
import oracleSQL from "../img/oracle_sql.png";
import oracleDataScience from "../img/oracle_data_science.png";
import azureFundamentals from "../img/azure_fundamentals.png";

export const languages = [
  { id: 0, label: "Español", value: "es", className: "p-2 rounded-tl-lg text-white rounded-bl-lg" },
  { id: 1, label: "English", value: "en", className: "p-2 rounded-tr-lg text-white rounded-br-lg" }
];

export const images = [
  {
    original: ibmDataScience
  },
  {
    original: bigData
  },
  {
    original: oracleSQL
  },
  {
    original: oracleDataScience
  },
  {
    original: azureFundamentals
  }
];

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
