
    $(`#userRegister`).submit(function(e){
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "user/register",
            data: form.serialize(),
             success:function(){
            //     // Process with the response data
            }
        });
    });

    $(`#formLogin`).submit(function(e){
        alert("vao duoc")
        var form = $(this);
        $.ajax({
            type: "post",
            url: "user/login/check",
            data: form.serialize(),
             success:function(){
            //     // Process with the response data
            }
        });
    });
