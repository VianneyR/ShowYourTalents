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

function titlePicture() {
	var pict_title = $("#slider-content li").eq(counter).find("img").attr("alt");
	$("#title-pict").text(pict_title);
}
function positionOnResize() {
		$("#slider-content").removeClass("anim-slide");

		var resizedLiWidth = $("#slider-content li").width();
		var resizedOffset = -(counter * resizedLiWidth);

		$("#slider-content").css("margin-left", resizedOffset);
		$("#slider-content").addClass("anim-slide");
		var liActive = $("li.count").eq(counter);
		$(liActive).addClass("active");
	}
function sliderControl() {

	counter = 0;

	if(counter===0 && loop===false){
		$("#slider-prev").addClass("disabled");
	}
	
	$("#slider-next").click(function() {
		var liWidth = $("#slider-content li").width();
		var sLength = $("#slider-content li").length;
		if (counter < sLength - 1) {
			counter++;
			$("li.count.active").removeClass("active");
			if(loop===false && counter===sLength-1){
				$("#slider-next").addClass("disabled");
			}
			if(counter>0){
				$("#slider-prev").removeClass("disabled");
			}
		} else if(loop===false){
			return false;
		} else {
			counter = 0;
			$("li.count.active").removeClass("active");
		}
		var offset = -(counter * liWidth);
		$("#slider-content").css("margin-left", offset);

		titlePicture();
		
		var liActive = $("li.count").eq(counter);
		$(liActive).addClass("active");
	});

	$("#slider-prev").click(function() {
		var liWidth = $("#slider-content li").width();
		var sLength = $("#slider-content li").length;
		if (counter > 0) {
			counter--;
			$("li.count.active").removeClass("active");
			if(loop===false && counter===0){
				$("#slider-prev").addClass("disabled");
			}
			if(counter < sLength-1){
				$("#slider-next").removeClass("disabled");
			}
		} else if(loop===false){
			return false;
		} else {
			counter = sLength - 1;
			$("li.count.active").removeClass("active");
		}
		var offset = -(counter * liWidth);
		$("#slider-content").css("margin-left", offset);

		titlePicture();
		
		var liActive = $("li.count").eq(counter);
		$(liActive).addClass("active");
	});

	$(window).resize(function() {
		positionOnResize();
		positionOnResize();
	});
}

function sliderCounterInit() {
	sLength = $("#slider-content li").length;
	
	for ( n = 1; n <= sLength ; n++){
		var tooltipPictSrc = $("#slider-content li").eq(n-1).find("img").attr("src");
		var tooltipText = tooltipPictSrc.substr(24);
		$("#counter-container").append("<li class='count'><button id='count" + n + "'>" + n + "</button><div class='tooltip-counter'><img class='miniature' src='"+ tooltipPictSrc +"'><p>"+ tooltipText +"</p></div></li>");
	}
	$("#counter-container li:first-child").addClass("active");
	$("#title-pict").text($("#slider-content li:first-child").find("img").attr("alt"));
}

function quickAccess(){
	$("li.count button").click(function(){
		var buttonID = $(this).attr("id");
		var newCounter = buttonID.substr(5);
		
		counter = newCounter-1;
		
		var liWidth = $("#slider-content li").width();
		var newOffset = -(counter * liWidth);

		$("#slider-content").css("margin-left", newOffset);
		
		$("li.count.active").removeClass("active");
		
		$(this).closest("li.count").addClass("active");
		
		titlePicture();
		
		if(loop===false && counter===0){
			$("#slider-prev").addClass("disabled");
		}else{
			$("#slider-prev").removeClass("disabled");
		}
		if(loop===false && counter===sLength-1){
			$("#slider-next").addClass("disabled");
		}else{
			$("#slider-next").removeClass("disabled");
		}

	});
}

function sliderParameters(){
	if(slide===false){
		$("#slider-content").removeClass("anim-slide");
	}
	if(tooltips===false){
		$("#counter-container").addClass("no-tooltips");
	}
	if(tooltipsMiniatures===false){
		$(".tooltip-counter").addClass("no-miniature");
	}
	if(tooltipsName===false){
		$(".tooltip-counter").addClass("no-name");
	}
	if(tooltipsMiniatures===false && tooltipsName===false){
		$("#counter-container").addClass("no-tooltips");
	}
}

function preload1() {
	$("#slider-content").hide();
	$("body").append('<div id="wait"><img src="img/design/loader.gif" alt="chargement..."/></div>');
}

function preload2() {
	$("#wait").hide();
	$("#slider-content").fadeIn();
}

