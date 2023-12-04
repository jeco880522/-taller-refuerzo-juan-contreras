import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MisProductos = () => {
  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState({ categoria: '', rating: null });

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
      })
      .catch(error => {
        console.error('Error al obtener datos del servidor local:', error);
      });
  }, []); 
  const productosFiltrados = productos.filter(producto => {
    const categoriaFiltrada = !filtros.categoria || producto.category === filtros.categoria;
    const ratingFiltrado = filtros.rating === null || producto.rating >= filtros.rating;
    return categoriaFiltrada && ratingFiltrado;
  });

  return (
    <div>
      <h2>Mis Productos</h2>
      {/* Controles de filtro */}
      <div>
        <label>Categoría:</label>
        <select onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}>
          <option value="">Todos</option>
          {/* Añade opciones de categoría según tus datos */}
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          {/* ... más opciones ... */}
        </select>

        <label>Rating:</label>
        <select onChange={(e) => setFiltros({ ...filtros, rating: parseFloat(e.target.value) })}>
          <option value="">Todos</option>
          <option value="4">4 estrellas o más</option>
          <option value="3">3 estrellas o más</option>
          {/* ... más opciones ... */}
        </select>
      </div>

      {/* Lista de productos filtrados */}
      <div className="card-container">
        {productosFiltrados.map(producto => (
          <div className="card">
          <Link key={producto.id} to={`/taller-refuerzo-JuanPablo-Contreras/detallesproducto/${producto.id}`} >
            <img src={producto.thumbnail} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <p className="price">Precio: ${producto.price}</p>
            <p>Descuento: {producto.discountPercentage}%</p>
            <p>Rating: {producto.rating}</p>
            <p>Stock: {producto.stock}</p>
            <p>Marca: {producto.brand}</p>
            <p>Categoría: {producto.category}</p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisProductos;
