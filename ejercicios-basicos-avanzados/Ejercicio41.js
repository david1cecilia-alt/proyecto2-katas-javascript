// Ejercicio 41: Simular el lanzamiento de un dado de N caras y devolver el resultado aleatorio.

function rollDice(numCaras) {
  const resultado = Math.floor(Math.random() * numCaras) + 1;
  return resultado;
}

// Ejemplos de prueba
console.log(rollDice(6));  // Dado normal de 6 caras
console.log(rollDice(20)); // Dado de 20 caras
console.log(rollDice(100)); // Dado de 100 caras
