function sliderPosition() {
	var wHeight = $(window).height();
	var wWidth = $(window).width();
	var hHeight = $("header").outerHeight(true);
	var fHeight = $("footer").outerHeight(true);

	var sHeight = wHeight - (hHeight + fHeight);

	$("#slider-wrap").css("height", sHeight);
	$("#slider-wrap").css("margin-top", hHeight);

	$("#slider-content li").css("height", sHeight);
	$("#slider-content li").css("width", wWidth);

	var sLength = $("#slider-content li").length;

	var scWidth = (sLength + 1) * wWidth;

	$("#slider-content").css("width", scWidth);

}

function sliderControl() {

	var i = 0;

	$("#slider-next").click(function() {
		var liWidth = $("#slider-content li").width();
		var sLength = $("#slider-content li").length;
		if (i < sLength - 1) {
			i++;
			$("li.count.active").removeClass("active");
		} else {
			i = 0;
			$("li.count.active").removeClass("active");
		}
		var offset = -(i * liWidth);
		$("#slider-content").css("margin-left", offset);

		var pict_title = $("#slider-content li").eq(i).find("img").attr("alt");
		$("#title-pict").text(pict_title);

		var liActive = $("li.count").eq(i);
		$(liActive).addClass("active");
	});

	$("#slider-prev").click(function() {
		var liWidth = $("#slider-content li").width();
		var sLength = $("#slider-content li").length;
		if (i > 0) {
			i--;
			$("li.count.active").removeClass("active");
		} else {
			i = sLength - 1;
			$("li.count.active").removeClass("active");
		}
		var offset = -(i * liWidth);
		$("#slider-content").css("margin-left", offset);

		var pict_title = $("#slider-content li").eq(i).find("img").attr("alt");
		$("#title-pict").text(pict_title);

		var liActive = $("li.count").eq(i);
		$(liActive).addClass("active");
	});

	function positionOnResize() {
		$("#slider-content").removeClass("slide");
		var resizedLiWidth = $("#slider-content li").width();
		var resizedOffset = -(i * resizedLiWidth);
		$("#slider-content").css("margin-left", resizedOffset);
		$("#slider-content").addClass("slide");
	}
	$(window).resize(function(){
		positionOnResize();
		positionOnResize();
	});
}

function sliderCounterInit() {
	var sLength = $("#slider-content li").length;
	for ( n = 1; n <= sLength; n++) {
		$("footer ul").append("<li class='count'>" + n + "</li>");
	}
	$("footer ul li:first-child").addClass("active");
	$("#title-pict").text($("#slider-content li:first-child").find("img").attr("alt"));
}

function preload1() {
	$("#slider-content").hide();
	$("body").append('<div id="wait"><img src="img/design/loader.gif" alt="chargement..."/></div>');
}

function preload2() {
	$("#wait").hide();
	$("#slider-content").fadeIn();
}

