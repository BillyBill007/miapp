import React from 'react';

function Ficha({ nombre, raza }) {
  return (
    <div>
      <h2>Ficha del animal</h2>
      <p>Nombre: {nombre}</p>
      <p>Raza: {raza}</p>
    </div>
  );
}

export default Ficha;
