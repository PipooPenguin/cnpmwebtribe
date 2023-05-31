const express = require("express");
const checkout = require("./checkout.service");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("checkout.controller POST /checkout/", req.body);
  await checkout.addBill(req);
  //  await checkout.setIsBoughtNull(req);
  // res.render("menu.html", { dish });
  res.send("1");
});

module.exports = router;
