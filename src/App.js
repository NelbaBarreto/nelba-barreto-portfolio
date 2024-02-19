import "./App.css";
import Descripcion from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-background-50 min-h-screen">
      <Navbar />
      <Descripcion />  
    </div>
  );
}

export default App;
