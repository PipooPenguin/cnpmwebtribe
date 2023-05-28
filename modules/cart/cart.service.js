const Cart = require("./cart.model");

async function addToCart(cartToken, productId, quantity) {
  try {
    console.log("cart.service addToCart");
    console.log("params productId:", productId);
    console.log("params quantity:", quantity);

    const newCart = new Cart({
      cartToken: cartToken,
      productId: productId,
      quantity: quantity,
    });
    console.log("object newCart: ", JSON.stringify(newCart));
    await newCart.save();

    return 1;
  } catch (e) {
    console.log("cart.service addToCart() error: ", e?.message);
    return 0;
  }
}

module.exports = {
  addToCart: addToCart,
};
