const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const mongodb = require("../mongodb/mongodb.service");
const dashboard = require("./modules/dashboard/dashboard.controller.js");
const product = require("./modules/product/product.controller.js");
const {
  errorHandler,
  errorMongoose,
} = require("../../modules/error/error.controller");

const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

mongodb.connect();

app.engine("html", require("ejs").renderFile);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "..", "..", "public")));


app.use("/", dashboard);
app.use("/product", product);
app.use(errorMongoose, errorHandler);

app.listen(80, (req, res) => {
  console.log("App is listening on port 80");
});
