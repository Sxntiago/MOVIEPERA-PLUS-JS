import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  //create objects
  const storage = new Storage();
  const list = new List();

  //get DOM elements

  let content = document.querySelector("#content");
  let searchBtn = document.querySelector("#search");

  //event listener
  searchBtn.onclick = (e) => {
    e.preventDefault();

    //get text of input
    let wanted = document.querySelector("#searchField").value;
    //get movies data
    let moviesStored = storage.getData();
    //filter to find movie
    const newMovie = moviesStored.filter((movie) => {
      return movie.title.toLowerCase().includes(wanted.toLowerCase());
    });
    //show list update
    if (newMovie.length <= 0) {
      content.innerHTML = "<div><h2>No hay coincidencias</h2></div>";
    } else {
      list.show(newMovie);
    }
    return false;
  };
}
