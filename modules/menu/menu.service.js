const Dish = require("./menu.model");

async function getMenuAsync() {
  const dish = await Dish.find({}).sort({ createdAt: -1 });
  return dish;
}

async function getDishByIdAsync(id) {
  const dish = await Dish.findById(id);
  return dish;
}

async function getCategory(req) {
  const { q } = req.query;
  const dish = await Dish.find({ type: q });
  return dish;
}

async function getSearchDishes(req) {
  const {q}= req.query;
    const dish = await Dish.find({ title: { $regex: `${q}` , $options: 'i' } });
    return dish;
}

module.exports = {
  getDishByIdAsync,
  getDishByIdAsync,
  getMenuAsync,
  getCategory,
  getSearchDishes,
};
