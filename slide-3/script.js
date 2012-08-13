$(document).ready(function() {
	var slidewidth = Math.ceil(700/4);
	slide = $('div.slider slides div');
	slide.css({width:slidewidth+'px'});
	slide.last().css({'padding-right':'300px'});
	slide.mouseover(function () {
		slide.animate({width:'50px'},500);
		$(this).animate({width:'450px'},500);
	});
	$('div.slider').mouseout(function(){
		slide.animate({width:slidewidth+'px'},500);
	});
});