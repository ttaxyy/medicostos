import NavBar from "./NavBar/NavBar";
import Portada from "./Portada/Portada";
import Busqueda from "./Busqueda/Busqueda";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "./components/SearchBar";
import ErrorBoundary from "./components/ErrorBoundary";
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
          <div className="App">
            <h1>Medications Search</h1>
            <SearchBar />
          </div>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
}

export default App;
