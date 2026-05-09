// Ejercicio 22: Dada una lista de alimentos con sus propiedades (nombre, si es vegano o no), reemplazar todos los alimentos no veganos por frutas veganas de una lista dada.


const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true;
    fruitIndex++;
  }
}

console.log(foodSchedule);
