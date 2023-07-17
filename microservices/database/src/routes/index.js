const { Router } = require("express");
const store = require("../mongodb");
const validateModel = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

module.exports = router;
