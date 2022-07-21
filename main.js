var header = document.querySelector('header');
var mobileMenu = document.querySelector('.list-icon');
var nav = document.getElementById('nav-bar');
var list = document.querySelector(".list-icon i");
var x = document.querySelector(".closed-icon i");

mobileMenu.onclick = function () {
    var isOpen = header.clientHeight === 50;
    if (isOpen) {
        header.style.height = '350px';
        nav.style.display = "block";
    } else {
        header.style.height = null;
        nav.style.display = 'none';
    }
}