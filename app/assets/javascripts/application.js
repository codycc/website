// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('ready',function() {

  $('.name').hide().fadeIn(2600);
  $('.nav1').hide().fadeIn(2600);
  $('.nav2').hide().fadeIn(2800);
  $('.nav3').hide().fadeIn(3000);

  $('.welcome_page h1').hide().fadeIn(4000);
  $('.welcome_page a').hide().fadeIn(5000);




  if (window.location.pathname == "/welcome/index") {
    $('.col-1').hide().fadeIn(3000);
    $('.col-2').hide().fadeIn(4000);
    $('.col-3').hide().fadeIn(5000);
};








});
