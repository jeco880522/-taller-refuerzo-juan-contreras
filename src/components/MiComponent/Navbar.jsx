// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/micomponente">Mi Componente</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/micontador">Mi Contador</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/misproductos">Mis Productos</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
