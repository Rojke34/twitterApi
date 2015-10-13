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

'use strict';


var consejos = [

];

var len = consejos.length;
var pos = 0;
$('#tweet').html(consejos[pos]);

function send(  ){
  if ( pos < len) {
    setTimeout(function(){
     $('#tweet').html(consejos[pos]);
     $.get('/tweet?content=' + consejos[pos], function(data){ console.log(data); });
     pos += 1;
     send();
    }, 5000);
  } else{
    setTimeout(function(){ alert('se acabo!'); }, 5000);
  }
}

send();



// var wallie = [
//   "Hi, @PtManuel please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @yrral1986 please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @Mario_Henriquez please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @Cristianmoslo please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @BryanMoslo please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @apaganobeleno please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @jekvillalobos please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨.",
//   "Hi, @Rojke34 please don't forget to log your 🚨 🚧 🚔 Wallie 🚔 🚧 🚨."
// ]

// var tweetCurrent = 0;

// var llamada = function(msj, date){
//   $('#counter').countdown(date, function(event) {
//   var timeReg = event.strftime('%w weeks %d days %H : %M : %S');
//   var format = '%H : %M : %S';
//   if(event.offset.days > 0) {
//     format = '%-d day%!d ' + format;
//   }
//   if(event.offset.weeks > 0) {
//     format = '%-w week%!w ' + format;
//   }
//   $(this).html(event.strftime(format));
// }).on('finish.countdown', function(event) {
//     if( tweetCurrent < wallie.length ){
//       //send the tweet
//       $.get('/tweet?content='+msj, function(data){
//         tweetCurrent += 1;

//         setTimeout(function() {
//           obteinMensaje();
//         }, 1000);

//       });
//     }else{
//       $(this).html('0 Tweets!');
//     }
// });
// }

// var obteinMensaje = function(){
//   var msj = wallie[tweetCurrent];
//   $("#tweet").html(msj);

//   llamada( msj, '2015/03/20 17:30:00' )
// }

// obteinMensaje()
