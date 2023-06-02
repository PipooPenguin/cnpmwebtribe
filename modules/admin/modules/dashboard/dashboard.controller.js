const express = require("express");
const router = express.Router();
const Checkout = require("../../../checkout/checkout.model")

router.get("/", async (req, res) => {
  const checkout= await Checkout.find({});
  console.log("admin dashboard.controller router.get /", checkout);
 res.render("dashboard.html");//
  });

router.get("/pending", async(req,res)=>{
  const checkout= await Checkout.find({status:"pending"});
  console.log("admin dashboard.controller GET /pending:",checkout.length);
   res.json(checkout.length);
})
router.get("/full", async(req,res)=>{
  const checkout= await Checkout.find({});
  console.log("admin dashboard.controller GET /full:",checkout.length);
   res.json(checkout.length);
})
  
  module.exports = router;