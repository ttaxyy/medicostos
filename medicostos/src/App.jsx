import React from "react";
import NavBar from "./NavBar/NavBar";
import Consejo from "./Consejo/Consejo";
import "./App.css";
import CardGrid from "./Consejo/CardGrid";
import { Routes, Route } from "react-router-dom";
import Contacto from "./Contacto/Contacto";
import Mapa from "./Mapa/Mapa";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <CardGrid />
      </div>
      <Routes>
        <Route path="/" element={<Portada />}></Route>
        <Route path="/contactanos" element={<Contacto />}></Route>
      </Routes>
    </>
  );
}

export default App;
