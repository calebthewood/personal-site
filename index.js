"use strict";


const myCarousel = document.querySelector('#myCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
});

carousel.carousel();

const next = document.querySelector(".carousel-control-next");
const prev = document.querySelector(".carousel-control-prev");

prev.click(() => carousel.carousel("prev"));
next.click(() => carousel.carousel("next"));