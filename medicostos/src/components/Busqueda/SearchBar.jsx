import React, { useState } from "react";
import "./2222.css";
import MedicationsList from "../MedicationsList";

const SearchBar = ({ setIsScrolled }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <section>
      <div className="busqueda">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar Medicamento..."
        />
      </div>
      <div className="med-list">
        {query && <MedicationsList query={query} />}
        {/* solo renderiza si la query no esta vacia */}
      </div>
    </section>
  );
};

export default SearchBar;
