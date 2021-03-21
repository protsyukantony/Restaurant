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
    $('.header-burger,.menu').toggleClass('active');
  });

  $("#datepicker").datepicker();

  $('#timepicker').timepicker({
    timeFormat: 'H:mm',
    interval: 60,
    minTime: '10',
    maxTime: '7:00pm',
    defaultTime: '10',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
});