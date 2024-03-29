// mongoose model setup cho dishes (products)
const mongoose = require("mongoose");
// setup biến schema để đỡ gỡ dài
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  number : Number,
  email : String,
  password : String,
  token : String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// file js kết nối với file index.js thì phải có module.exports return ra cái gì đó. 'Dishes' có một chữ + viết hoa chữ cái đầu là rule của mongoose, sẽ tạo một collection(table) với tên dishes
module.exports = mongoose.model("User", UserSchema);