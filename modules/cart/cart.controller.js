const express = require("express");
const cart = require("./cart.service");
const Dish = require("../menu/menu.model");
const router = express.Router();
const Cart = require("./cart.model");

router.get("/",  async(req, res,next) => {
  try{
    const Cart = await cart.showCart(req.cookies.cartToken);
    console.log("cart.controller GET / Cart: ",Cart);
const total=cart.getTotal(Cart);
  // const total = Bill.pop();
  res.render("cart.html", { Cart, total });
  // res.send("sucess")
} catch (e) {
  next(e);
}
});

router.get("/all", async (req, res) => {
  console.log("cart.controller GET /all");
  const Cart = await cart.showCart(req.cookies.cartToken);
  const cartQuantity= cart.getCartQuantity(Cart);
  res.json(cartQuantity);
});

router.post("/add", async (req, res,next) => {
  try{
    console.log("cart.controller POST /add ");
  const { productId, quantity } = req.body;
  // console.log("productId: ",productId)
  const products= await Dish.findById(productId);

  const { cartToken } = req.cookies;
  const result = await cart.addToCart(cartToken, products, quantity);
  res.json({ result });
} catch (e) {
  next(e);
}
});

router.patch("/", async (req, res) => {
  console.log("cart.controller patch");
  const token = req.cookies.cartToken;
  const id = req.body.productId;
  const result = await cart.update(token, id);
  res.json({ result });
});
// router.post("/cart/printBill", (req, res) => {
//   console.log("cart.controller POST: ", req.body);
// });
router.patch("/editcart", async (req, res) => {
  console.log("cart.controller PATCH editcart /");
  const { id, quantity, qu } = req.body;
  // console.log('qu----:',qu);
  if (qu) {
    await Cart.findByIdAndUpdate(id, { quantity: qu });
  } else {
    await Cart.findByIdAndUpdate(id, { quantity: quantity });
  }
  res.redirect("/cart");
});


module.exports = router;
