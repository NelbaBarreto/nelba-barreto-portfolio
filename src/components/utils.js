import spaceRace from "../img/space_race.jpg";
import gallimimus from "../img/gallimimus.jpg";

export const options = [
  { id: 0, label: "Home", href: "#home" },
  { id: 1, label: "Projects", href: "#projects" },
  { id: 2, label: "Certifications", href: "#certifications" },
  { id: 3, label: "Contact", href: "#contact" }
]

export const resume_languages = [
  { id: 0, value: "EN", text: "🇺🇸", link: "https://drive.google.com/file/d/1RlD3KLAWJ_cEL03NZqLks7rbvwZ_SCBP/view?usp=sharing" },
  { id: 1, value: "ES", text: "🇪🇸", link: "https://drive.google.com/file/d/10heteBeY3gdv7HbdE6R-biDSCdgyb06D/view?usp=sharing" }
]

export const projects = [
  {
    id: 0,
    name: "DinoSource",
    description: "Descriptive analysis of dinosaur data 🦕.",
    image: { src: gallimimus, alt: "A Gallimimus" },
    link: "https://dinosource.onrender.com",
    github: "https://github.com/NelbaBarreto/dinosource_dash",
    color: "bg-green-700",
    tags: ["python", "pandas", "plotly", "numpy", "tailwind"]
  },
  {
    id: 1,
    name: "Applied Data Science Capstone",
    description: "Final project to obtain the IBM Data Science Professional Certificate 🚀.",
    image: { src: spaceRace, alt: "A rocket" },
    link: "https://drive.google.com/file/d/1Ap3ipuKYhy5U0fSyYHcU8CuGoeewVLwm/view?usp=sharing",
    github: "https://github.com/NelbaBarreto/applied-data-science-capstone",
    color: "bg-green-700",
    tags: ["python", "pandas", "plotly", "numpy", "matplotlib", "seaborn", "jupyter notebook", "sql"]
  },

];
