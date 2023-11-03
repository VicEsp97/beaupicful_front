import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar.js";
import Contenido from "./components/Contenido.js"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Contenido/>
    </div>
  );
}

export default App;