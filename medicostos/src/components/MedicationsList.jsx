import { useEffect, useState } from "react";
import { useSearchMedications } from "../hooks/useSearchMedications";
import MedicationCard from "./Card/MedicationCard";
import LoadingSpinner from "./configs/LoadingSpinner";
import InfoCard from "./Card/InfoCard";

const MedicationsList = ({ query }) => {
  const { data, error, isLoading } = useSearchMedications(query);

  // Añadimos un estado para mantener la tarjeta seleccionada
  const [selectedMedication, setSelectedMedication] = useState(null);

  useEffect(() => {
    console.log("Query changed:", query);
  }, [query]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  const medications = data || [];

  // Función que se ejecuta al hacer clic en una tarjeta de medicación
  const handleCardClick = (medication) => {
    setSelectedMedication(medication); // Actualiza el estado de la tarjeta seleccionada
  };

  return (
    <>
      <div className="medications-list">
        {medications.map((medication, index) => (
          <MedicationCard
            key={medication.id}
            medication={medication}
            index={index}
            onClick={() => handleCardClick(medication)} // Agregamos un controlador de clic a cada tarjeta
          />
        ))}
      </div>
      <div className="medications-info">
        {selectedMedication && (
          <InfoCard
            key={selectedMedication.id}
            medication={selectedMedication} // Muestra la tarjeta de información solo si hay una tarjeta seleccionada
          />
        )}
      </div>
    </>
  );
};

export default MedicationsList;
