$(".slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $("#scroll_top").show();
    } else {
      $("#scroll_top").hide();
    }
  });

  $("#scroll_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
(function ($) {
  $(function () {
    $("ul.tabs__caption").on("click", "li:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
