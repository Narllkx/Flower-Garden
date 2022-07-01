$(document).ready(function () {
  $(".services-slider").slick({
    arrow: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  });

  $(".portfolio-slider").slick({
    arrow: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1570,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });

  $('.news').slick({
    centerMode: true,
    centerPadding: '30%',
    focusOnSelect: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          focusOnSelect: false,
          arrow: false,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          focusOnSelect: false,
          arrow: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
    ]
  });

  $('.popup-youtube').click(function () {
    $(this).next().fadeIn();
  });



  $('.close-popup').click(function () {
    $('.overlay').fadeOut();
  });
  $(document).mouseup(function (e) {
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.overlay').fadeOut();
    }
  });

  $(".client-slider").slick({
    arrow: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  });

  $(".partners-slider").slick({
    arrow: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  });

});

$(".products-slider").slick({
  arrow: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1570,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ]
});


$(".header-burger").click(function (event) {
  $(".header-burger,.menu").toggleClass("active");
  $("body").toggleClass("lock");
  $(".website-menu").toggleClass("active");
});

$(document).on('click', function (e) {
  if (!$(e.target).is(".header-burger, .header-burger *, .website-menu, .website-menu *")) {
    $(".header-burger,.menu").removeClass("active");
    $("body").removeClass("lock");
    $(".website-menu").removeClass("active");
  }
});

AOS.init();