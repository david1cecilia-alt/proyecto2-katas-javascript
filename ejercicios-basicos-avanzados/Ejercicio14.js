// Ejercicio 14: Contar la cantidad de veces que cada palabra aparece en una lista y devolver un objeto con las palabras como claves y sus conteos como valores.

const words = [
  'code','repeat','eat','sleep','code',
  'enjoy','sleep','code','enjoy','sleep','code'
];

function repeatCounter(list) {
  const counter = {};

  for (let word of list) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  return counter;
}

console.log(repeatCounter(words));
