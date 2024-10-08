//Web Design by Hayden Chapman 2024
//

$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
    $(".bar.half").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $(".nav a[href*='#']").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr(href)).offset().top - 100,
      },
      2000
    );
  });

  $(".up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
  //animate on-scroll
  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });
});
