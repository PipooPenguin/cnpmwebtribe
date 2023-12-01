const Cart = require("./cart.model");
const Dish = require("../menu/menu.model");

async function addToCart(cartToken, products, quantity) {
  try {
    console.log("cart.service addToCart");
    console.log("params productId:", products._id);
    console.log("params quantity:", quantity);

    const result = await Cart.findOne({
      cartToken: cartToken,
      products: products,
      isBought: false,
    });
    console.log("result: ", result);
    if (!result) {
      const newCart = new Cart({
        cartToken: cartToken,
        products: products,
        quantity: quantity,
        isBought: false,
      });
      console.log("object newCart: ", JSON.stringify(newCart));
      await newCart.save();
    } else {
      await Cart.updateOne(
        { cartToken: cartToken, products: products, isBought: false },
        { quantity: Number(result?.quantity ?? 0) + Number(quantity) }
      );
    }
    return 1;
  } catch (e) {
    console.log("cart.service addToCart() error: ", e?.message);
    return 0;
  }
}
async function showCart(cookie) {
  try {
    const cart = await Cart.find({
      cartToken: cookie,
      isBought: false,
      quantity: { $ne: 0 },
    }).populate("products");
    return cart === 1 ? { ...cart[0] } : cart;
  } catch (error) {
    console.log("cart.service showcart() error: ", e?.message);
  }
}
async function update(cookie, id) {
  try {
    console.log("cart.service UPDATE /cart:");
    await Cart.updateOne({ cartToken: cookie, productId: id }, { quantity: 0 });
    return 1;
  } catch (e) {
    console.log("cart.service update() error: ", e?.message);
    return 0;
  }
}
async function findDishByCart(cookie) {
  try {
    console.log("cart.service findDishByCart ");
    const cart = await Cart.find(
      { cartToken: cookie, isBought: false, quantity: { $ne: 0 } },
      { products: 1, quantity: 1 }
    ).populate("products");
    return cart.length === 1 ? { ...cart[0] } : cart;
  } catch (error) {}
}
//function printBill(merge){
function getCartQuantity(cart) {
  console.log("cart.service GET /all");
  let length = cart.length;
  let quantity = 0;
  for (let i = 0; i < length; i++) {
    quantity += cart[i].quantity;
  }
  return quantity;
}

const getTotal = (cart) => {
  const totalEachItem = cart.map((item) => item.products.price * item.quantity);
  const total = totalEachItem.reduce((total, element) => (total += element), 0);
  console.log("cart.service getTotal", total);
  return total;
};

module.exports = {
  addToCart: addToCart,
  showCart,
  update,
  findDishByCart,
  getCartQuantity,
  getTotal,
};
