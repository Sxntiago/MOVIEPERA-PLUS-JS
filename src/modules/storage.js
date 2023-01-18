export default class Storage {
  constructor() {
    this.id;
  }

  getData() {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (!movies || movies.length < 1) {
      movies = [
        {
          id: 0,
          title: "movie 1",
          description: "movie 1",
        },
      ];
      this.id = 1;
    } else {
      this.id = movies[movies.length - 1].id + 1;
    }
    return movies;
  }

  //last id saved
  getLastId() {
    return this.id;
  }

  save(data) {
    localStorage.setItem("movies", JSON.stringify(data));
  }
}
