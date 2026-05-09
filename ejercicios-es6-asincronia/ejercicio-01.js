// Proyecto 2 - JavaScript Katas
// Bloque: ES6+
// Ejercicio 1 - Destructuring



// 1.1 Object Destructuring

const game = { 
  title: 'The Last of Us 2', 
  gender: ['action', 'zombie', 'survival'], 
  year: 2020 
};

const { title, gender, year } = game;

console.log('1.1');
console.log(title);
console.log(gender);
console.log(year);



// 1.2 Array Destructuring

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log('1.2');
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);



// 1.3 Destructuring en función

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

const { name, race } = animalFunction();

console.log('1.3');
console.log(name);
console.log(race);



// 1.4 Destructuring objeto + array interno

const car = { 
  name: 'Mazda 6', 
  itv: [2015, 2011, 2020] 
};

const { name: carName, itv } = car;
const [year1, year2, year3] = itv;

console.log('1.4');
console.log(carName);
console.log(year1);
console.log(year2);
console.log(year3);