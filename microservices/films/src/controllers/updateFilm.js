const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updateFilm = await Film.update(id, body);
  response(res, 204, updateFilm);
};
