// // JavaScript/methods.js
// // Elementos del DOM
// const searchBar = document.getElementById("searchBar");
// const resultContainer = document.getElementById("result");
// const popup = document.getElementById("popup");
// const closePopup = document.getElementById("closePopup");
// // Función para generar las cartas
// export function createMovieCards(movies, container) {
//     movies.forEach((movie) => {
//       // Crear el contenedor principal de la carta
//       const card = document.createElement("div");
//       card.className = "movie-card";
  
//       // Crear el contenido de la carta, incluyendo la imagen
//       card.innerHTML = `
//         <img src="/MoviesWeb/images/${movie.image}" alt="${movie.title}">
//         <div class="content">
//           <h2>${movie.title}</h2>
//           <p>${movie.summary}</p>
//           <p class="genre">Genres: ${movie.genre.join(", ")}</p>
//           <p class="release-date">Release Date: ${movie.releaseDate}</p>
//           <p class="duration">Duration: ${movie.duration}</p>
//           <p class="actors">Cast: ${movie.casting.join(", ")}</p>
//         </div>
//       `;
  
//       // Agregar la carta al contenedor principal
//       container.appendChild(card);
//     });
//   }

// import { movies } from '/MoviesWeb/Data/data.js';

// // Función para buscar películas
// function searchMovies(data, query) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const filteredMovies = data.filter(movie =>
//         movie.title.toLowerCase().includes(query.toLowerCase())
//       );

//       if (filteredMovies.length > 0) {
//         resolve(filteredMovies);
//       } else {
//         reject("No se encontraron resultados.");
//       }
//     }, 500); // Simula un retraso
//   });
// }

// // Escuchar eventos de entrada en el campo de búsqueda
// searchBar.addEventListener("input", () => {
//   const query = searchBar.value.trim();

//   // Limpiar resultados si no hay texto
//   if (!query) {
//     resultContainer.innerHTML = "";
//     return;
//   }

//   // Llamar a la función de búsqueda
//   searchMovies(movies, query)
//     .then(movies => {
//       resultContainer.innerHTML = movies
//         .map(
//           movie => `
//           <div class="movie-item">
//             <h3>${movie.title}</h3>
//             <p>Género: ${movie.genre}</p>
//           </div>
//         `
//         )
//         .join("");
//     })
//     .catch(error => {
//       resultContainer.innerHTML = `<p>${error}</p>`;
//     });
// });

// // Campos del popup
// const popupTitle = document.getElementById("popupTitle");
// const popupGenre = document.getElementById("popupGenre");
// const popupDescription = document.getElementById("popupDescription");
// const popupReleaseDate = document.getElementById("popupReleaseDate");
// const popupActors = document.getElementById("popupActors");
// const popupDuration = document.getElementById("popupDuration");
// Elementos del DOM
// const searchBar = document.getElementById("searchBar");
// const resultContainer = document.getElementById("result");
// const popup = document.getElementById("popup");
// const closePopup = document.getElementById("closePopup");

// // Campos del popup
// const popupTitle = document.getElementById("popupTitle");
// const popupGenre = document.getElementById("popupGenre");
// const popupDescription = document.getElementById("popupDescription");
// const popupReleaseDate = document.getElementById("popupReleaseDate");
// const popupActors = document.getElementById("popupActors");
// const popupDuration = document.getElementById("popupDuration");

// // Mostrar las películas filtradas
// export function renderMovies(movies) {
//   resultContainer.innerHTML = data
//     .map(
//       movie => `
//       <div class="movie-item">
//         <img src="${movie.image}" alt="${movie.title}" />
//         <h3>${movie.title}</h3>
//         <p>${movie.description}</p>
//         <button onclick="showPopup(${movie.id})">Más información</button>
//       </div>
//     `
//     )
//     .join("");
// }

// // Mostrar el popup
// function showPopup(movieId) {
//   const movie = movies.find(m => m.id === movieId);
//   if (movie) {
//     popupTitle.textContent = movie.title;
//     popupGenre.textContent = movie.genre;
//     popupDescription.textContent = movie.description;
//     popupReleaseDate.textContent = movie.releaseDate;
//     popupActors.textContent = movie.actors;
//     popupDuration.textContent = movie.duration;
//     popup.classList.remove("hidden");
//   }
// }

// // Cerrar el popup
// closePopup.addEventListener("click", () => {
//   popup.classList.add("hidden");
// });

// // Filtrar películas
// searchBar.addEventListener("input", () => {
//   const query = searchBar.value.trim().toLowerCase();
//   if (!query) {
//     resultContainer.innerHTML = "";
//     return;
//   }
//   const filteredMovies = movies.filter(movie =>
//     movie.title.toLowerCase().includes(query)
//   );
//   renderMovies(filteredMovies);
// });

// // Renderizar todas las películas al inicio
// renderMovies(movies);
// methods.js

// Function to render movies
export function renderMovies(movies, container) {
  container.innerHTML = '';
  movies.forEach((movie, index) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img src="/MoviesWeb/images/${movie.image}" alt="${movie.title} poster" class="movie-image" />
      <h3 class="movie-title">${movie.title}</h3>
      <p class="movie-summary">${movie.summary}</p>
      <button class="info-button" data-index="${index}">More Information</button>
    `;

    container.appendChild(movieCard);
  });
}

// Function to open the popup with movie details
export function openPopup(movie, popupElement) {
  popupElement.querySelector('#popupTitle').textContent = movie.title;
  popupElement.querySelector('#popupImage').src = movie.image;
  popupElement.querySelector('#popupImage').alt = `${movie.title} poster`;
  popupElement.querySelector('#popupSummary').textContent = movie.summary;
  popupElement.querySelector('#popupGenre').textContent = movie.genre.join(', ');
  popupElement.querySelector('#popupDuration').textContent = movie.duration;
  popupElement.querySelector('#popupReleaseDate').textContent = movie.releaseDate;
  popupElement.querySelector('#popupCast').textContent = movie.casting.join(', ');

  popupElement.classList.remove('hidden');
}

// Function to close the popup
export function closePopup(popupElement) {
  popupElement.classList.add('hidden');
}


/**
 * Renderiza las películas en la página
 * @param {Array} movieList - Array de películas a mostrar
 */
export function renderMovie(movieList) {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = ""; // Limpia las películas actuales

  movieList.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="/MoviesWeb/images/${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.summary}</p>
      <button class="info-button" onclick="showPopup('${movie.title}')">Más información</button>
    `;
    moviesContainer.appendChild(movieCard);
  });
}

// Event listener para la barra de búsqueda
document.getElementById("search-input").addEventListener("input", (event) => {
  const query = event.target.value;
  searchMovies(query).then((filteredMovies) => {
    renderMovies(filteredMovies);
  });
});

import { movies } from "../Data/data.js";

/**
 * Filtra las películas basándose en el término de búsqueda
 * @param {string} query - El término ingresado por el usuario
 * @returns {Promise<Array>} - Promesa que resuelve en un array de películas filtradas
 */
export function searchMovies(query) {
  return new Promise((resolve) => {
    const filteredMovies = movies.filter((movie) =>
      Object.values(movie)
        .flat()
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    resolve(filteredMovies);
  });
}