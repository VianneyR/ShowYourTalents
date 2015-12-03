function multiSlidersInit() {
	if ($("#slider-content ul").length > 1) {
		multiSliders = true;
		nbSliders = $("#slider-content ul").length + 1;

		for ( n = 0; n < nbSliders; n++) {
			$("#slider-content ul").eq(n - 1).attr('id', 'slider-' + n);
			$("#nav-list li").eq(n - 1).find("a").attr('href', '#slider-' + n);
		}
		$("nav").addClass("active");
		$("p.menu-control").addClass("active");
		$("#slider-1").addClass("active");
		$("#nav-list li").eq(0).addClass("active");
	} else {
		multiSliders = false;
		$("#slider-content ul").addClass("active");
	}

}

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

	if (multiSliders === false) {

		var sLength = $("#slider-content li").length;
		var scWidth = (sLength + 1) * wWidth;

		$("#slider-content").css("width", scWidth);

	} else {
		$("#slider-content ul").each(function() {
			var sLength = $(this).find("li").length;
			var scWidth = (sLength + 1) * wWidth;

			$(this).css("width", scWidth);
		});
	}
}

function titlePicture() {
	var pict_title = $("#slider-content .active li").eq(counter).find("img").attr("alt");
	$("#title-pict").text(pict_title);
}

function positionReset() {
	$("#slider-content").removeClass("anim-slide");

	var resizedLiWidth = $("#slider-content .active li").width();
	var resizedOffset = -(counter * resizedLiWidth);

	$("#slider-content").css("margin-left", resizedOffset);

	var liActive = $("li.count").eq(counter);

	$(liActive).addClass("active");

	if (slide === true) {
		$("#slider-content").addClass("anim-slide");
	}
}

function sliderControl() {
	counter = 0;
	var sLength = $("#slider-content .active li").length;
	if (counter === 0 && loop === false) {
		$("#slider-prev").addClass("disabled");
	}
	if (sLength > 1) {
		$("#slider-control").addClass("active");
	}

	$("#slider-next").click(function() {
		next();
	});
	$("#slider-prev").click(function() {
		previous();
	});
}

