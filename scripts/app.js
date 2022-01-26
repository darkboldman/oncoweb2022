// script for icon box-----------------

let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    // slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

































