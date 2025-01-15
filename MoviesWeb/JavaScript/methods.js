// JavaScript/methods.js

// Función para generar las cartas
export function createMovieCards(movies, container) {
    movies.forEach((movie) => {
      // Crear el contenedor principal de la carta
      const card = document.createElement("div");
      card.className = "movie-card";
  
      // Crear el contenido de la carta, incluyendo la imagen
      card.innerHTML = `
        <img src="/images/${movie.image}" alt="${movie.title}">
        <div class="content">
          <h2>${movie.title}</h2>
          <p>${movie.summary}</p>
          <p class="genre">Genres: ${movie.genre.join(", ")}</p>
          <p class="release-date">Release Date: ${movie.releaseDate}</p>
          <p class="duration">Duration: ${movie.duration}</p>
          <p class="actors">Cast: ${movie.casting.join(", ")}</p>
        </div>
      `;
  
      // Agregar la carta al contenedor principal
      container.appendChild(card);
    });
  }
  