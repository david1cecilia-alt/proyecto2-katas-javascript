//Ejercicio 13 : Buscar un nombre en una lista y devolver un objeto con la posición si se encuentra, o false si no.

const names = [
  'Peter','Steve','Tony','Natasha','Clint',
  'Logan','Xabier','Bruce','Peggy','Jessica','Marc'
];

function nameFinder(nameList, name) {
  const index = nameList.indexOf(name);

  if (index !== -1) {
    return { found: true, position: index };
  } else {
    return false;
  }
}

console.log(nameFinder(names, "Tony"));