let swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
});
gsap.from(".disc", {
  scrollTrigger: ".disc",
  duration :2,
  y:100,
  opacity: 0,
  start: "1000px 200%",
  markers: true
}
)
gsap.from(".disca", {
  scrollTrigger: ".disca",
  duration :2,
  y:100,
  opacity: 0,
  start: "1000px 200%",
  markers: true
}
)
