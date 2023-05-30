const express = require("express");
//const Cart = require("./cart.model");
const cart = require("./cart.service");
const dish = require("../menu/menu.model")
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("cart.controller GET /", req.cookies);
  const Bill=await cart.findDishByCart(req.cookies.cartToken)
  // const Cart = await cart.showCart(req.cookies.cartToken);
   console.log("----Bill: ",Bill);
   res.render("cart.html",{Bill});
});

router.get("/all", async (req, res) => {
  console.log("cart.controller GET /all", req.cookies);
  const Cart = await cart.showCart(req.cookies.cartToken);
  res.json(Cart);
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

router.patch("/", async (req, res) => {
  console.log("cart.controller patch", req.cookies);
  const token = req.cookies.cartToken;
  const id = req.body.productId;
  const result = await cart.update(token, id);
  res.json({ result });
});

module.exports = router;
