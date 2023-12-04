import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/login">Iniciar sesion</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/micomponente">Mi Componente</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/micontador">Mi Contador</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/misproductos">Mis Productos</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/micontadorusereducer">Mi Contador Reducer</Link></li>
        <li><Link to="/taller-refuerzo-JuanPablo-Contreras/mitodolist">MiTodoList</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
