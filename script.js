$(document).ready(function() {
    $(".open").click(function() {
        $(this).siblings().css("display", "block");
    });

    $(".close").click(function() {
	$(".modal").css("display", "none");
    });

    $(window).click(function(e) {
	if (e.target.className == "modal") {
            $(".modal").css("display", "none");
	}
    });
});