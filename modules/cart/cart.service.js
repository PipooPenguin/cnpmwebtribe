const Cart = require("./cart.model");
const Dish = require("../menu/menu.model");

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
async function findDishByCart(cookie) {
  try {
    console.log("cart.controller findDishByCart:", cookie);
    const cart = await Cart.find(
      { cartToken: cookie },
      { productId: 1, quantity: 1, _id: 0 }
    );
    console.log("cart------------: ",cart);

    const dish = [];
    for (let c of cart) {
      // Object.values(c);
const thing=await Dish.find({ _id: c.productId });
      dish.push(thing[0]);
    }
    console.log("dish------------: ",dish);

 //   console.log("cart.controller findDishByCart merge:", dish);
    const merge = dish.map(obj1 => {
      const obj2 = cart.find(obj2 => obj1._id === obj2.productId);
      return { ...obj1, ...obj2 };
    });
    console.log("merge------------: ",merge);
    return merge;
    // MyModel.find({ email: 'you@email.com' }, { name: true, email: true, phone: true });
  } catch (error) {}
}
module.exports = {
  addToCart: addToCart,
  showCart,
  update,
  findDishByCart,
};
