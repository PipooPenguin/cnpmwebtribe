
$.ajax({
  url: "/pending",
  type: "get",
  success: function (result) {
    const pending=result;
    $.ajax({
        type: "get",
        url: "/full",
        success: function (data) {
            $("#complete").html(`   <h3><span>$</span>total_completes<span>/-</span></h3>
            <p>${data-pending}/${data} orders</p>
            <a href="placed_orders.html" class="btn">see orders</a>`);
        }
    });
  },
});

$.ajax({
    url: "/pending",
    type: "get",
    success: function (result) {
      const pending=result;
      $.ajax({
          type: "get",
          url: "/full",
          success: function (data) {
              $("#3108").html(`   <h3><span>$</span><span>/-pending</span></h3>
              <p>${pending}/${data} orders</p>
              <a href="placed_orders.html" class="btn">see orders</a>`);
          }
      });
    },
  });

  $.ajax({
    url: "/pending",
    type: "get",
    success: function (result) {
      const pending=result;
      $.ajax({
          type: "get",
          url: "/full",
          success: function (data) {
              $("#total").html(`  <h3>numbers_of_orders</h3>
              <p>${data} orders</p>
              <a href="placed_orders.html" class="btn">see orders</a>`);
          }
      });
    },
  });