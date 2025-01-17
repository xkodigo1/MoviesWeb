# Nota: Profesor Johlver, no pude desplegar el proyecto en Netlify, Render ni Vercel

# MoviesWeb Project

## Overview
MoviesWeb is a dynamic web application that displays information about a collection of movies. Users can browse through movie titles and summaries, search for specific movies using a search bar, and view detailed information about each movie in a pop-up modal.

## Folder Structure
The project is organized as follows:

```
MoviesWeb
|
├── CSS
│   └── style.css       # Styles for the application
|
├── Data
│   └── data.js         # Contains the movies dataset
|
├── HTML
│   └── index.html      # Main HTML file
|
├── JavaScript
│   ├── app.js          # Main script for application logic
│   └── methods.js        # Utility functions for dynamic content
```

## Features
- **Dynamic Movie Cards**: Display movie titles and summaries dynamically on the webpage.
- **Search Functionality**: Filter movies by title using a search bar.
- **Pop-up Modal**: View detailed information about a movie, including genre, release date, duration, casting, and an image.
- **Responsive Design**: Clean and user-friendly interface styled with CSS.

## How It Works
1. The movie data is stored in `data.js` as an array of objects.
2. The `utils.js` file provides functions to dynamically display movie cards and handle pop-up modals.
3. The main script `app.js` integrates the logic, rendering the movies on page load and managing the search functionality.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/MoviesWeb.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MoviesWeb
   ```
3. Open `index.html` in your web browser to view the application.

## Example Data
The movie dataset includes fields like:
- Title
- Summary
- Duration
- Genre
- Release Date
- Casting
- Image URL

Example:
```javascript
{
  title: "The Godfather",
  summary: "The story of the Corleone family...",
  duration: "175 minutes",
  genre: ["Crime", "Drama"],
  releaseDate: "March 24, 1972",
  casting: ["Marlon Brando", "Al Pacino"],
  image: "movieOne.jpg",
  url: "/MoviesWeb/images/movieOne.jpg"
}
```

## Future Enhancements
- Add pagination for large datasets.
- Include user reviews and ratings for movies.
- Implement a backend API to fetch movie data dynamically.

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions.

## License
This project is licensed under the MIT License.

---

Enjoy exploring the world of movies with MoviesWeb! 🎬

