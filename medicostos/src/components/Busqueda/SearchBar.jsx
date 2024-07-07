import React from "react";
import { useState } from "react";
import "./Busqueda.css";
import Autocompletar from "./Autocompletar";
import MedicationsList from "../MedicationsList";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <section id="busqueda">
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for medications..."
        />
        <MedicationsList query={query} />
      </div>
    </section>
  );
};

function scrollBusqueda() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("busqueda").style.marginTop = "400px";
  } else {
    document.getElementById("busqueda").style.marginTop = "20px";
  }
}

export default SearchBar;
