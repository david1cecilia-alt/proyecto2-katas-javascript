// Ejercicio 12: Eliminar elementos duplicados de una lista y devolver una nueva lista con solo elementos únicos.

const duplicates = [
  'sushi','pizza','burger','potatoe','pasta','ice-cream',
  'pizza','chicken','onion rings','pasta','soda'
];

function removeDuplicates(list) {
  const uniqueList = [];

  for (let item of list) {
    if (!uniqueList.includes(item)) {
      uniqueList.push(item);
    }
  }

  return uniqueList;
}

console.log(removeDuplicates(duplicates));
