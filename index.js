"use strict";

/***************************************************** Carousel Functionality */
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

/*
TODO:
  1. add dynamic date to copyright
  2. expand projects to include 'fun' projects'
  3. add links for twitter and angel list
*/