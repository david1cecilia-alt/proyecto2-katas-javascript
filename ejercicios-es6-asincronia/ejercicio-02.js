// Proyecto 2 - JavaScript Katas
// ES6 y Asincronía
// Ejercicio 2


// 2.1

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);


// 2.2

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

const toyCopy = { ...toy };

console.log(toyCopy);


// 2.3

const pointsList2 = [54, 87, 99, 65, 32];

const combinedPoints = [...pointsList, ...pointsList2];

console.log(combinedPoints);


// 2.4

const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };

const mergedToy = { ...toy, ...toyUpdate };

console.log(mergedToy);


// 2.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);