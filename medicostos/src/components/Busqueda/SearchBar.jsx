import React, { useState } from "react";
import "./2222.css";
import MedicationsList from "../MedicationsList";
import MedicationInfo from "../MedicationInfo";

const SearchBar = ({ setIsScrolled }) => {
  const [query, setQuery] = useState("");
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMedicationSelect = (medication) => {
    setSelectedMedication(medication);
  };

  const handleCardClick = () => {
    setIsSelected(true);
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
      <div className={`app-container ${isSelected ? "selected" : ""}`}>
        <div className={`med-list ${isSelected ? "selected" : ""}`}>
          {query && (
            <MedicationsList
              query={query}
              onMedicationSelect={handleMedicationSelect}
              onCardClick={handleCardClick}
            />
          )}
        </div>
        <div className="medications-info">
          <MedicationInfo selectedMedication={selectedMedication} />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
