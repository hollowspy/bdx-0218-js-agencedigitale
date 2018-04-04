$(document).ready(function() {
  $(window).on("scroll", function() {

    if ($(window).scrollTop() >= 10) {
      $(".navbar").addClass("compressed");
      $(".navbar-brand").css("display", "block");
    } else {
      $(".navbar").removeClass("compressed");
      $(".navbar-brand").css("display", "none");
    }


    if ($(window).scrollTop() >window.innerHeight) {
     
      $(".navbar-brand").css("display", "block");
    } else {
     
      $(".navbar-brand").css("display", "none");
    }

    // if ($(window).scrollTop() >= 50) {
    //   $("#log").css(.("display","block");
    // })
  });
});

