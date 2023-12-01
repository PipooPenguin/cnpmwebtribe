const express = require("express");
const router = express.Router();
const Dish = require('../menu/menu.model.js')
const errorhandler = require("../error/error.express");


router.get("/", async (req, res,next) => {
  try{
    const { q } = req.query;
    const dish = await Dish.find({ type: q });
    console.log("cataloger.controller GET/categoy  dish: ", dish);

    if(dish.length === 0) {throw new errorhandler("no catelory match query",404 )}
    res.render("category.html", { dish });
  }
 catch(e){
next(e);
 }
});

module.exports = router;
