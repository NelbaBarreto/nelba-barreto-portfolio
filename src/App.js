import foto from "./img/foto.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="foto nelba barreto" />
        <p>
          Hello! I am Nelba Barreto.
        </p>
        <a
          className=""
          href="https://www.linkedin.com/in/nelba-barreto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
