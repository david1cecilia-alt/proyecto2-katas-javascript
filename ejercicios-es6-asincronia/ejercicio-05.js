// Proyecto 2 - JavaScript Katas
// ES6 y Asincronía
// Ejercicio 5 - Filtrar streamers por input

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

// Seleccionamos el input usando el atributo data-function
const input = document.querySelector('[data-function="toFilterStreamers"]');

// Añadimos un listener para cuando el usuario escriba
input.addEventListener('input', () => {
  const value = input.value.toLowerCase(); // convertimos a minúsculas para ignorar mayúsculas/minúsculas

  // Filtramos los streamers cuyo nombre incluya el valor escrito
  const filteredStreamers = streamers.filter(streamer =>
    streamer.name.toLowerCase().includes(value)
  );

  console.log(filteredStreamers);
});