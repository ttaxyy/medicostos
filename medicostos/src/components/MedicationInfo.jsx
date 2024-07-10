import React from "react";
import InfoCard from "./Card/InfoCard";

const MedicationInfo = ({ selectedMedication }) => {
  return (
    <div className="medications-info">
      {selectedMedication ? (
        <InfoCard key={selectedMedication.id} medication={selectedMedication} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MedicationInfo;
