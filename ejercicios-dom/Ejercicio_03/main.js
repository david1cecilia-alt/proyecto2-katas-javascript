// 1.1 Crear una lista ul > li con el array countries

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Creamos el ul
const ulCountries = document.createElement('ul');

// Recorremos el array
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});

// Añadimos la lista al body
document.body.appendChild(ulCountries);


// 1.2 Eliminar el elemento con la clase .fn-remove-me

const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();


// 1.3 Crear una lista dentro del div data-function="printHere"

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// Seleccionamos el div por atributo
const printDiv = document.querySelector('[data-function="printHere"]');

// Creamos el ul
const ulCars = document.createElement('ul');

cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});

// Insertamos el ul dentro del div
printDiv.appendChild(ulCars);


// 1.4 Crear divs con h4 e img dinámicamente

const countriesWithImages = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// Contenedor general para poder manipularlos después
const container = document.createElement('div');
container.id = 'countries-container';

countriesWithImages.forEach(country => {

    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = country.title;

    const img = document.createElement('img');
    img.src = country.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);

    container.appendChild(div);
});

document.body.appendChild(container);


// 1.5 Botón que elimina el último div creado
const deleteLastButton = document.createElement('button');
deleteLastButton.textContent = 'Eliminar último elemento';

deleteLastButton.addEventListener('click', () => {
    if (container.lastElementChild) {
        container.lastElementChild.remove();
    }
});

document.body.appendChild(deleteLastButton);


// 1.6 Botón en cada div que elimina ese mismo elemento

// Recorremos nuevamente los divs dentro del contenedor
const allDivs = container.querySelectorAll('div');

allDivs.forEach(div => {

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar este elemento';

    deleteButton.addEventListener('click', () => {
        div.remove();
    });

    div.appendChild(deleteButton);
});