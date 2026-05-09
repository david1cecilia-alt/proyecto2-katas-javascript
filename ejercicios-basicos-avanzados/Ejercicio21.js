//Ejercicio 21: Dada una lista de usuarios con sus edades, imprimir los nombres de los usuarios que son menores de edad (menos de 18 años) y los que son mayores de edad (18 años o más).


console.log("Usuarios menores de edad:");
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    console.log(users[i].name);
  }
}

console.log("Usuarios mayores de edad:");
for (let i = 0; i < users.length; i++) {
  if (users[i].years >= 18) {
    console.log(users[i].name);
  }
}
