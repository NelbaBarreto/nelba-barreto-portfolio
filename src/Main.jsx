import "./App.css";
import React, { useState } from "react";
import { SectionContext } from "./context.js";
import Descripcion from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Certifications from "./components/Certifications.jsx";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      <div className="bg-background-50 min-h-screen">
        <Navbar />
        <div className="container">
          <div className="lg:m-0 mx-4">
            <Descripcion />
            <Projects />
            <Certifications />
            <Contact />
          </div>
        </div>
      </div>
    </SectionContext.Provider>
  );
}

export default App;
