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


module.exports = router;
