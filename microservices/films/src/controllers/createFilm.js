const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { body } = req;
  const newFilm = await Film.create(body);
  response(res, 201, newFilm);
};
