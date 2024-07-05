import "./Resultado.css";
import Card from "./components/Card/Card";
import { useState } from "react";

const cardData = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZYzHh3cUHSPMI0Hj9dVhZmYmNoqHy1b6mg&s",
    altText: "foto tarjeta",
    title: "Paracetamol",
    subtitle: "Laboratorio de Chile",
    precio: "$1800",
    bgColor: "#FFA4A4", // Color de fondo
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Logotipo_Cruz_Verde.svg",
    altText: "foto tarjeta",
    title: "Paracetamol",
    subtitle: "Laboratorio de Chile",
    precio: "$2500",
    bgColor: "#C1FFD7", // Color de fondo
  },
  {
    imgSrc:
      "https://coolebra438e763272e548a49834e9df30ec2cc5150413-dev.s3.amazonaws.com/tienda/kO21vTB2fZ_logo.png",
    altText: "foto tarjeta",
    title: "Paracetamol",
    subtitle: "Laboratorio de Chile",
    precio: "$5000",
    bgColor: "#C1E4FF", // Color de fondo
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Salcobrand.svg/1200px-Logo_Salcobrand.svg.png",
    altText: "foto tarjeta",
    title: "Paracetamol",
    subtitle: "Laboratorio de Chile",
    precio: "$10000",
    bgColor: "#435EBC", // Color de fondo
  },

  {
    imgSrc:
      "https://coolebra438e763272e548a49834e9df30ec2cc5150413-dev.s3.amazonaws.com/tienda/kO21vTB2fZ_logo.png",
    altText: "foto tarjeta",
    title: "Paracetamol",
    subtitle: "Laboratorio de Chile",
    precio: "$5000",
    bgColor: "#C1E4FF", // Color de fondo
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Salcobrand.svg/1200px-Logo_Salcobrand.svg.png",
    altText: "foto tarjeta",
    title: "Paracetamol",
    subtitle: "Laboratorio de Chile",
    precio: "$10000",
    bgColor: "#435EBC", // Color de fondo
  },
];

const Resultado = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(cardData.length / itemsPerPage)
    );
  };

  const handlePrevPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(cardData.length / itemsPerPage)) %
        Math.ceil(cardData.length / itemsPerPage)
    );
  };

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return cardData.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentItems();

  return (
    <div className="app">
      <div className="card-container">
        {currentItems.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            altText={card.altText}
            title={card.title}
            subtitle={card.subtitle}
            precio={card.precio}
            bgColor={card.bgColor} // Pasar el color de fondo
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Resultado;
