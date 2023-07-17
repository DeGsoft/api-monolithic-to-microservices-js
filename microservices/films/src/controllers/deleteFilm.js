const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await Film.remove(id);
  response(res, 202, film);
};
