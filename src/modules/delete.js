import List from "./list.js";
import Storage from "./storage.js";

export default function () {
  //create objects
  const storage = new Storage();
  const list = new List();

  //movie data available
  let moviesStored = storage.getData();
  let moviesViewed = document.querySelectorAll("#content .movie-item");

  //movies showed
  moviesViewed.forEach((movie) => {
    //button
    let deleteBtn = movie.querySelector(".delete");

    //event listener
    deleteBtn.onclick = function () {
      //get movie ID
      const movieId = this.getAttribute("data-id");
      //filter
      const newMovieStored = moviesStored.filter(
        (movie) => movie.id !== parseInt(movieId)
      );
      //update localStorage
      storage.save(newMovieStored);
      //show list update
      list.show(newMovieStored);
    };
  });
}
