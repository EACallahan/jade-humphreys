$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
   
  $( ".menu" ).hide();

  $( ".hamburger" ).on("click", (function() {
    $( ".menu" ).slideToggle( "slow", function() {
    });
  }));

  $(window).scroll(function () {
    if ($(window).scrollTop() > 280) {
      $('.hamburger').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.hamburger').removeClass('navbar-fixed');
    }
  });
    

}); 


