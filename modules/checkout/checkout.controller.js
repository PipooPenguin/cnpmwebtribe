const express = require("express");
const checkout = require("./checkout.service");
const router = express.Router();


// router.get("/orders", async (req, res) => {
//   console.log("checkout.controller GET /orders/",req.cookies.cartToken);
//    const c=checkout.printBill(req.cookies.cartToken)
//   res.render("orders.html");
// });
router.post("/", async (req, res) => {
  console.log("checkout.controller POST /checkout/", req.body);
  await checkout.addBill(req);
   await checkout.setIsBoughtNull(req);
  // res.render("menu.html", { dish });
  res.redirect("/checkout/orders");
});

module.exports = router;
