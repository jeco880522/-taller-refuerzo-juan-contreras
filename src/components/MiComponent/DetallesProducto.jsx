import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const DetallesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProducto(data);
      })
      .catch(error => {
        console.error(`Error al obtener detalles del producto con ID ${id}:`, error);
      });
  }, [id]);

  if (!producto) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <div className="card">
        <h3>{producto.title}</h3>
        <p>{producto.description}</p>
        <p className="price">Precio: ${producto.price}</p>
        <p>Descuento: {producto.discountPercentage}%</p>
        <p>Rating: {producto.rating}</p>
        <p>Stock: {producto.stock}</p>
        <p>Marca: {producto.brand}</p>
        <p>Categoría: {producto.category}</p>
      </div>
    </div>
  );
};

export default DetallesProducto;
