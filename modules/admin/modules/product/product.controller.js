const express = require("express");
const Dish = require("../../../menu/menu.service");
const router = express.Router();
const product = require("./product.service");
const { dishValid } = product;

router.get("/", async (req, res, next) => {
  try {
    const dish = await Dish.getMenuAsync();
    res.render("products.html", { dish });
  } catch (e) {
    next(e);
  }
});

router.get("/full", async (req, res, next) => {
  try {
    const dish = await Dish.getMenuAsync();
    console.log("admin product.controller GET /full");
    res.json(dish.length);
  } catch (e) {
    next(e);
  }
});

router.post("/add", dishValid, async (req, res, next) => {
  try {
    console.log("admin product.controller POST /add");
    await product.addProduct(req);
    res.redirect(`/product`);
  } catch (e) {
    next(e);
  }
});

router.get("/update", async (req, res, next) => {
  try {
    console.log("admin product.controller GET /update:", req.query);
    const { id } = req.query;
    const dish = await Dish.getDishByIdAsync(id);
    res.render("update_product.html", { dish });
  } catch (e) {
    next(e);
  }
});

router.put("/update", dishValid, async (req, res, next) => {
  try {
    console.log("admin product.controller PUT /update:", req.body);
    const { id } = req.query;
    await product.updateProductAsync(id, req.body);
    res.redirect("/product");
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log("admin product.controller DELETE /delete/:id:", req.body);
    const { id } = req.params;
    await product.deleteProductAsync(id);
    res.redirect("/product");
  } catch (e) {
    next(e);
  }
});
module.exports = router;
