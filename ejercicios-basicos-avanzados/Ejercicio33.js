// Ejercicio 33: Crear un objeto que almacene países y sus capitales, y una función para obtener la capital dado el país.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return "Lo siento, no tengo registrada la capital de ese país.";
  }
}

console.log(getCapital("Spain"));
console.log(getCapital("France"));
console.log(getCapital("Brazil"));
