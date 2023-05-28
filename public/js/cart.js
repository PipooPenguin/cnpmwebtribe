console.log("addCart js");

function SubForm(id) {
  console.log("id: ", id);
  $.ajax({
    url: "/cart/add",
    type: "post",
    data: $(`#addCart_${id}`).serialize(),
    success: function (r) {
      if (r.result === 1) {
        alert("Thêm món ăn thành công");
      } else alert("Có chút vấn đề, mời bạn thử lại");
    },
  });
}

$.ajax({
  url: "/cart/all",
  type: "get",
  success: function (result) {
    $("#cart").html(
      `<i class="fas fa-shopping-cart">(${result.length})</i><span></span>`
    );
  },
});
