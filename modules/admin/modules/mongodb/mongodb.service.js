const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://127.0.0.1/fooddeli")
    .then(() => {
      console.log("connect mongodb success!!");
    })
    .catch((err) => {
      console.log("connect mongodb error!!");
    });
}

module.exports = { connect };
