var $contents;
var defaultH;
var defaultW;

$(document).ready(function() {
    $contents = $(".modal-content");
    defaultH = $contents.height();
    defaultW = $contents.width();
    var $modal;

    recalc();

    $(".open").click(function() {
        $modal = $(this).siblings();
	$modal.css("display", "block");
    });

    $(".close").click(function() {
	$modal.css("display", "none");
    });

    $(window).click(function(e) {
	if (e.target.className == "modal") {
            $modal.css("display", "none");
	}
    });

    $(document).keypress(function(e) {
	if (e.originalEvent.key == "Escape") {
            $modal.css("display", "none");
	}
    });

    $(window).resize(recalc);
});

function recalc() {
    var height = $(".navbar").height();
    $("#navmenu").css("height", height);
    $("#wrapper").css("top", height);
    $("#module-wrapper").css("top", height);

    var windowH = $(window).height();
    var windowW = $(window).width();

    if (windowH < defaultH + 42) {
	$contents.css("height", windowH - 42); // 20px padding + 20px margin + 2px border
	$contents.css("margin-top", 10);
	$contents.css("margin-bottom", 10);
    } else {
	var diff = windowH - defaultH - 22;
        var margins = diff / 2;

	$contents.css("height", defaultH);
	$contents.css("margin-top", margins);
	$contents.css("margin-bottom", margins);
    }

    if (windowW < defaultW + 42) {
	$contents.css("width", windowW - 42); // 20px padding + 20px margin + 2px border
    } else {
	$contents.css("width", defaultW);
    }
}