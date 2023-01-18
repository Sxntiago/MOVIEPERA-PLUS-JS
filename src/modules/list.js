import deleteOfList from "./delete.js";
import edit from "./edit.js";

export default class List {
  constructor() {
    this.content = document.querySelector("#content");
  }

  movieTemplate(movie) {
    return `<article class="movie-item" id="movie-${movie.id}">
<h3 class="title">${movie.title}</h3>
<p class="description">${movie.description}</p>

<button data-id="${movie.id}" class="edit">Edit</button>
<button data-id="${movie.id}" class="delete">Delete</button>
</article>`;
  }

  show(movies) {
    //empty dom
    this.content.innerHTML = "";

    //show all movie of localStorage
    movies.forEach((movie) => {
      this.content.innerHTML += this.movieTemplate(movie);
    });

    //delete movie
    deleteOfList();

    //edit movie
    edit();
  }
}
