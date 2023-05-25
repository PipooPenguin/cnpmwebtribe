const express = require("express");
const menu = require("./menu.service");
const router = express.Router();

router.get("/", async (req, res) => {
  const dish = await menu.getMenuAsync();
  res.render("home.html", { dish });
});

router.get("/menu", async (req, res) => {
  console.log("menu.controller GET /menu");
  const dish = await menu.getMenuAsync();
  res.render("menu.html", { dish });
});

router.post("/menu", async (req, res) => {
  console.log("menu.controller POST /menu req.body:", req.body);
  await menu.createDishAsync(req.body);
  res.redirect(`/admin/products`);
});

router.get("/menu/:id", async (req, res) => {
  console.log("menu.controller GET /menu/:id req.params.id:", req.params.id);
  const dish = await menu.getDishByIdAsync(req.params.id);
  res.render("quick_view.html", { dish });
});

router.get("/menu/:id/edit", async (req, res) => {
  console.log(
    "menu.controller GET /menu/:id/edit req.params.id:",
    req.params.id
  );
  const dish = await menu.getDishByIdAsync(req.params.id);
  res.render("./admin/update_product.html", { dish });
});

router.put("/menu/:id", async (req, res) => {
  console.log("menu.controller PUT /menu/:id req.params.id:", req.params.id);
  const { id } = req.params;
  await menu.updateDishById(id, req.body);
  res.redirect("/admin/products");
});

router.delete("/menu/:id", async (req, res) => {
  console.log("menu.controller DELETE /menu/:id req.params.id:", req.params.id);
  const { id } = req.params;
  await menu.deleteDishById(id);
  res.redirect("/admin/products");
});

router.get("/category", async (req, res) => {
  console.log("menu.controller GET /category req.query", req.query);
  const dish = await menu.getCategory(req.query);
  res.render("category.html", { dish });
});

module.exports = router;
