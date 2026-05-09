// Ejercicio 35: Lista de mutantes con sus poderes, buscar mutantes por poder y contar cuántos tienen ese poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let count = 0;

  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      count++;
    }
  }

  if (count > 0) {
    return `Se encontraron ${count} mutante(s) con el poder ${power}.`;
  } else {
    return `No se encontró ningún mutante con el poder ${power}.`;
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "magnetism"));
console.log(findMutantByPower(mutants, "invisibility"));
