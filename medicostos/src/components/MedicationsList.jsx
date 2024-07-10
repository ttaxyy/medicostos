import { useEffect, useState } from "react";
import { useSearchMedications } from "../hooks/useSearchMedications";
import MedicationCard from "./Card/MedicationCard";
import LoadingSpinner from "./configs/LoadingSpinner";
import InfoCard from "./Card/InfoCard";
import "../../src/App.css";
import axios from "axios";

const medicamento = axios.create({});
const MedicationsList = ({ query }) => {
  const { data, error, isLoading } = useSearchMedications(query);

  const [selectedMedication, setSelectedMedication] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  useEffect(() => {
    console.log("Query changed:", query);
  }, [query]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  const medications = data || [];

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentMedications = medications.slice(startIndex, endIndex);

  const handleCardClick = (medication) => {
    setSelectedMedication(medication);
  };

  const handleNext = () => {
    if (endIndex < medications.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={`app-container ${selectedMedication ? "selected" : ""}`}>
      <div
        className={`medications-list ${selectedMedication ? "selected" : ""}`}
      >
        {currentMedications.map((medication, index) => (
          <MedicationCard
            key={medication.id}
            medication={medication}
            index={index}
            onClick={() => handleCardClick(medication)}
          />
        ))}
        <div className="pagination-controls">
          <button onClick={handlePrevious} disabled={startIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={endIndex >= medications.length}
          >
            Next
          </button>
        </div>
      </div>
      {selectedMedication && (
        <div className="medications-info">
          <InfoCard
            key={selectedMedication.id}
            medication={selectedMedication}
          />
        </div>
      )}
    </div>
  );
};

export default MedicationsList;
