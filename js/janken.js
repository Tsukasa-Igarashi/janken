var jan = ["images/gu.png", "images/ch.png", "images/pa.png"];
var random;
var me;
var ran = setInterval(com_jan, 100);


function com_jan() {
    random = Math.floor(Math.random() * jan.length);
    document.querySelector(".hand").innerHTML = "<img src=" + jan[random] + ">";
    // document.querySelector(".me_img").innerHTML = "<img src=" + jan[random] + ">";
    if (document.querySelector(".me_img").innerHTML !== "") {
        clearInterval(ran);
        if(document.querySelector(".me_img").innerHTML === document.querySelector(".hand").innerHTML) {
            document.querySelector("#vs").innerHTML = "引き分け";
        } else if ((document.querySelector(".me_img").innerHTML == "<img src=" + jan[0] + ">" && document.querySelector(".hand").innerHTML == "<img src=" + jan[1] + ">") || (document.querySelector(".me_img").innerHTML == "<img src=" + jan[1] + ">" && document.querySelector(".hand").innerHTML == "<img src=" + jan[2] + ">") || (document.querySelector(".me_img").innerHTML == "<img src=" + jan[2] + ">" && document.querySelector(".hand").innerHTML == "<img src=" + jan[0] + ">")) {
            document.querySelector("#vs").innerHTML = "勝ち";
        } else {
            document.querySelector("#vs").innerHTML = "負け";
        }
        // if (((document.querySelector(".me_img").innerHTML == "<img src=" + jan[0] + ">") === (document.querySelector(".hand").innerHTML == "<img src=" + jan[0] + ">")) || ((document.querySelector(".me_img").innerHTML == "<img src=" + jan[1] + ">") === (document.querySelector(".hand").innerHTML == "<img src=" + jan[1] + ">")) || ((document.querySelector(".me_img").innerHTML == "<img src=" + jan[2] + ">") === (document.querySelector(".hand").innerHTML == "<img src=" + jan[2] + ">"))) {
        //     document.querySelector("#vs").innerHTML = "引き分け";
        // } else if (((document.querySelector(".me_img").innerHTML == "<img src=" + jan[0] + ">") && (document.querySelector(".hand").innerHTML == "<img src=" + jan[random] + ">")) || ((document.querySelector(".me_img").innerHTML == "<img src=" + jan[1] + ">") && (document.querySelector(".hand").innerHTML == "<img src=" + jan[random] + ">")) || ((document.querySelector(".me_img").innerHTML == "<img src=" + jan[2] + ">") && (document.querySelector(".hand").innerHTML == "<img src=" + jan[random] + ">"))) {
        //     document.querySelector("#vs").innerHTML = "勝ち";
        // } else {
        //     document.querySelector("#vs").innerHTML = "負け";
        // }
    }
}

var btn = document.querySelectorAll(".me_jan");

for (var i = 0; btn.length > i; i++) {
    btn[i].addEventListener('click', function () {
        if (this.innerHTML == "グー") {
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[0] + ">";
        } else if (this.innerHTML == "チョキ") {
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[1] + ">";
        } else {
            document.querySelector(".me_img").innerHTML = "<img src=" + jan[2] + ">";
        }
    });
}

var btn_more = document.querySelector("#more_jan");
btn_more.addEventListener('click', function () {
    document.querySelector(".me_img").innerHTML = "";
    document.querySelector("#vs").innerHTML = "vs";
    ran = setInterval(com_jan,100);
});

