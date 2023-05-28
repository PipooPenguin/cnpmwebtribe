const Cart = require("./cart.model");

async function addToCart(cartToken, productId, quantity) {
  try {
    console.log("cart.service addToCart");
    console.log("params productId:", productId);
    console.log("params quantity:", quantity);

    const result = await Cart.findOne({
      cartToken: cartToken,
      productId: productId,
    });
    console.log(result);
    if (!result) {
      const newCart = new Cart({
        cartToken: cartToken,
        productId: productId,
        quantity: quantity,
      });
      console.log("object newCart: ", JSON.stringify(newCart));
      await newCart.save();
    } else {
      await Cart.updateOne(
        { cartToken: cartToken, productId: productId },
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
    const cart = await Cart.find({ cartToken: cookie });
    return cart;
  } catch (error) {
    console.log("cart.service showcart() error: ", e?.message);
    
  }

}
async function update(cookie, id) {
  try {
    console.log("cart.controller UPDATE /cart:", cookie, " : ", id);
    await Cart.updateOne({ cartToken: cookie, productId: id }, { quantity: 0 });
    return 1;
  } catch (e) {
    console.log("cart.service update() error: ", e?.message);
    return 0;
  }
}

module.exports = {
  addToCart: addToCart,
  showCart,
  update,
};
