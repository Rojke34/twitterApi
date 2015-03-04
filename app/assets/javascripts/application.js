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

var consejos = [
"El tweet se ha enviado automáticamente. Prueba número dos con fecha 2015/03/03 18:00:00",
"El tweet se ha enviado automáticamente. Prueba número tres con fecha 2015/03/03 18:01:00",
"Se ha enviado automáticamente. Prueba uno con usuario fecha 2015/03/03 18:02:00 @11CaroPachecoG D: El otro mes, más tiempo para el libro",
"1. Fija tu atención en ti mismo, sé consciente en cada instante de lo que piensas, sientes, deseas y haces.",
"2. Termina siempre lo que comenzaste.",
"3. Haz lo que estás haciendo lo mejor posible.",
"4. No te encadenes a nada que a la larga te destruya.",
"5. Desarrolla tu generosidad sin testigos.",
"6. Trata a  cada persona como si fuera un pariente cercano.",
"7. Ordena lo que has desordenado.",
"8. Aprende a recibir, agradece cada don.",
"9. Cesa de autodefinirte.",
"10. No mientas ni robes, si lo haces te mientes y te robas a ti mismo.",
"11. Ayuda a tu prójimo sin hacerlo dependiente.",
"12. No desees ser imitado.",
"13. Haz planes de trabajo y cúmplelos.",
"14. No ocupes demasiado espacio.",
"15. No hagas ruidos ni gestos innecesarios.",
"16. Si no la tienes, imita la fe.",
"17. No te dejes impresionar por personalidades fuertes.",
"18. No te apropies de nada ni de nadie.",
"19. Reparte equitativamente.",
"20. No seduzcas.",
"21. Come y duerme lo estrictamente necesario.",
"22. No hables de tus problemas personales.",
"23. No emitas juicios ni críticas cuando desconozcas la mayor parte de los hechos.",
"24. No establezcas amistades inútiles.",
"25. No sigas modas.",
"26. No te vendas.",
"27. Respeta los contratos que has firmado.",
"28. Sé puntual.",
"29. No envidies los bienes o los éxitos del prójimo.",
"30. Habla sólo lo necesario.",
"31. No pienses en los beneficios que te va a procurar tu obra.",
"32. Nunca amenaces.",
"33. Realiza tus promesas.",
"34. En una discusión ponte en el lugar del otro.",
"35. Admite que alguien te supere.",
"36. No elimines, transforma.",
"37. Vence tus miedos, cada uno de ellos es un deseo que se camufla.",
"38. Ayuda al otro a ayudarse a sí mismo.",
"39. Vence tus antipatías y acércate a las personas que deseas rechazar.",
"40. No actúes por reacción a lo que digan bueno o malo de ti.",
"41. Transforma tu orgullo en dignidad.",
"42. Transforma tu cólera en creatividad.",
"43. Transforma tu avaricia en respeto por la belleza.",
"44. Transforma tu envidia en admiración por los valores del otro.",
"45. Transforma tu odio en caridad.",
"46. No te alabes ni te insultes.",
"47. Trata lo que no te pertenece como si te perteneciera.",
"48. No te quejes.",
"49. Desarrolla tu imaginación.",
"50. No des órdenes sólo por el placer de ser obedecido.",
"51. Paga los servicios que te dan.",
"52. No hagas propaganda de tus obras o ideas.",
"53. No trates de despertar en otros emociones hacia ti como piedad, admiración, simpatía, complicidad.",
"54. No trates de distinguirte por tu apariencia.",
"55. Nunca contradigas, sólo calla.",
"56. No contraigas deudas, adquiere y paga en seguida.",
"57. Si ofendes a alguien, pídele perdón.",
"58. Si lo has ofendido públicamente, excúsate en público.",
"59. Si te das cuenta de que has dicho algo erróneo, no insistas por orgullo en ese error y desiste de inmediato de tus propósitos.",
"60. No defiendas tus ideas antiguas sólo por el hecho de que fuiste tú quien las enunció.",
"61. No conserves objetos inútiles.",
"62. No te adornes con ideas ajenas.",
"63. No te fotografíes junto a personajes famosos.",
"64. No rindas cuentas a nadie, sé tu propio juez.",
"65. Nunca te definas por lo que posees.",
"66. Nunca hables de ti sin concederte la posibilidad de cambiar.",
"67. Acepta que  nada es tuyo.",
"68. Cuando te pregunten tu opinión sobre algo o alguien, di sólo sus cualidades.",
"69. Cuando te enfermes, en lugar de odiar ese mal considéralo tu maestro.",
"70. No mires con disimulo, mira fijamente.",
"71. No olvides a tus muertos, pero dales un sitio limitado que les impida invadir toda tu vida.",
"72. En el lugar en que habites consagra  siempre un sitio a lo sagrado.",
"73. Cuando realices un servicio no resaltes tus esfuerzos.",
"74. Si decides trabajar para los otros, hazlo con placer.",
"75. Si dudas entre hacer y no hacer, arriésgate y haz.",
"76. No trates de ser todo para tu pareja; admite que busque en otros lo que tú no puedes darle.",
"77. Cuando alguien tenga su público, no acudas para contradecirlo y robarle la audiencia.",
"78. Vive de un dinero ganado por ti mismo.",
"79. No te jactes de aventuras amorosas.",
"80. No te vanaglories de tus debilidades.",
"81. Nunca visites a alguien sólo por llenar tu tiempo.",
"82. Obtén para repartir.",
"83. Si estás meditando y llega un diablo, pon a ese diablo a meditar."
]


var tweetCurrent = 0;
var min = 1;




var llamada = function(msj, date){
  $('#counter').countdown(date, function(event) {
  var timeReg = event.strftime('%w weeks %d days %H : %M : %S'); 
  
  var format = '%H : %M : %S';

  if(event.offset.days > 0) {
    format = '%-d day%!d ' + format;
  }
  if(event.offset.weeks > 0) {
    format = '%-w week%!w ' + format;
  }
  $(this).html(event.strftime(format));

}).on('finish.countdown', function(event) {
    
    if( tweetCurrent < consejos.length){
      //send the tweet 
      
      $.get('/tweet?content='+msj, function(data){ 
        tweetCurrent += 1;
        min += 1;
        obteinMensaje();
      });
    }else{
      $(this).html('0 Tweets!');
    }
    
});
}


var obteinMensaje = function(){
  var msj = consejos[tweetCurrent];
  $("#tweet").html(msj);
 
  llamada( msj, '2015/03/03 17:5'+min+':00' )
}


obteinMensaje()




 
