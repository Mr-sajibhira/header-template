
// ===============================Mj Custom JavaScript  Code Start==================================


//-----------------------Header  Menu JavaScript Code Start-----------------------------------//
let btn = document.querySelector("button");
let icon = btn.querySelector(".fa-bars");
let add = document.querySelector(".mobile");

btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
        add.classList.toggle("mobile_open");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
        add.classList.toggle("mobile_open");
    }
}


var btnnav = document.getElementsByClassName("nev_menu")[0];
var btnlink = btnnav.getElementsByTagName("a");
for (var i = 0; i < btnlink.length; i++) {
    btnlink[i].addEventListener("click", function () {
        (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
        this.classList.add('active');
    });
}
//-----------------------Header  Menu JavaScript Code End-----------------------------------//






//==================== Mj Custom JavaScript  Code End====================================
