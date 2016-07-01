/**
 * Created by lixing on 16/7/1.
 */



    
$(document).ready(function () {
    $("button.hide").click(function () {
        $("div.img_icon").slideToggle(3000, function () {
            alert("It is over!")
        });
    });

});



