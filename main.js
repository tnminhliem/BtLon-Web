const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var date = new Date();
var week = weekdays[date.getUTCDay() - 1];
var day = date.getUTCDate();
var month = date.getUTCMonth() + 1;
var year = date.getUTCFullYear();

document.getElementById('time').innerHTML = week + ", " + day + "/" + month + "/" + year;

var header = document.querySelector('header');
var mobileMenu = document.querySelector('.list-icon');
var nav = document.getElementById('nav');
var list = document.querySelector(".list-icon i");

mobileMenu.onclick = function () {
    var isOpen = header.clientHeight === 50;

    if (isOpen) {
        header.style.height = '350px';
        nav.style.display = "block";
    } 
    else {
        header.style.height = null;
        nav.style.display = 'none';
    }
}