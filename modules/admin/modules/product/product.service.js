const Dish = require("../../../menu/menu.model");
const joi = require('joi');
const dishSchema = require("../../../dishSchema/dish.model");
const errorhandler = require("../../../error/error.express");


function dishValid(req, res, next) {
  const result = dishSchema.validate(req.body);
  console.log("admin product.service : ",req.body)
  const { error } = result;
  if (error===undefined)
    next();
  else {
    throw new errorhandler(
        `${error.details.map((el) => el.message).join(",")}`,
        404
      );
  }
}
async function addProduct(req) {
  const dish = new Dish(req.body);
  await dish.save();
}
async function updateProductAsync(id, body ){
    await Dish.findByIdAndUpdate(id, { ...body });
}
async function deleteProductAsync(id ){
    await Dish.findByIdAndDelete(id);

}
module.exports = { dishValid, addProduct, updateProductAsync,deleteProductAsync };
