$(document).ready(function () {
  $(".cross").click(function () {
    $(".sea_bar").slideUp(500);
    $('body').css('opacity', '1');
  });
  $(".fa-s1").click(function () {
    $(".sea_bar").slideDown(500);
    $('body').css('opacity', '0.8');
  });

  $(".home").mouseenter(function () {
    $(".dropdown").show();
    $('.dropdown').css('position', 'absolute');
    $('.dropdown').css('left', '0');
    // $('.dropdown').css('top', '10');
  });
  $(".home").mouseleave(function () {
    $(".dropdown").hide();
  });

  $(".dropdown").mouseenter(function () {
    $(".dropdown").show();
  });
  $(".dropdown").mouseleave(function () {
    $(".dropdown").hide();
  });
  $(".dropdown_two").mouseenter(function () {
    $(".dropdown_two").show();
  });
  $(".dropdown_two").mouseleave(function () {
    $(".dropdown_two").hide();
  });

  $(".feature").mouseenter(function () {
    $(".dropdown_two").show();
  });
  $(".feature").mouseleave(function () {
    $(".dropdown_two").hide();
  });
});

$(document).ready(function () {
  $(".slickSlider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});

$(document).ready(function () {
  // slider two
  $(".slider-two").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });

  $(".slide-prev").click(function (e) {
    //e.preventDefault();
    $(".slider-two").slick("slickPrev");
  });

  $(".slide-next").click(function (e) {
    //e.preventDefault();
    $(".slider-two").slick("slickNext");
  });

  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});
});




