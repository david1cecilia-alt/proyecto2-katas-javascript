// Ejercicio 42: Intercambiar dos elementos en un array dado sus índices.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos temporalmente el valor de index1
  const temp = array[index1];
  
  // Intercambiamos los valores
  array[index1] = array[index2];
  array[index2] = temp;
  
  return array;
}

// Ejemplos de prueba
console.log(swap(fantasticFour, 0, 3));
// ["La cosa", "Mr. Fantástico", "La mujer invisible", "La antorcha humana"]

console.log(swap(fantasticFour, 1, 2));
// ["La cosa", "La mujer invisible", "Mr. Fantástico", "La antorcha humana"]
