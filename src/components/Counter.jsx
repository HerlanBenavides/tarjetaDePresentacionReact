import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [nombre, setNombre] = useState("Herlan");

  const handlePLus = () => {
    if (counter + 1 <= 10) {
      setCounter(counter + 1);
    }
  };
  const handleMenos = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
    }
  };
  const handleNombre = () => setNombre(nombre + " Herlan");
  const handleNombreVacio = () => setNombre(" ");
  const handleNombreCompleto = () => setNombre(nombre + " Benavides");
  console.log();
  return (
    <div>
      <h1>{counter}</h1>
      <h2>{nombre}</h2>

      <button onClick={handlePLus}>+</button>
      <button onClick={handleMenos}>-</button>
      <button onClick={handleNombreVacio}>Limpiar Nombre</button>
      <button onClick={handleNombre}>Nombre</button>
      <button onClick={handleNombreCompleto}>Apellido</button>
    </div>
  );
};

export default Counter;