function previous() {
	var liWidth = $("#slider-content .active li").width();
	var sLength = $("#slider-content .active li").length;
	if (counter > 0) {
		counter--;
		$("li.count.active").removeClass("active");
		if (loop === false && counter === 0) {
			$("#slider-prev").addClass("disabled");
		}
		if (counter < sLength - 1) {
			$("#slider-next").removeClass("disabled");
		}
	} else if (loop === false) {
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
}

function next() {
	var liWidth = $("#slider-content .active li").width();
	var sLength = $("#slider-content .active li").length;
	if (counter < sLength - 1) {
		counter++;
		$("li.count.active").removeClass("active");
		if (loop === false && counter === sLength - 1) {
			$("#slider-next").addClass("disabled");
		}
		if (counter > 0) {
			$("#slider-prev").removeClass("disabled");
		}
	} else if (loop === false) {
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
}

function sliderCounterInit() {
	$('footer').empty();
	sLength = $("#slider-content .active li").length;
	$("footer").append('<div id="title-pict"></div>');
	$("footer").append("<ul id='counter-container'></ul>");
	for ( n = 1; n <= sLength; n++) {
		var tooltipPictSrc = $("#slider-content .active li").eq(n - 1).find("img").attr("src");
		var tooltipText = $("#slider-content .active li").eq(n - 1).find("img").attr("alt");
		$("#counter-container").append("<li class='count'><button id='count" + n + "'>" + n + "</button><div class='tooltip-counter'><img class='miniature' src='" + tooltipPictSrc + "'/><p>" + tooltipText + "</p></div></li>");
	}
	$("#counter-container li:first-child").addClass("active");

	$("#title-pict").text($("#slider-content .active li:first-child").find("img").attr("alt"));
}

function quickAccess() {
	$("li.count button").click(function() {
		var buttonID = $(this).attr("id");
		var newCounter = buttonID.substr(5);

		counter = newCounter - 1;

		var liWidth = $("#slider-content li").width();
		var newOffset = -(counter * liWidth);

		$("#slider-content").css("margin-left", newOffset);

		$("li.count.active").removeClass("active");

		$(this).closest("li.count").addClass("active");

		titlePicture();

		if (loop === false && counter === 0) {
			$("#slider-prev").addClass("disabled");
		} else {
			$("#slider-prev").removeClass("disabled");
		}
		if (loop === false && counter === sLength - 1) {
			$("#slider-next").addClass("disabled");
		} else {
			$("#slider-next").removeClass("disabled");
		}
	});
}

function sliderParameters() {
	if (slide === false) {
		$("#slider-content").removeClass("anim-slide");
	}
	if (tooltips === false) {
		$("#counter-container").addClass("no-tooltips");
	}
	if (tooltipsMiniatures === false) {
		$(".tooltip-counter").addClass("no-miniature");
	}
	if (tooltipsName === false) {
		$(".tooltip-counter").addClass("no-name");
	}
	if (tooltipsMiniatures === false && tooltipsName === false) {
		$("#counter-container").addClass("no-tooltips");
	}
}

function toggleNav() {
	$("#menu-trigger").click(function() {
		$("header nav").toggleClass("open");
	});
	$("nav a").click(function() {
		$("header nav").removeClass("open");
	});
}

function navigation() {
	$("nav a").click(function() {

		var link = $(this).attr("href");
		var targetSlider = $("#slider-content").find(link);

		if ($(targetSlider).hasClass("active")) {
			return false;
		} else {
			$("nav li").removeClass("active");
			$(this).closest('li').addClass("active");
			$("#slider-content ul").removeClass("active");
			$(targetSlider).addClass("active");

			sliderCounterInit();
			quickAccess();
			resetCounter();
			titlePicture();
		}

	});
}

function resetCounter() {
	counter = 0;
	sLength = $("#slider-content .active li").length;
	$("#slider-content").removeClass("anim-slide");
	$("#slider-content").css("margin-left", 0);
	if (slide === true) {
		$("#slider-content").addClass("anim-slide");
	}
	if (loop === false && sLength > 1) {
		$("#slider-prev").addClass("disabled");
		$("#slider-next").removeClass("disabled");
	}
	if (sLength === 1) {
		$("#slider-control").removeClass("active");
	} else {
		$("#slider-control").addClass("active");
	}
}

function preload1() {
	$("#slider-content").hide();
	$("body").append('<div id="wait"><img src="img/design/loader.gif" alt="chargement..."/><p>Please wait a few seconds<br> while the page loads.</p></div>');
}

function preload2() {
	$("#wait").hide();
	$("#loading-container").fadeOut();
	$("#slider-content").fadeIn();
}

function swipeTouch() {
	if (swipe === true) {
		$(document).on('touchstart', 'body', function(e) {
			xStart = e.originalEvent.touches[0].pageX;
		});
		$(document).on('touchmove', 'body', function(e) {
			xEnd = e.originalEvent.touches[0].pageX;

		});
		$(document).on('touchend', 'body', function(event) {
			if (xEnd != 0) {
				var xDif = xStart - xEnd;

				if (xDif < -100) {
					previous();
				} else if (xDif > 100) {
					next();
				} else {
					return false;
				}
				xEnd = 0;
			}
		});
	}
}

function ajaxLoading() {
	if (ajax === true) {

		var url = dirForAjax;
		$.getJSON('php/scanYourDir.php', {
			url : dirForAjax
		}, function(data) {
			console.log(data);
			var dirTree = data;
			var dirTreeLength = Object.keys(dirTree).length;

			var imgExts = [".jpg", ".png", ".svg", ".gif", ".jpeg", ".tiff", ".bmp", ".tif"];
			var imgExtsLength = imgExts.length;

			itemsToLoads = 0;
			itemsLoaded = 0;
			
			for (var folder in dirTree) {
				var itemsInFolder = dirTree[folder].length;
				itemsToLoads += itemsInFolder;
			}

			for (var folder in dirTree) {
				if (dirTree[folder].length > 0) {
					var folderId = folder.replace(/ /g, "_");

					$("#nav-list").append("<li><a>" + folder + "</a></li>");
					$("#slider-content").append("<ul id='" + folderId + "'></ul>");

					for ( n = 0; n < dirTree[folder].length; n++) {

						var file = dirTree[folder][n];
						for (var z = 0; z < imgExtsLength; z++) {

							var imgExt = imgExts[z];

							if (file.indexOf(imgExt) != -1) {
								fileName = file.replace(imgExt, "");
								$("ul#" + folderId + "").append("<li><img onload='loading()' src='" + dirForAjax + "/" + folder + "/" + file + "' alt='" + fileName + "'/></li>");
							}
						}
					}
					$("#" + folderId + "").removeAttr("id");
				}
			}
		}).complete(function() {
			$(window).on("load", function() {
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
		}).error(function() {
			alert("error");
		});
	}
}

function loading() {
	if (loadingBar === true) {
		itemsLoaded++;
		var loaded = itemsLoaded * 100 / itemsToLoads;
		console.log(loaded + "%");
		$("#loading-bar").css("width", loaded + "%");
	}
}

function textInit(){
	
	if(title.length>0){
		$("h1").text(title);
	}
	if(authorDate.length>0){
		$("#author-date").text(authorDate);
	}
}
