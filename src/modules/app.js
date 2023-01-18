import Add from "./add.js";
import List from "./list.js";
import Storage from "./storage.js";
import search from "./search.js";

export default class App {
  constructor() {
    this.add = new Add();
    this.list = new List();
    this.storage = new Storage();
  }

  load() {
    //add movie
    this.add.movieSave();

    //get array objects of localstorage
    const movies = this.storage.getData();

    //movie list
    this.list.show(movies);
    //search
    search();

    console.log("aplicacion iniciada");
  }
}
