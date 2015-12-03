$(document).ready(function() {
	preload1();
	textInit();
	ajaxLoading();
});

$(window).on("load", function() {
		preload2();
		if(ajax===false){
		multiSlidersInit();
		sliderPosition();
		sliderCounterInit();
		sliderControl();
		quickAccess();
		sliderParameters();
		toggleNav();
		navigation();
		swipeTouch();
		}
});

$(window).resize(function() {
	sliderPosition();
	sliderPosition();
	positionReset();
	positionReset();
});
