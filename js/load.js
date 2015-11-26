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
	swipeTouch();
});

$(window).resize(function(){
	sliderPosition();
	sliderPosition();
	positionReset();
	positionReset();
});