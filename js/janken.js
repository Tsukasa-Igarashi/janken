//var me = [gu, ch, pa];
// var ch = "images/ch.png";
// var pa = "images/pa.png";
var jan = ["images/gu.png", "images/ch.png", "images/pa.png"];
var random;
var me;
var ran = setInterval(com_jan, 100);

function com_jan() {

    random = Math.floor(Math.random() * jan.length);

    document.querySelector(".hand").innerHTML = "<img src=" + jan[random] + ">";
}

function me_jan() {
    var me = document.getElementsByClassName('btn');
    me.addEventLinearAll('onclick', function() {
        if(me.innerHTML === "グー") {
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[0] + ">";
        }
    });
}