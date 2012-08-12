// JavaScript Document
window.onload = function () {
	var slider = document.getElementsByClassName('slider').item(0);
	var slides = slider.getElementsByClassName('slides').item(0);
	var currentSlide = 0;
	showSlide = function (n) {
		slides.style.left = (-800*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide = n;	
	}
	var lists = slider.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i=0;i<lists.length;i++) {
		( function (j) {
			lists.item(j).onclick = function () {
				showSlide(j);	
			}
		})(i);
	}
	showSlide(0);
}