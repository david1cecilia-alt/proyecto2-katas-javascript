//Ejercicio 17: Iterar sobre las propiedades de un objeto alienígena e imprimir cada propiedad junto con su valor.

const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};

for (let property in alien) {
  console.log(`La propiedad ${property} tiene cómo valor: ${alien[property]}`);
}
