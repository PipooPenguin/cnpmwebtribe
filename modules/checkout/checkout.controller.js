const express = require("express");
const checkout = require("./checkout.service");
const cart = require("../cart/cart.service");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const bill = await cart.findDishByCart(req.cookies.cartToken);
    // MyModel.find({ email: 'you@email.com' }, { name: true, email: true, phone: true });
    console.log("checkout.controller GET /  ");
    res.render("checkout.html", { Bill, total });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res) => {
  console.log("checkout.controller POST /");
  await checkout.addBill(req);
  await checkout.setIsBoughtNull(req);
  // res.render("menu.html", { dish });
  res.redirect("/checkout/orders");
});
router.get("/orders", async (req, res) => {
  console.log("checkout.controller GET /orders/");
  const Checkout = await checkout.printBill(req.cookies.cartToken);
  res.render("orders.html", { Checkout });
});

module.exports = router;
