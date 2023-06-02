const express = require("express");
const checkout = require("./checkout.service");
const router = express.Router();


router.post("/", async (req, res) => {
  console.log("checkout.controller POST /checkout/", req.body);
  await checkout.addBill(req);
   await checkout.setIsBoughtNull(req);
  // res.render("menu.html", { dish });
  res.redirect("/checkout/orders");
});
router.get("/orders", async (req, res) => {
  console.log("checkout.controller GET /orders/",req.cookies.cartToken);
   const Checkout=await checkout.printBill(req.cookies.cartToken) 
   console.log("form bill",Checkout)  ;
  res.render("orders.html",{Checkout});
});
module.exports = router;
