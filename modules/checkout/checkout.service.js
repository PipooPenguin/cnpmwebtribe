const Checkout = require("./checkout.model");
const cart = require("../cart/cart.service");
const Cart = require("../cart/cart.model");

async function addBill(req) {
  console.log("checkout.service addBill :");
  let {adrss,ward,district,city}= req.body;
  bill = new Checkout({
    token: req.cookies.cartToken,
    cusName: req.body.cusName,
    email: req.body.email,
    pNumber: req.body.pNumber,
    method: req.body.method,
    total: req.body.total,
    address: {adrss : adrss,city: city,district:district,ward: ward},
  });
  const Bill = await cart.findDishByCart(req.cookies)
  // let productTitle = 0;
  // let quantity = 0;
  // let cartId = 0;
  // if (typeof req.body.cartId === "string") {
  //   productTitle = req.body.Billtitle;
  //   quantity = req.body.Billquantity;
  //   cartId = req.body.cartId;
  //   bill.Bill.push({ productTitle, quantity, cartId });
  // } else {
  //   for (let i = 0; i < req.body.Billtitle.length; i++) {
  //     productTitle = req.body.Billtitle[i];
  //     quantity = req.body.Billquantity[i];
  //     cartId = req.body.cartId[i];
  //     bill.Bill.push({ productTitle, quantity, cartId });
  //   }
  // }

  console.log("Bill------", Bill);
  await bill.save();
}

async function setIsBoughtNull(req) {
  console.log("checkout.service /checkout :");
  let doiSo = req.body.cartId.length;
  // console.log(
  //   "typeof req.body.cartId: ------------",
  //   typeof req.body.cartId === "string"
  // );
  let temp = 0;
  if (typeof req.body.cartId === "string") {
    temp = req.body.cartId;
    await Cart.findByIdAndUpdate(temp, { isBought: true });
  } else {
    for (let i = 0; i < doiSo; i++) {
      let temp = req.body.cartId[i];
      await Cart.findByIdAndUpdate(temp, { isBought: true });
    }
  }
}

async function printBill(cookies) {
  const checkout = await Checkout.find({ token: cookies }).sort({
    createdAt: -1,
  });
  // console.log("bill trên trang order:", checkout);
  return checkout;
}
module.exports = {
  addBill,
  setIsBoughtNull,
  printBill,
};
