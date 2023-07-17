const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planet = await Planet.remove(id);
  response(res, 202, planet);
};
