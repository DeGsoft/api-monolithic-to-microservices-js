const { catchedAsync } = require("../utils");

module.exports = {
  getFilm: catchedAsync(require("./getFilm")),
  getFilms: catchedAsync(require("./getFilms")),
  createFilm: catchedAsync(require("./createFilm")),
  updateFilm: catchedAsync(require("./updateFilm")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
};
