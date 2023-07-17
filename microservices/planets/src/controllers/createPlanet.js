const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { body } = req;
  const newPlanet = await Planet.create(body);
  response(res, 201, newPlanet);
};
