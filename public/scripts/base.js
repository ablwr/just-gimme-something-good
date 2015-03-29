$(document).ready(function() {

$( ".fa-arrow-circle-o-down" ).click(function() {
    $('html,body').animate({
    scrollTop: $("#player").offset().top
    }, 1000); 
  });

$( ".fa-info-circle" ).click(function() {
    $('.video-info').show();
  });

$( ".fa-refresh" ).click(function() {
    $('iframe').attr('src', ($('iframe').attr('src')+"?&autoplay=1"));
  });

$( ".fa-chevron-right" ).click(function() {
    location.reload();
  });

});