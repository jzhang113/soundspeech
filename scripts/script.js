var $contents;
var defaultH;
var defaultW;

$(document).ready(function() {
    $contents = $(".modal-content");
    defaultH = $contents.height();
    defaultW = $contents.width();
    var $modal;

    recalc();
    loadText($(location).attr("href").split("#")[1]);

    $(".lang > a").click(function(e) {
	    loadText($(e.target).attr("href").substring(1).toLowerCase());
    });

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
    $("#footer").css("top", height);

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

function loadText(lang) {
    $.ajax({url: "resources/translation/" + lang + ".xml",
	    dataType: "xml",
	    success: function(content) {
		$xml = $(content);
		$title = $xml.find("title");
		$content = $xml.find("content");
		$footer = $xml.find("footer");

		$("#main-title").html($title.text());
		$("#main-text").html($content.text());
		$("#footer-text").html($footer.text());

		$menuButtons = $("#menuLeft > li").children();
		$menuNames = $xml.find("menu");
		$menuNames.children().each(function(index, value) {
		    var $button = $($menuButtons[index]);
		    var $name = $(value);

		    $button.attr("href", $name.attr("href"));
		    $button.html($name.text());
		});

		$langButtons = $(".right .lang").children();
		$langNames = $xml.find("language");
		$langNames.children().each(function(index, value) {
		    var $button = $($langButtons[index]);
		    var $name = $(value);

		    $button.attr("href", $name.attr("href"));
		    $button.html($name.text());
		});

		$moduleText = $(".open > p");
		$moduleNames = $xml.find("modules");
		$moduleNames.children().each(function(index, value) {
		    $($moduleText[index]).html($(value).text());
		});
	    }
    });
}