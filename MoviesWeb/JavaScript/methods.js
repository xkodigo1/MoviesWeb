
export function openPopup(movie, popupElement) {
  // Título
  popupElement.querySelector('#popupTitle').textContent = movie.title;

  // Imagen
  const imageElement = popupElement.querySelector('#popupImage');

  // Controlador de errores para la imagen
  imageElement.onerror = function () {
    this.src = 'images/default.jpg'; // Imagen predeterminada si falla la carga.
    this.alt = 'Image not available';
  };

  // Resto de la información
  popupElement.querySelector('#popupSummary').textContent = movie.summary;
  popupElement.querySelector('#popupGenre').textContent = movie.genre.join(', ');
  popupElement.querySelector('#popupDuration').textContent = movie.duration;
  popupElement.querySelector('#popupReleaseDate').textContent = movie.releaseDate;
  popupElement.querySelector('#popupCast').textContent = movie.casting.join(', ');

  // Mostrar popup
  popupElement.classList.remove('hidden');
}

// Function to close the popup
export function closePopup(popupElement) {
  popupElement.classList.add('hidden');
}

import { movies } from '../Data/data.js';

// Render movies
export function renderMovies(moviesArray, container) {
  container.innerHTML = ''; // Clear previous content
  moviesArray.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="/MoviesWeb/images/${movie.image}" alt="${movie.title} poster">
      <h3>${movie.title}</h3>
      <p>Summary: ${movie.summary}</p>
      <p>Genre: ${movie.genre.join(', ')}</p>
      <p>Release Date: ${movie.releaseDate}</p>
    `;
    container.appendChild(movieCard);
  });
}

export function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  const moviesList = document.getElementById('moviesList');

  renderMovies(movies, moviesList);

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    new Promise((resolve) => {
      const filteredMovies = movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(query) ||
          movie.genre.some((g) => g.toLowerCase().includes(query)) ||
          movie.casting.some((c) => c.toLowerCase().includes(query))
        );
      });
      setTimeout(() => resolve(filteredMovies), 300); // Simulate API delay
    }).then((filteredMovies) => {
      renderMovies(filteredMovies, moviesList);
    });
  });
}