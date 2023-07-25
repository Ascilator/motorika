$(function () {
  $('.drop_down_title').click(function () {
    $(this).siblings('.drop_down_body').slideToggle();
  });

  $('.drop_down_item').click(function () {
    $(this).parent().siblings('.drop_down_title').children('.text').text($(this).text());
    $(this).parent().slideUp();
  });

  $('.burger').click(function () {
    $('.mobile_menu_body').toggleClass('_active');
    $('body').toggleClass('_lock');
  });

  $('.services_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_prev'),
    nextArrow: $('.slider_next')
  });

  $('.services_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider_count span').text(currentSlide + 1);
  });

  $('.slider_gal_bod').slick({
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_gal_prev'),
    nextArrow: $('.slider_gal_next'),
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  });

  $('.vac_title>.arrow').click(function () {
    $(this).parent().siblings('.vac_body').slideToggle();
    $(this).parent().toggleClass('_active');
  });

  $('.lvl_1_menu_item').click(function () {
    $('.lvl_2_body').addClass('_active');
    $('.lvl_1_body').addClass('_active');
  });

  $('._back').click(function () {
    $('.lvl_2_body').removeClass('_active');
    $('.lvl_1_body').removeClass('_active');
  });

  $('.cross').click(function () {
    $('.mobile_menu_body').removeClass('_active');
    $('.lvl_2_body').removeClass('_active');
    $('.lvl_1_body').removeClass('_active');
  });
});

document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');

window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
});
