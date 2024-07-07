import NavBar from "./NavBar/NavBar";
import Portada from "./Portada/Portada";
import Busqueda from "./Busqueda/Busqueda";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contacto from "./Contacto/Contacto";
import Mapa from "./Mapa/Mapa";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Portada />}></Route>
        <Route path="/contactanos" element={<Contacto />}></Route>
      </Routes>
    </>
  );
}

export default App;
