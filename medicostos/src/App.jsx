import NavBar from "./NavBar/NavBar";
import Portada from "./Portada/Portada";
import Busqueda from "./components/Busqueda/Busqueda";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "./components/Busqueda/SearchBar";
import ErrorBoundary from "./components/configs/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <NavBar />
      <Portada />
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

export default App;
