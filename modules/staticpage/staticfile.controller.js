const express = require("express");
const menuSerive = require("../menu/menu.service");

const router = express.Router();

// router.get("/", async (req, res) => {
//   const dish = await menu.getMenuAsync();
//   const top3dish = dish.slice(0, 3);
//   res.render("home.html", { top3dish });
// });

router.get("/", async (req, res) => {
  console.log("static controller");
  const dish = await menuSerive.getMenuAsync();
  const top3dish = dish.slice(0, 3);
  res.render("home.html", { top3dish });
});

router.get("/about", (req, res) => {
  res.render("about.html");
});

router.get("/contact", (req, res) => {
  res.render("contact.html");
});

module.exports = router;
