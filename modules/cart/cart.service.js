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
      isBought: false,
    });
    console.log(result);
    if (!result) {
      const newCart = new Cart({
        cartToken: cartToken,
        productId: productId,
        quantity: quantity,
        isBought: false,
      });
      console.log("object newCart: ", JSON.stringify(newCart));
      await newCart.save();
    } else {
      await Cart.updateOne(
        { cartToken: cartToken, productId: productId, isBought: false },
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
    const cart = await Cart.find({ cartToken: cookie, isBought: false ,quantity: { $ne: 0 }});
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
      { cartToken: cookie, isBought: false,quantity: { $ne: 0 } },
      { productId: 1, quantity: 1 }
    );
 //   console.log("cart------------: ", cart);

    const dish = [];
    for (let c of cart) {
      // Object.values(c);
      const thing = await Dish.find(
        { _id: c.productId },
        { title: 1, image: 1,price: 1,type: 1 }
      );
      dish.push(thing[0]);
    }
    // console.log("dish------------: ", dish);

    //   console.log("cart.controller findDishByCart merge:", dish);
    const merge = [];
    const merge2 = [];
    let temp=0;
   // const tongtien=0;
  //  const don=0;
    for (let i = 0; i < dish.length; i++) {
      //  merge[i]['quantity'] = '31';
      const quty = cart[i].quantity;
     temp+= dish[i].price*quty;

 //     const don=quty*
   //   tongtien+=don;
      const cartId = cart[i].id;
      merge.push(dish[i]);
      merge2[i]={...merge[i],q : quty,cid:cartId}
    }
    // const merge=cart[0].quantity;
    merge2
    // console.log("total money!!------------: ", temp);
//    merge2[1]={total:temp}

    // console.log("MERGE!!------------: ", merge2);
    const m=[merge2,temp]
    return m;
    // MyModel.find({ email: 'you@email.com' }, { name: true, email: true, phone: true });
  } catch (error) {}
}
//function printBill(merge){


module.exports = {
  addToCart: addToCart,
  showCart,
  update,
  findDishByCart,
};
