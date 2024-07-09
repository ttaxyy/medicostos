import React, { useState } from "react";
import Consejo from "./Consejo";
import "./CardGrid.css";

const CardGrid = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      title: "Caja Los Andes",
      content:
        "Con tu tarjeta de Caja Los Andes, obtén descuentos exclusivos en medicamentos todos los días de la semana",
      moreContent:
        "Aprovecha los beneficios de Caja Los Andes y ahorra en la compra de tus medicamentos en farmacias adheridas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Logotipo_Caja_Los_Andes.svg",
    },
    {
      title: "Los Héroes",
      content:
        "Con tu tarjeta de Los Héroes, disfruta de descuentos especiales en medicamentos los días martes y jueves.",
      moreContent:
        "Los Héroes te ayuda a cuidar tu salud con descuentos en medicamentos en farmacias seleccionadas.",
      image: "https://www.losheroes.cl/img/logo_app_videollamada.png",
    },
    {
      title: "BCI",
      content:
        "Con tu tarjeta BCI, obtén descuentos en medicamentos los días lunes y miércoles.",
      moreContent:
        "Ahorra en tus compras de medicamentos utilizando tu tarjeta BCI en farmacias adheridas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bci_Logotype.svg/2560px-Bci_Logotype.svg.png",
    },
    {
      title: "Santander",
      content:
        "Santander te ofrece descuentos exclusivos en medicamentos cada fin de semana.",
      moreContent:
        "Con tu tarjeta Santander, tienes descuento en medicamentos los días viernes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png",
    },
    {
      title: "BancoEstado",
      content:
        "Aprovecha los beneficios de BancoEstado y ahorra en tus medicamentos en farmacias asociadas.",
      moreContent:
        "Con tu tarjeta BancoEstado, disfruta de descuentos en medicamentos los días lunes y viernes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_BancoEstado.svg/2560px-Logo_BancoEstado.svg.png",
    },
    {
      title: "Salcobrand",
      content:
        "Salcobrand te ofrece ahorros en la compra de tus medicamentos todos los días de la semana.",
      moreContent:
        "En Salcobrand, disfruta de descuentos especiales en medicamentos presentando tu tarjeta de beneficios.",
      image: "https://na.kimbicdns.com/cl/data/44/logo.png?t=1720012230",
    },
  ];

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Consejo
          key={index}
          {...card}
          expanded={expandedCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default CardGrid;
