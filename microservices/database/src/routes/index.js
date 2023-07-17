const { Router } = require("express");
const store = require("../mongodb");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].insert(req.body);
    res.status(201).json(response);
});

router.put("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].update(id, req.body);
  res.status(204).json(response);
});

router.delete("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].remove(id);
  res.status(202).json(response);
});

module.exports = router;
