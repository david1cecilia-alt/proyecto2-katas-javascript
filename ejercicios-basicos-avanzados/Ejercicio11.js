// Ejercicio 11: Calcular el promedio de una lista que contiene números y palabras,
// donde los números se consideran como su valor numérico y las palabras como su longitud.

const mixedElements = [
  6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"
];

function averageWord(list) {
  let sum = 0;

  for (let element of list) {
    if (typeof element === "number") {
      sum += element;
    } else {
      sum += element.length;
    }
  }

  return sum / list.length;
}

console.log(averageWord(mixedElements));
