const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatePlanet = await Planet.update(id, body);
  response(res, 204, updatePlanet);
};
