const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  loop: true,
  autoplay: true,
});


$(function () {
  $('.header-burger').on('click', function () {
    $('.header-burger,.menu').toggleClass('active')
  })
})