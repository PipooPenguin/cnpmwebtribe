const express = require("express");
const cart = require("./cart.service");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("cart.controller GET /");
  res.send("cart ok");
});
router.post("/add", async (req, res) => {
  console.log("cart.controller POST /");
  console.log("request body:", req.body);
  console.log("request cookie:", req.cookies);

  const { productId, quantity } = req.body;
  const { cartToken } = req.cookies;
  const result = await cart.addToCart(cartToken, productId, quantity);

  res.json({ result });
});
module.exports = router;
