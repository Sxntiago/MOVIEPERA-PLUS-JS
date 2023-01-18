import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  //create objects
  const storage = new Storage();
  const list = new List();

  //movie data
  let moviesStored = storage.getData();
  let moviesViewed = document.querySelectorAll(".movie-item");

  //movie forEach
  moviesViewed.forEach((movie) => {
    //button
    let editBtn = movie.querySelector(".edit");
    //event listener
    editBtn.onclick = function () {
      const movieId = parseInt(this.getAttribute("data-id"));
      editBtn.remove();
      movie.querySelector(".delete").remove();

      //add html below buttons
      let movieEditHtml = `<div class="editForm">
    <hr>
    <h3 class="tittle">Movie Edit</h3>
    <form>
    <input type="text" class="editedTitle" value="${
      movie.querySelector(".title").innerHTML
    }" />
    <textarea class="editedDescription">${
      movie.querySelector(".description").innerHTML
    }</textarea>
    <input type="submit" class="update" value="Update" />
    </form>
    `;
      movie.innerHTML += movieEditHtml;

      //buton update
      let updateBtn = movie.querySelector(".update");
      //event listener
      updateBtn.onclick = function (e) {
        e.preventDefault();

        //find id
        let index = moviesStored.findIndex((movie) => movie.id === movieId);
        //save object inside id
        moviesStored[index] = {
          id: movieId,
          title: movie.querySelector(".editedTitle").value,
          description: movie.querySelector(".editedDescription").value,
        };
        //update localstorage
        storage.save(moviesStored);
        //show list updated
        list.show(moviesStored);
        return false;
      };
    };
  });
}
