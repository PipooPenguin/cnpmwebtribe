const Checkout = require("./checkout.model");
const Cart = require("../cart/cart.model");

function addBill(req) {
  bill = new Checkout({
    token: req.cookies.cartToken,
    cusName: req.body.cusName,
    email: req.body.email,
    pNumber: req.body.pNumber,
    method: req.body.method,
    total: req.body.total,
  });
  let productTitle = 0;
  let quantity = 0;
  let cartId = 0;
  for (let i = 0; i < req.body.Billtitle.length; i++) {
    productTitle = req.body.Billtitle[i];
    quantity = req.body.Billquantity[i];
    cartId = req.body.cartId[i];
    bill.Bill.push({ productTitle, quantity, cartId });
  }
  console.log("Đây là bill thanh toán xuât ra------", bill);
}

// async function setIsBoughtNull(req) {
//   for (let i = 0; i < req.body.cartId.length; i++) {
//     await Cart.findByIdAndUpdate(req.body.cartId[i], { isBought: true });
//   }
// }
module.exports = {
  addBill,
  // setIsBoughtNull,
};
