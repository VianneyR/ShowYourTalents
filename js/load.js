$(document).ready(function() {
	preload1();
	ajaxLoading();
});

$(window).load(function() {
	if (ajax === false) {
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
	}
});

$(window).resize(function() {
	sliderPosition();
	sliderPosition();
	positionReset();
	positionReset();
}); 