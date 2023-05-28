console.log("addCart js");
//const addCart = $(".addCart");
console.log("????");
// $(".addCart").submit(function (e) {
//   console.log("js cart.js addcart");
//   e.preventDefault();
//   $.ajax({
//     url: "/cart/add",
//     type: "post",
//     data: $("#addCart").serialize(),
//     success: function () {
//       alert("add cart success");
//     },
//   });
// });
function SubForm(id) {
  console.log("id: ", id);
  $.ajax({
    url: "/cart/add",
    type: "post",
    data: $(`#addCart_${id}`).serialize(),
    success: function () {
      alert("them vao gio hang thanh cong");
    },
  });
}
