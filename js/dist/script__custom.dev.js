"use strict";

$(document).ready(function () {
  new WOW().init();
}); // video content

var srcVid = "https://www.youtube.com/watch?v=r0_mi8ngNnM";
$('#play').on('click', function (e) {
  e.preventDefault();
  $("#player")[0].src += "?autoplay=1";
  $('#player').show();
  $('#video-cover').hide();
});
$('#modal1').on('hidden.bs.modal', function (e) {
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});
$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
});