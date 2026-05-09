//Ejercicio 15: Filtrar y mostrar solo los productos que contienen la palabra "Camiseta" en su nombre.

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let product of products) {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}
