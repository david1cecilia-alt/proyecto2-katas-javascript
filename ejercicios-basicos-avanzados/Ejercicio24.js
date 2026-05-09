//Ejercicio 24: Dada una lista de personajes de una serie, crear una nueva lista que contenga solo los personajes que son humanos.

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = [];

for (let i = 0; i < characters.length; i++) {
  if (characters[i].species === "Human") {
    humanCharacters.push(characters[i]);
  }
}

console.log(humanCharacters);
