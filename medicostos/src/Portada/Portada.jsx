import React from "react";
import "./Portada.css";
import farmacia from "../assets/farmacia.jpg";
import Busqueda from "../components/Busqueda/Busqueda";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "../components/Busqueda/SearchBar";
import ErrorBoundary from "../components/configs/ErrorBoundary";

const queryClient = new QueryClient();

function Portada() {
  return (
    <>
      <div id="portada">
        <img id="imagenPortada" src={farmacia} />
        <div id="lema">
          <b>Nuestra meta es informar a las personas: </b>
          <br />
          <span>
            Para que tomen decisiones informadas sobre dónde comprar sus
            medicamentos
          </span>
        </div>
      </div>
      <Busqueda />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <div className="card-list">
            <SearchBar />
          </div>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
}

export default Portada;
