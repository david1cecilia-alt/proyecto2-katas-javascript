// 2.1 Inserto dinámicamente en un html un div vacío
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 Inserto dinámicamente en un html un div que contenga una p
const divConP = document.createElement('div');
const pDentro = document.createElement('p');

divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3 Inserto dinámicamente en un html un div que contenga 6 p utilizando un loop
const divCon6P = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divCon6P.appendChild(p);
}

document.body.appendChild(divCon6P);

// 2.4 Inserto dinámicamente con javascript en un html una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 Insert en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Creo una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (let app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll('.fn-remove-me');

elementosAEliminar.forEach(elemento => {
  elemento.remove();
});

// 2.8 Inserto una p con el texto 'Voy en medio!' entre los dos div
// Seleccionamos los dos primeros div del documento
const divs = document.querySelectorAll('div');

const pEnMedio = document.createElement('p');
pEnMedio.textContent = 'Voy en medio!';

// Insertomos el párrafo después del primer div
divs[0].after(pEnMedio);

// 2.9 Inserto p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
const divInsertHere = document.querySelectorAll('div.fn-insert-here');

divInsertHere.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});