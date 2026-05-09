// Proyecto 2 - JavaScript Katas
// ES6 y Asincronía
// Ejercicio 9 - Pokémon aleatorio (1ª generación)

const MAX_POKEMON = 151; // primera generación
const imageElement = document.querySelector('.random-image');

// Generamos un número aleatorio entre 1 y 151
const randomId = Math.floor(Math.random() * MAX_POKEMON) + 1;

// Construimos la URL usando el ID aleatorio
const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

// Petición fetch a la PokeAPI
fetch(url)
  .then(response => response.json())
  .then(pokemon => {
    // Elegimos la imagen que más nos guste (sprites.front_default es clásica)
    imageElement.src = pokemon.sprites.front_default;

    // Opcional: imprimir info en consola
    console.log('Pokémon:', pokemon.name);
    console.log('Sprites disponibles:', pokemon.sprites);
  })
  .catch(error => console.error('Error al obtener Pokémon:', error));