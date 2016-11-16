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

/*  
//___________________________________________________
  // #AppreciateBugs Link
  $('#primary-nav .appreciateBugs').on('click', function(e){
    //prevent the slide based on the href
    e.preventDefault();
    //Remove active from ANY TAB that may have been active
    $('#primary-nav .appreciateBugs').siblings().removeClass('active');
    //ADD Active if not there; REMOVE active if there
    $('#primary-nav .appreciateBugs').toggleClass('active');
    //Does intTab have active? 
    if($('#primary-nav .appreciateBugs').hasClass('active')) { // DOES HAVE ACTIVE
      //Is the slidedown open already
      if($('#slide-down').hasClass('open')) { //YES SLIDE OPEN
        //remove other section's content
        $('#slide-down .drop.open').hide().removeClass('open');
        //show international content
        $('.drop.appreciateBugs').show().addClass('open');
      } else { //NO SLIDE CLOSED
        //Hide all content
        $('#slide-down .drop').hide();
        //show international  content
        $('.drop.appreciateBugs').show().addClass('open');
        //Slide that baby down
        $('#slide-down').slideDown(150).addClass('open');     
      }
    } else { // DOESNT HAVE ACTIVE
      //Controls for second click where we no longer want the slidedown DOWN
      $('#slide-down').slideUp(150).removeClass('open');
    }
  });
    
  // Politics Link
  $('#primary-nav .eyes').on('click', function(e){
    e.preventDefault();
    $('#primary-nav .eyes').siblings().removeClass('active');
    $('#primary-nav .eyes').toggleClass('active');
    if($('#primary-nav .eyes').hasClass('active')) {
      if($('#slide-down').hasClass('open')) {
        $('#slide-down .drop.open').hide().removeClass('open');
        $('.drop.eyes').show().addClass('open');
      } else {
        $('#slide-down .drop').hide();
        $('.drop.eyes').show().addClass('open');
        $('#slide-down').slideDown(150).addClass('open');     
      }
    } else {
      $('#slide-down').slideUp(150).removeClass('open');
    }
  });
    
  // Business Link
  $('#primary-nav .lips').on('click', function(e){
    e.preventDefault();
    $('#primary-nav .lips').siblings().removeClass('active');
    $('#primary-nav .lips').toggleClass('active');
    if($('#primary-nav .lips').hasClass('active')) {
      if($('#slide-down').hasClass('open')) {
        $('#slide-down .drop.open').hide().removeClass('open');
        $('.drop.lips').show().addClass('open');
      } else {
        $('#slide-down .drop').hide();
        $('.drop.lips').show().addClass('open');
        $('#slide-down').slideDown(150).addClass('open');     
      }
    } else {
      $('#slide-down').slideUp(150).removeClass('open');
    }
  });
    
  // Technology Link
  $('#primary-nav .sparkles').on('click', function(e){
    e.preventDefault();
    $('#primary-nav .sparkles').siblings().removeClass('active');
    $('#primary-nav .sparkles').toggleClass('active');
    if($('#primary-nav .sparkles').hasClass('active')) {
      if($('#slide-down').hasClass('open')) {
        $('#slide-down .drop.open').hide().removeClass('open');
        $('.drop.sparkles').show().addClass('open');
      } else {
        $('#slide-down .drop').hide();
        $('.drop.sparkles').show().addClass('open');
        $('#slide-down').slideDown(150).addClass('open');     
      }
    } else {
      $('#slide-down').slideUp(150).removeClass('open');
    }
  });
    
  // Culture Link
  $('#primary-nav .all').on('click', function(e){
    e.preventDefault();
    $('#primary-nav .all').siblings().removeClass('active');
    $('#primary-nav .all').toggleClass('active');
    if($('#primary-nav .all').hasClass('active')) {
      if($('#slide-down').hasClass('open')) {
        $('#slide-down .drop.open').hide().removeClass('open');
        $('.drop.all').show().addClass('open');
      } else {
        $('#slide-down .drop').hide();
        $('.drop.all').show().addClass('open');
        $('#slide-down').slideDown(150).addClass('open');     
      }
    } else {
      $('#slide-down').slideUp(150).removeClass('open');
    }
  });
 //____________________________________________   
 */ 
