$(document).ready(function() {
	var slidewidth = Math.ceil(850/4);
	sld = $('div.slider div.slides > div');
	sld.css({width:slidewidth+'px'});
	sld.last().css({'padding-right':'200px'});
	sld.mouseover(function () {
		sld.animate({width:'50px'},500);
		$(this).animate({width:'700px'},500);
	});
	$('div.slider').mouseout(function(){
		sld.animate({width:slidewidth+'px'},500);
	});
});