// Importa el array de películas desde data.js
import { movies } from "../Data/data.js";

// Importa la función para crear las cartas desde methods.js
import { createMovieCards } from "./methods.js";

// Selecciona el contenedor donde irán las cartas
const movieContainer = document.getElementById("movie-container");

// Llama a la función y pasa los datos y el contenedor como parámetros
createMovieCards(movies, movieContainer);