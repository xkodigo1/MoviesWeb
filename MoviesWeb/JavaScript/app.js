// // Importa el array de películas desde data.js
// import { movies } from "../Data/data.js";

// // // Importa la función para crear las cartas desde methods.js
// // import { renderMovies } from "./methods.js";

// // // Selecciona el contenedor donde irán las cartas
// // const movieContainer = document.getElementById("movie-container");

// // // Llama a la función y pasa los datos y el contenedor como parámetros
// // renderMovies(movies, movieContainer);
// import { showPopup, renderMovies, movies } from '../JavaScript/methods.js';

// // Ahora puedes usarlas
// showPopup(1);
// renderMovies(movies);
// app.js
import { renderMovies, openPopup, closePopup } from './methods.js';
import { movies } from '../Data/data.js';

// DOM Elements
const movieContainer = document.getElementById('movieContainer');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

// Render movie cards
renderMovies(movies, movieContainer);

// Event listener for "More Information" buttons
movieContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('info-button')) {
    const movieIndex = event.target.dataset.index;
    openPopup(movies[movieIndex], popup);
  }
});

// Event listener to close popup
closePopupButton.addEventListener('click', () => {
  closePopup(popup);
});

import { initializeSearch } from './methods.js';

// Llama a la función para inicializar la barra de búsqueda
initializeSearch();
