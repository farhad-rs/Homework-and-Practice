// JavaScript Document
window.onload = function () {
	var slider = document.getElementsByClassName('slider').item(0);
	var slides = slider.getElementsByClassName('slides').item(0);
	var lists = slider.getElementsByClassName('btns').item(0).getElementsByTagName('img');
	var currentSlide = 0;
	
	(showSlide = function (n) {
		if (n>lists.length-1) n=0;
		if (n<0) n=lists.length-1;
		slides.style.left = (-800*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide = n;	
	})(0);
	
	nextSlide = function () {
		showSlide (currentSlide+1);	
	}
	
	backSlide = function () {
		showSlide (currentSlide-1);	
	}
	
	var autoPlayIv = false;
	
	(autoPlayStart = slider.onmouseout = function () {
		if (autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,4500);	
	})();
	
	autoPlayStop = slider.onmouseover = function () {
		clearInterval(autoPlayIv);
		autoPlayIv = false;	
	}
	
	slider.getElementsByClassName('back').item(0).onclick = backSlide;
	slider.getElementsByClassName('next').item(0).onclick = nextSlide;

		
	for (var i=0;i<lists.length;i++) {
		(function (j) {
			lists.item(j).onclick = function () {
				showSlide(j);	
			}
		})(i);
	}
}