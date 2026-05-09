// ==============================
// 1.1 Evento click en el botón
// ==============================

// Seleccionamos el botón por su id
const button = document.getElementById('btnToClick');

// Añadimos el evento click
button.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});


// ==============================
// 1.2 Evento focus en el input con clase .focus
// ==============================

// Seleccionamos el input
const inputFocus = document.querySelector('.focus');

// Añadimos el evento focus
inputFocus.addEventListener('focus', (event) => {
    console.log('Valor del input (focus):', event.target.value);
});


// ==============================
// 1.3 Evento input en el input con clase .value
// ==============================

// Seleccionamos el input
const inputValue = document.querySelector('.value');

// Añadimos el evento input
inputValue.addEventListener('input', (event) => {
    console.log('Valor del input (input):', event.target.value);
});