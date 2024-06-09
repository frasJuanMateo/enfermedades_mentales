import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="LogoITR-60.jpeg" alt="Instituto Técnico Renault" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/grupo1">Grupo 1</Link></li>
            <li><Link to="/grupo2">Grupo 2</Link></li>
            <li><Link to="/grupo3">Grupo 3</Link></li>
            <li><Link to="/grupo4">Grupo 4</Link></li>
            <li><Link to="/grupo5">Grupo 5</Link></li>
            <li><Link to="/grupo6">Grupo 6</Link></li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;