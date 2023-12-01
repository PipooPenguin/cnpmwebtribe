console.log("addCart js");

function SubForm(id) {
  console.log("id: ", id);
  $(`#addCart_${id}`).submit(function(e) {

    e.preventDefault();
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
  $.ajax({
    url: "/cart/all",
    type: "get",
    success: function (r) {
      $("#cart").html(
        `<i class="fas fa-shopping-cart">(${r})</i><span></span>`
      );
    },
  });
  })
}


$.ajax({
  url: "/cart/all",
  type: "get",
  success: function (r) {
    $("#cart").html(
      `<i class="fas fa-shopping-cart">(${r})</i><span></span>`
    );
  },
});

function SForm(id) {
  console.log("id: ", id);

  $.ajax({
    url: "/cart/updatequantity",
    type: "post",
    
    data: $(`#addCart_${id}`).serialize(),
        success: function (r) {
      if (r.result === 1) {
        alert("Thêm món ăn thành công");
      } else alert("Có chút vấn đề, mời bạn thử lại");
    },
    
  });

}