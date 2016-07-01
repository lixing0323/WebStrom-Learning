/**
 * Created by lixing on 16/6/30.
 */


function findEm() {
    x = document.getElementById("font_id");
    x.innerHTML="It is a button click demo";

    window.open("http://sports.sina.com.cn");
}

function person() {
    per = new Object();
    per.firstname = "xing";
    per.lastname  = "li";
    per.age       = 33;

    alert(per.firstname + " is " + per.age + " , name is " + per.lastname);
}