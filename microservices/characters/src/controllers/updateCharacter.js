const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updateCharacter = await Character.update(id, body);
  response(res, 204, updateCharacter);
};
