import React from "react";
import "./InfoCard.css";
import salcobrand from "../../assets/farmaciasSalcobrand.png";
import ecofarmacias from "../../assets/ecofarmacias.png";
import ahumada from "../../assets/farmaciasAhumada.png";
import farmaciasChile from "../../assets/farmaciasChile.png";
import drSimi from "../../assets/farmaciasDrSimi.png";
import bokita from "../../assets/farmaciasLaBokita.png";

const InfoCard = ({ medication }) => {
  const linkClick = () => {
    window.location.href = medication.urlMedicamento;
  };

  const mapClic = () => {
    window.location.href = medication.farmaciaDireccion;
  };

  const getFarmaciaImage = (farmaciaNombre) => {
    switch (farmaciaNombre) {
      case "Salcobrand":
        return salcobrand;
      case "Eco Farmacias":
        return ecofarmacias;
      case "Farmacias Ahumada":
        return ahumada;
      case "Farmacias Chile":
        return farmaciasChile;
      case "Farmacia Dr.Simi":
        return drSimi;
      case "Farmacia La Botika":
        return bokita;
      default:
        return null;
    }
  };

  return (
    <div className="a">
      <div className="b">
        <img
          className="imgMedicamento"
          src={medication.urlImagen}
          alt={medication.nombre}
        />
        <p> {medication.nombre}</p>
        <p>Precio: ${medication.precio}</p>

        <button className="botonMap" onClick={linkClick}>
          Ir a página web
        </button>
        <img
          className="map"
          src={getFarmaciaImage(medication.farmaciaNombre)}
          onClick={mapClic}
        />
      </div>
    </div>
  );
};

export default InfoCard;
