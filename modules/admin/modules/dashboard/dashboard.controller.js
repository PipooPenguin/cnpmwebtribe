const express = require("express");
const router = express.Router();
const Checkout = require("../../../checkout/checkout.model");

router.get("/", async (req, res) => {
  const checkout = await Checkout.find({});
  console.log("admin dashboard.controller router.get /", checkout);
  res.render("dashboard.html"); //
});

router.get("/checkouts", async (req, res) => {
  console.log(
    "admin dashboard.controller router.get /checkouts",
    req.query.q == "all"
  );
  const { q } = req.query;
  let checkout = [];

  if (q == "all") {
    checkout = await Checkout.find({}).sort({
      status: -1,
      createdAt: -1,
    });
  } else {
    checkout = await Checkout.find({ status: q });
  }
  console.log(checkout);
  res.render("placed_orders.html", { checkout ,q});
});
router.get("/pending", async (req, res) => {
  const checkout = await Checkout.find({ status: "pending" });
  console.log("admin dashboard.controller GET /pending:", checkout.length);
  res.json(checkout.length);
});
router.get("/full", async (req, res) => {
  const checkout = await Checkout.find({});
  console.log("admin dashboard.controller GET /full:", checkout.length);
  res.json(checkout.length);
});

router.put("/update", async (req, res) => {
  console.log("dashboard dashboard.controller PUT /update:", req.body);
  const{q}=req.query
const {id,status}=req.body
  await Checkout.findByIdAndUpdate(id, { status:status });
   res.redirect(`/checkouts?q=${q}`);
});
module.exports = router;
