import React from "react";
import "../Card/Card.css";

// Agregamos la propiedad onClick para manejar el evento de clic
const MedicationCard = ({ medication, index, onClick }) => {
  const backgroundColor = index % 2 === 0 ? "var(--aqua)" : "var(--naranja)";

  return (
    <div className="card" style={{ backgroundColor }} onClick={onClick}>
      <img
        src={medication.farmaciaUrlImg}
        alt={medication.nombre}
        className="imgcard"
      />
      <div className="card-content">
        <div className="nomCom">
          <h2 className="mNombre">{medication.nombre}</h2>
          <p>{medication.complemento}</p>
        </div>
        <p className="precio">Precio: ${medication.precio}</p>
      </div>
    </div>
  );
};

export default MedicationCard;
