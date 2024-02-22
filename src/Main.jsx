import "./App.css";
import React, { useState } from "react";
import { SectionContext } from "./context.js";
import Descripcion from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      <div className="bg-background-50 min-h-screen">
        {/* <Navbar /> */}
        <Descripcion />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </SectionContext.Provider>
  );
}

export default App;
