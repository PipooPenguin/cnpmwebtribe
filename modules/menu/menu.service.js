const Dish = require("./menu.model");

async function getMenuAsync() {
  const dish = await Dish.find({}).sort({ createdAt: -1 });
  return dish;
}

async function createDishAsync(dish) {
  console.log("service create dish", dish);
  const newDish = new Dish(dish);
  console.log(newDish);
  await newDish.save(newDish);
  return 0;
}

async function getDishByIdAsync(id) {
  const dish = await Dish.findById(id);
  return dish;
}

async function updateDishById(id, data) {
  //TODO: verify data to update
  const dish = await Dish.findByIdAndUpdate(id, { ...data });
}

async function deleteDishById(id) {
  await Dish.findByIdAndDelete(id);
}

async function getCategory() {
  const { q } = req.query;
  const dish = await Dish.find({ type: q });
}



module.exports = {
  createDishAsync,
  deleteDishById,
  getDishByIdAsync,
  getDishByIdAsync,
  getMenuAsync,
  updateDishById,
  getCategory,
};
