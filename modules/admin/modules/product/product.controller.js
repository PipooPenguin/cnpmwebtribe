const express = require("express");
const Dish = require("../../../menu/menu.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const dish = await Dish.find({}).sort({
    createdAt: -1,
  });
  res.render("products.html", { dish });
});

router.get("/full", async (req, res) => {
  const dish = await Dish.find({});
  console.log("admin product.controller GET /full:", dish.length);
  res.json(dish.length);
});

router.post("/add", async (req, res) => {
  console.log("admin product.controller GET /full:", req.body);
  const dish = new Dish(req.body);
  await dish.save();
  res.redirect(`/product`);
});

router.get("/update", async (req, res) => {
  console.log("admin product.controller GET /full:", req.query);
  const { id } = req.query;
  const dish = await Dish.findById(id);
  res.render("update_product.html", { dish });
});

router.put("/update", async (req, res) => {
  console.log("admin product.controller PUT /update:", req.body);

  const { id } = req.query;
  // console.log(req.body.dish);
  await Dish.findByIdAndUpdate(id, { ...req.body });
  res.redirect("/product");
});

router.delete("/:id", async (req, res) => {
  console.log("admin product.controller DELETE /delete/:id:", req.body);
  const { id } = req.params;
  await Dish.findByIdAndDelete(id);
  res.redirect("/product");
});
module.exports = router;
