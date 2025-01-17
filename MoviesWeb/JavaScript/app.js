
import { movies } from '../Data/data.js';
import { displayMovies, searchMovies } from '../JavaScript/methods.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('movies-container');
  const searchBar = document.getElementById('search-bar');

  // Event listener para la barra de búsqueda
  searchBar.addEventListener('input', () => {
    const query = searchBar.value;
    searchMovies(movies, query)
      .then(filteredMovies => {
        displayMovies(container, filteredMovies);
      })
      .catch(error => {
        container.innerHTML = `<p>${error}</p>`;
      });
  });

  // Mostrar todas las películas al cargar la página
  displayMovies(container, movies);
});

