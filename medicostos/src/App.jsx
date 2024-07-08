import React from "react";
import NavBar from "./NavBar/NavBar";
import Consejo from "./Consejo/Consejo";
import "./App.css";
import CardGrid from "./Consejo/CardGrid";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <CardGrid />
      </div>
    </>
  );
}

export default App;
