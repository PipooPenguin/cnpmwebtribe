
$.ajax({
  url: "/pending",
  type: "get",
  success: function (result) {
    const pending=result;
    $.ajax({
        type: "get",
        url: "/full",
        success: function (data) {
            $("#complete").html(`   
            ${data-pending}/${data} orders
           `);
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
              $("#pending").html(`   
              ${pending}/${data} orders
              `);
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
              $("#total").html(`  
              ${data} orders
             `);
          }
      });
    },
  });
  $.ajax({
    url: "product/full",
    type: "get",
    success: function (result) {

              $("#products").html(`   
               ${result} products
              `);
          
      }
    
  });