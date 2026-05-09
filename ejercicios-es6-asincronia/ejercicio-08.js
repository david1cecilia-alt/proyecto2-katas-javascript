// Proyecto 2 - JavaScript Katas
// ES6 y Asincronía
// Ejercicio 8 - API Game of Thrones

const API_URL = 'https://thronesapi.com/api/v2/Characters';

// Seleccionamos elementos del DOM
const select = document.getElementById('character-list');
const img = document.querySelector('.character-image');

// Obtener datos de la API
fetch(API_URL)
  .then(response => response.json()) // convertimos la respuesta a JSON
  .then(characters => {
    
    // Llenamos el select con los nombres de los personajes
    characters.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl; // guardamos la URL de la imagen como value
      option.textContent = character.fullName; // texto visible
      select.appendChild(option);
    });

    // Mostrar la imagen del primer personaje por defecto
    if (characters.length > 0) {
      img.src = characters[0].imageUrl;
    }
  })
  .catch(error => console.error('Error al obtener los personajes:', error));

// Cambiar la imagen cuando se seleccione un personaje
select.addEventListener('change', () => {
  img.src = select.value; // usamos el value del option que contiene la URL de la imagen
});