$(document).ready(function() {
    recalc();

    var $modal;

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

    $contents = $(".modal-content");
    var windowH = $(window).height();
    var minH = $contents.css("height");
console.log(windowH + " " + minH);
    if (windowH < minH) {
        $contents.css("height", wHeight - 42); // 20px padding + 20px margin + 2px border
    } else {
	var diff = windowH - minH - 22;
        var margins = diff / 2;
	$contents.css("margin-top", margins);
	$contents.css("margin-bottom", margins);
    }
}