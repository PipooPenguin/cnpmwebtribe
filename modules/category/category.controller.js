const express = require("express");
const router = express.Router();
const Dish = require('../menu/menu.model.js')

router.get("/", async (req, res) => {
  console.log("cataloger.controller GET/categoy:", req.query);
  const { q } = req.query;
  const dish = await Dish.find({ type: q });
  res.render("category.html", { dish });
});

module.exports = router;
