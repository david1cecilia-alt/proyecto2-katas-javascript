// EJERCICIO 4

// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Sacar a "Tendo" por consola atacando su posición
console.log(aldeanos[3]);

// 4.2 - Colocar "Cervasio" en el último lugar del array
aldeanos.push("Cervasio");
console.log(aldeanos);

// 4.3 - Cambiar el primer elemento por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);

// 4.4 - Darle la vuelta al array
aldeanos.reverse();
console.log(aldeanos);

// 4.5 - Cambiar "Narciso" por "Canela" usando un método de array
const indiceNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(indiceNarciso, 1, "Canela");
console.log(aldeanos);

// 4.6 - Imprimir el último elemento sin usar la posición explícita
console.log(aldeanos[aldeanos.length - 1]);
