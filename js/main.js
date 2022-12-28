// const toggleSidebar = () => document.body.classList.toggle("open");
let btn = document.querySelector('.header');
let menu = document.querySelector('.navbar');
let nav = document.querySelector('.nav');
let body = document.querySelector('.dashboard');
let close = document.querySelector('.close');
let open = document.querySelector('.open-nav');
let bodyB = document.body;

// Slider
var swiper = new Swiper(".imgSlider", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    mousewheel: true,
    keyboard: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    freeMode: true,
});





 btn.onclick = function() {
    // nav.classList.remove('close-nav');
    nav.classList.toggle('open-nav');
    //    nav.classList.add('width');
    //    nav.classList.add('transition');
    nav.style.width = "75px";
    bodyB.classList.toggle('open');
 }
