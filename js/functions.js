$(function() {
  $(document).ready(function() {
    // slickInit();
    onepageInit();

    navigation();

  });

  function slickInit() {
    $('.slider').slick({
      slidesToShow: 4,
      swipeToSlide: true,
    });
  }

  function navigation() {
    $('nav').find('a').on('click', function() {
      $(".main").moveTo($(this).index() + 1);
    });
  }

  function onepageInit() {
    $(".main").onepage_scroll({
      sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
      easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
      animationTime: 1000, // AnimationTime let you define how long each section takes to animate
      pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
      updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
      beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
      afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
      loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
      keyboard: true, // You can activate the keyboard controls
      responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
      // the browser's width is less than 600, the fallback will kick in.
      direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
  }

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
});
