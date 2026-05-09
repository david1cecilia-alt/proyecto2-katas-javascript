// Ejercicio 40: Funciones para encontrar el índice de un elemento en un array y eliminarlo usando splice.

// 1️⃣ Función para encontrar el índice
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no encuentra el texto
}

// 2️⃣ Función para eliminar un elemento usando splice y findArrayIndex
function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1); // elimina 1 elemento en la posición index
  }

  return array;
}

// 3️⃣ Array de ejemplo
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// 4️⃣ Ejemplos de prueba
console.log(findArrayIndex(mainCharacters, "Han Solo")); // 2
console.log(findArrayIndex(mainCharacters, "Rey")); // 4
console.log(findArrayIndex(mainCharacters, "Yoda")); // -1 (no existe)

console.log(removeItem(mainCharacters, "Leia")); 
// ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

console.log(removeItem(mainCharacters, "Yoda")); 
// No cambia el array porque no existe
