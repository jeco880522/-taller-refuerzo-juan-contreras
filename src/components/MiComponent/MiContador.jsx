// src/components/MiComponents/MiContador.js
import React, { useState } from 'react';

const MiContador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Mi Contador</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </div>
  );
};

export default MiContador;
