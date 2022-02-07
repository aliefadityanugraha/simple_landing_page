//Hook up the tweet display

$(document).ready(function() {
	$(".countdown").countdown({
				date: "27 feb 2022 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
	});

	var typed = new Typed('.typed_string', {
		strings: ["new CREATIVE site!"],
		typeSpeed: 100,
		startDelay: 90,
		loop: true,
	});

});	