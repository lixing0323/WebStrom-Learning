/**
 * Created by lixing on 16/7/1.
 */



$(document).ready(function () {
    $("button").click(function () {
        $("div#font_id").css("font-size", "4em").slideUp(2000).slideDown(2000)
            .hide(3000);
    });
});
