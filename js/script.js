var com = '';
var me = '';
var result = '';
var on = false;

setInterval(com_jan,50);

function com_jan(){


    
    var random = Math.floor(Math.random() * 3);

    if(random === 0) {
        com = '<img src="./images/gu.png">'
    } else if(random === 1) {
        com = '<img src="./images/ch.png">'
    } else if(random === 2){
        com = '<img src="./images/pa.png">'
    }
    document.querySelector(".computer").innerHTML = com;
}

function me_jan(){
    document.querySelectorAll(".btn").innerHTML("onclick", function(){
        alert('じゃんけん');
    });
}