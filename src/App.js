import foto from "./img/foto.jpg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="h-80 rounded-full" alt="foto nelba barreto" />
        <h1 className="text-3xl font-bold">
          Hello! I'm Nelba Barreto
        </h1>
        <a
          className="underline text-blue-600 hover:text-blue-800"
          href="https://www.linkedin.com/in/nelba-barreto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </header>
    </div>
  );
}

export default App;
