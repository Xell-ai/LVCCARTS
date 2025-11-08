const swiper = new Swiper('.slider-content', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumVelocityRatio: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  // Small phones
  0: {
    slidesPerView: 1,
  },
  // Large phones
  480: {
    slidesPerView: 2,
  },
  // Tablets
  768: {
    slidesPerView: 3,
  },
  // Small laptops
  1024: {
    slidesPerView: 4,
  },
  // Desktops and above
  1440: {
    slidesPerView: 5,
  },
}
});


let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down → hide navbar
    header.style.top = "-100px"; 
  } else {
    // scrolling up → show navbar
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});



const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
 // Toggle mobile menu visibility
    document.body.classList.toggle('show-mobile-menu');
});
// Close the mobile menu when the close button is clicked
menuCloseButton.addEventListener('click', () => menuOpenButton.click ());



