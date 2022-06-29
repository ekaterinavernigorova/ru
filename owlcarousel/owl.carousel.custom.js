$(document).ready(function(){
$(".owl-carousel").owlCarousel( {
  nav: true,
  // navContainer: '.carousel-nav'
  dotsEach: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  loop: true,
  slideTransition: 'ease-in-out',
  responsiveBaseElement: '.owl-carousel-wrapper'
});
});
