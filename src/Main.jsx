import "./App.css";
import React, { useState } from "react";
import { SectionContext, LanguageContext } from "./context.js";
import Descripcion from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/Footer.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Iguanodon from "./components/Iguanodon.jsx";
import Spotify from "./temp/Spotify.jsx";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mx-2 lg:mx-3">
          <Descripcion />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

const App = () => {
  const [section, setSection] = useState(0);
  const [language, setLanguage] = useState("es");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/iguanodon",
      element: <Iguanodon />
    },
    {
      path: "/spotify",
      element: <Spotify />
    }
  ]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <SectionContext.Provider value={{ section, setSection }}>
        <div className="bg-background-50 min-h-screen">
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </div >
      </SectionContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
