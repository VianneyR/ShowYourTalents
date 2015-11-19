$(document).ready(function(){
	preload1();
});

$(window).load(function(){
	preload2();
	sliderPosition();
	sliderCounterInit();
	sliderControl();
});

$(window).resize(function(){
	sliderPosition();
	sliderPosition();
});