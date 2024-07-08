import NavBar from "./NavBar/NavBar";
import Portada from "./Portada/Portada";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contacto from "./Contacto/Contacto";
import InfoCard from "./components/Card/InfoCard";

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
