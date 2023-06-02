const express = require("express");
const Dish = require("../../../menu/menu.model");
const router = express.Router();

router.get("/",async (req,res)=>{
    const dish= await Dish.find({}).sort({
        createdAt: -1,
      });;
    res.render("products.html",{dish})
})

router.get("/full", async (req, res) => {
    const dish = await Dish.find({});
    console.log("admin product.controller GET /full:", dish.length);
    res.json(dish.length);
  });

  router.post("/add", async (req,res)=>{
    console.log("admin product.controller GET /full:", req.body);
    const dish = new Dish(req.body);
    await dish.save();
    res.redirect(`/product`)
  })

  router.get("/update",(req,res)=>{
    console.log("admin product.controller GET /full:", checkout.length);
  })

module.exports = router;
