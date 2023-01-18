import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
  constructor() {
    //create objects
    this.storage = new Storage();
    this.list = new List();
    //get DOM elements
    this.titleField = document.querySelector("#title");
    this.descriptionField = document.querySelector("#description");
    this.saveBtn = document.querySelector("#save");
  }

  movieSave() {
    this.saveBtn.onclick = (e) => {
      e.preventDefault();
      let movies = this.storage.getData();
      let lastId = this.storage.getLastId();
      //save data from form
      let title = this.titleField.value;
      let description = this.descriptionField.value;

      if (title != "" || description != "") {
        //create an object
        let movie = {
          id: lastId++,
          title,
          description,
        };
        // add to new array
        movies.push(movie);

        //save to localStorage
        this.storage.save(movies);

        //update list
        this.list.show(movies);
      } else {
        alert("Introduce informacion");
      }
      return false;
    };
  }
}
