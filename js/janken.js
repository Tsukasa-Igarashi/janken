var jan = ["images/gu.png", "images/ch.png", "images/pa.png"];
var random;
var me;
var ran = setInterval(com_jan, 100);


function com_jan() {
    random = Math.floor(Math.random() * jan.length);
    document.querySelector(".hand").innerHTML = "<img src=" + jan[random] + ">";
    // document.querySelector(".me_img").innerHTML = "<img src=" + jan[random] + ">";
}

var btn = document.querySelectorAll(".me_jan");

for (var i = 0; btn.length > i; i++) {
    btn[i].addEventListener('click', function () {
        if(this.innerHTML == "グー"){
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[0] + ">";
        }else if(this.innerHTML == "チョキ") {
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[1] + ">";
        }else {
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[2] + ">";
        }
    });
}