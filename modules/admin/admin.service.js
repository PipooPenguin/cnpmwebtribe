const Dish = require("./menu.model");

async function getMenuAsync() {
  const dish = await Dish.find({}).sort({ createdAt: -1 });
  return dish;
}

module.exports = { getMenuAsync };
