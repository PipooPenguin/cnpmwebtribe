
const express = require("express");
const router = express.Router();

router.get("/category", async (req, res) => {
  const { q } = req.query;
  const dish = await Dish.find({ type: q });
  res.render("category.html", { dish });
});

module.exports = router;

abc;

