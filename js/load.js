$(document).ready(function(){
	preload1();
});

$(window).load(function(){
	preload2();
	sliderPosition();
	sliderCounterInit();
	sliderControl();
	quickAccess();
	sliderParameters();
	toggleNav();
});

$(window).resize(function(){
	sliderPosition();
	sliderPosition();
});