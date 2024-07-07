import NavBar from "./NavBar/NavBar";
import Portada from "./Portada/Portada";
import Busqueda from "./components/Busqueda/Busqueda";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "./components/Busqueda/SearchBar";
import ErrorBoundary from "./components/configs/ErrorBoundary";
import { Routes, Route } from "react-router-dom";
import Contacto from "./Contacto/Contacto";
import Mapa from "./Mapa/Mapa";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Portada />}></Route>
        <Route path="/contactanos" element={<Contacto />}></Route>
      </Routes>
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

export default App;
