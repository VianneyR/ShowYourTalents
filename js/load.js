$(document).ready(function(){
	preload1();
});

$(window).load(function(){
	preload2();
	multiSlidersInit();
	sliderPosition();
	sliderCounterInit();
	sliderControl();
	quickAccess();
	sliderParameters();
	toggleNav();
	navigation();
});

$(window).resize(function(){
	sliderPosition();
	sliderPosition();
});