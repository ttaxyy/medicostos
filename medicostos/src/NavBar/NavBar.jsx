import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <header>
//       <div className="display-pc texto-logo">
//         <a href="#">
//           <img src={logo} alt="logo" className="icon-pc" />
//           Medicostos
//         </a>
//       </div>
//       <div className="display-mobile">
//         <a href="index.html">
//           <img src={logo} alt="logo" className="icon-mobile" />
//         </a>
//       </div>
//       <nav className="display-pc">
//         <a href="#">Inicio</a>
//         <a href="#">Consejos</a>
//         <a href="#">Contáctanos</a>
//       </nav>
//       <div className="display-mobile">
//         <button onclick="abrir_nav()" className="btn-empty">
//           <img src="../assets/menu" className="icon-mobile" />
//         </button>
//       </div>
//     </header>
//   );
// }

function NavBar() {
  const [menu, setMenu] = useState("inicio");

  return (
    <header>
      <div className="display-pc texto-logo">
        <a onClick={() => setMenu("inicio")}>
          <img src={logo} alt="logo" className="icon-pc" />
          <Link to="/" style={{ textDecoration: "none" }}>
            Medicostos
            {menu === "inicio" ? <hr /> : <></>}
          </Link>
        </a>
      </div>
      <div className="display-mobile">
        <a href="index.html">
          <img src={logo} alt="logo" className="icon-mobile" />
        </a>
      </div>
      <nav className="display-pc">
        <a onClick={() => setMenu("inicio")}>
          <Link to="/">
            Inicio
            {menu === "inicio" ? <hr /> : <></>}
          </Link>
        </a>
        <a onClick={() => setMenu("consejos")}>
          <Link to="/consejos">
            Consejos
            {menu === "consejos" ? <hr /> : <></>}
          </Link>
        </a>
        <a onClick={() => setMenu("contactanos")}>
          <Link to="/contactanos" style={{ textDecoration: "none" }}>
            Contactanos
            {menu === "contactanos" ? <hr /> : <></>}
          </Link>
        </a>
      </nav>
      <div className="display-mobile">
        <button onclick="abrir_nav()" className="btn-empty">
          <img src="../assets/menu" className="icon-mobile" />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
