$(document).ready(function() {

$( ".fa-info-circle" ).click(function() {
    $('.video-info').show();
  });

$( ".fa-refresh" ).click(function() {
    $('iframe').attr('src', ($('iframe').attr('src')+"?&autoplay=1"));
  });

$( ".fa-chevron-right" ).click(function() {
    location.reload();
  });

$(".fa-arrow-circle-o-down").click(function() {
    $('html,body').animate({
    scrollTop: $("#videos").offset().top
    }, 1000); 
  });

});