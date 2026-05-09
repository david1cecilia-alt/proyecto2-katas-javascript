// EJERCICIO 2

// 1. Luke Skywalker cumple años
const jedi = { nombre: "Luke Skywalker", edad: 19 };

// Modificamos la edad
jedi.edad = 25;

console.log(jedi);

// -------------------------------------------

// 2. Presentación al estilo Leia Organa
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

// Concatenación de texto
let mensaje =
  "Soy " +
  nombre +
  " " +
  apellido +
  ", tengo " +
  edad +
  " años y soy una princesa de Alderaan.";

console.log(mensaje);

// -------------------------------------------

// 3. Calculando el coste total de sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

// Sumamos los precios
let precioTotalSables = sable1.precio + sable2.precio;

console.log("Precio total de los sables:", precioTotalSables);

// -------------------------------------------

// 4. Actualizando el precio final de las naves
let precioBaseGlobal = 10000;

// Modificamos el valor de la variable global
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

// Actualizamos el precio final de cada nave
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1);
console.log(nave2);
