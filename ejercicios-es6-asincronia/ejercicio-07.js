// Proyecto 2 - JavaScript Katas
// ES6 y Asincronía
// Ejercicio 7 - Filtrar RPG y calcular media de score

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
];

// 7.1 Filtramos solo los RPG
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

console.log('Videojuegos RPG:', rpgGames);

// Calculamos la media de los scores de los RPG
const averageRpgScore =
  rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;

console.log('Media de los scores de RPG:', averageRpgScore);