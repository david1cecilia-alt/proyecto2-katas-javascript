// Array dado
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Seleccionamos el contenedor donde irá la lista
const container = document.getElementById("albumsContainer");

// Creamos la lista ul
const ul = document.createElement("ul");

// Recorremos el array y creamos los li
albums.forEach(album => {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
});

// Insertamos la lista en el contenedor
container.appendChild(ul);