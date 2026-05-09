//Ejercicio 27: Dada una lista de series de dibujos animados con sus años de debut, encontrar la serie más antigua.

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestDebut = cartoons[0].debut; // Inicializamos con el primer año
let oldestCartoon = cartoons[0].name; // Inicializamos con el primer nombre

for (let i = 1; i < cartoons.length; i++) {
  if (cartoons[i].debut < oldestDebut) {
    oldestDebut = cartoons[i].debut;
    oldestCartoon = cartoons[i].name;
  }
}

console.log("La serie más antigua es:", oldestCartoon);


