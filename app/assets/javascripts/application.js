// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.countdown
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$('#counter').countdown('2015/02/23', function(event) {
	var timeReg = event.strftime('%w weeks %d days %H : %M : %S'); 
	if( timeReg !== "0 weeks 0 days 0 : 0 : 0")
  	$(this).html( timeReg );
  else
  	alert("Time out")
});
 
