
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

document.addEventListener('DOMContentLoaded', () => {
  initializeSearch();
});

