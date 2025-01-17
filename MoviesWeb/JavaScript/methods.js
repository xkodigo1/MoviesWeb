
export function displayMovies(container, moviesList) {
  container.innerHTML = ''; // Limpiar las tarjetas actuales
  moviesList.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const image = document.createElement('img');
    image.src = movie.url;
    image.alt = movie.title;
    card.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = movie.title;
    card.appendChild(title);

    const summary = document.createElement('p');
    summary.textContent = movie.summary;
    card.appendChild(summary);

    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = 'More Info';
    moreInfoButton.className = 'more-info-btn';
    moreInfoButton.addEventListener('click', () => showMovieDetails(movie));
    card.appendChild(moreInfoButton);

    container.appendChild(card);
  });
}

// Crear y mostrar el modal con la información adicional
export function showMovieDetails(movie) {
  // Crear el fondo del modal
  const modalBackground = document.createElement('div');
  modalBackground.className = 'modal-background';

  // Crear el contenido del modal
  const modal = document.createElement('div');
  modal.className = 'modal';

  // Título
  const title = document.createElement('h2');
  title.textContent = movie.title;
  modal.appendChild(title);

  // Género
  const genre = document.createElement('p');
  genre.textContent = `Genre: ${movie.genre.join(', ')}`;
  modal.appendChild(genre);

  // Duración
  const duration = document.createElement('p');
  duration.textContent = `Duration: ${movie.duration}`;
  modal.appendChild(duration);

  // Fecha de estreno
  const releaseDate = document.createElement('p');
  releaseDate.textContent = `Release Date: ${movie.releaseDate}`;
  modal.appendChild(releaseDate);

  // Casting
  const casting = document.createElement('p');
  casting.textContent = `Cast: ${movie.casting.join(', ')}`;
  modal.appendChild(casting);

  // Imagen
  const image = document.createElement('img');
  image.src = movie.url;
  image.alt = movie.title;
  image.className = 'modal-image';
  modal.appendChild(image);

  // Botón para cerrar
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.className = 'close-modal-btn';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modalBackground);
  });
  modal.appendChild(closeButton);

  modalBackground.appendChild(modal);
  document.body.appendChild(modalBackground);
}

// Función para buscar películas con promesa
export function searchMovies(movies, query) {
  return new Promise((resolve, reject) => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredMovies.length > 0) {
      resolve(filteredMovies);
    } else {
      reject('No movies found');
    }
  });
}

