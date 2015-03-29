$(document).ready(function() {

$( ".fa-arrow-circle-o-down" ).click(function() {
      $('html,body').animate({
      scrollTop: $("#player").offset().top
      }, 1000); 
  });

});