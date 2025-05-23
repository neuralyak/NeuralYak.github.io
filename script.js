// Lottie Animation
lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_zrqthn6o.json'
});

// Micro-Course Carousel
new Swiper('.microbot-swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  autoplay: { delay: 3000 }
});

// Pricing Carousel
new Swiper('.pricing-swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  autoplay: { delay: 3000 }
});
