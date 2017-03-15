var $container;

$(document).ready(function() {
    $container = $(".outer");
    
    recalc();
    $(window).resize(recalc);
});

function recalc() {
    var windowH = $(window).height();
    var containerH = $container.height();

    if (windowH > containerH) {
	var margin = (windowH - containerH) / 2;
	
	$container.css("margin-top", margin);
	$container.css("margin-bottom", margin);
    } else {
	$container.css("margin", 0);
    }
}
