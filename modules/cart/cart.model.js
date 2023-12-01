// mongoose model setup cho dishes (products)

// import mongoose để viết bằng mongoose, gần giống js
const mongoose = require("mongoose");
// setup biến schema để đỡ gỡ dài
const Schema = mongoose.Schema;

const CartsSchema = new Schema({
  cartToken: String,
  products: { type : Schema.Types.ObjectId, ref: 'Dishe' },
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isBought : Boolean,
});

module.exports = mongoose.model("Cart", CartsSchema);
