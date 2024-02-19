import "./App.css";
import Descripcion from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-background-50 min-h-screen">
      <Navbar />
      <Descripcion />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
