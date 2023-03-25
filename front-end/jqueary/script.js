$(document).ready(function () {
  // Set initial slide index
  var slideIndex = 0;

  // Set up click listeners for buttons
  $(".prev-button").click(function () {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = $(".slider-image").length - 1;
    }
    updateSlide();
  });

  $(".next-button").click(function () {
    slideIndex++;
    if (slideIndex >= $(".slider-image").length) {
      slideIndex = 0;
    }
    updateSlide();
  });

  // Function to update current slide
  function updateSlide() {
    $(".slider-image").hide();
    $(".slider-image").eq(slideIndex).fadeIn();
  }

  $(".btn").click(function () {
    $(this).toggleClass("btn-primary", "btn-secondary");
    $(this).toggleClass("btn-secondary");
  });

  $(".text").css("display", "none");

  $(".block").click(function () {
    $(this).css("background-color", "red");
    $(this).next(".text").toggle().slideDown();
    $(".text").not($(this).next(".text")).slideUp();
    $(".block").not(this).css("background-color", "#ccc");
  });

  // Show initial slide
  updateSlide();
});
