$(document).ready(function() {

				$("#p2").mouseenter(function () {
				$("#p2").css('color','#fff');
				});
				$("#p2").mouseleave(function () {
				$("#p2").css('color','#ced2d2');
				});
				$("#p3").mouseenter(function () {
				$("#p3").css('color','#fff');
				});
				$("#p3").mouseleave(function () {
				$("#p3").css('color','#ced2d2');
				});
				$("#p4").mouseenter(function () {
				$("#p4").css('color','#fff');
				});
				$("#p4").mouseleave(function () {
				$("#p4").css('color','#ced2d2');
				});
				$("#p5").mouseenter(function () {
				$("#p5").css('color','#fff');
				});
				$("#p5").mouseleave(function () {
				$("#p5").css('color','#ced2d2');
				});

	$(window).scroll(function () {
		var topmenu=$("body").scrollTop();
		if(topmenu>95) {
			$(".topnav").css("background-color", "rgba(131, 167, 165,1)");
			$(".topp").css("border-bottom", "none");
			$(".logotxt a").css("color", "#0f5f5c");
			$("nav li a").css("color", "#0f5f5c");
			$("nav .current a").css("color", "#fff");
			$("nav .current a").css("background", "#0f5f5c");

				$("#p2").mouseenter(function () {
				$("#p2").css('color','#fff');
				});
				$("#p2").mouseleave(function () {
				$("#p2").css('color','#0f5f5c');
				});
				$("#p3").mouseenter(function () {
				$("#p3").css('color','#fff');
				});
				$("#p3").mouseleave(function () {
				$("#p3").css('color','#0f5f5c');
				});
				$("#p4").mouseenter(function () {
				$("#p4").css('color','#fff');
				});
				$("#p4").mouseleave(function () {
				$("#p4").css('color','#0f5f5c');
				});
				$("#p5").mouseenter(function () {
				$("#p5").css('color','#fff');
				});
				$("#p5").mouseleave(function () {
				$("#p5").css('color','#0f5f5c');
				});

		}
		else {
			$(".topnav").css("background-color", "rgba(255,255,255,0)");
			$(".topp").css("border-bottom", "1px solid #6d8180");
			$(".logotxt a").css("color", "#fff");
			$("nav li a").css("color", "#ced2d2");
			$("nav .current a").css("color", "#fff");
			$("nav .current a").css("background", "#6d8180");

				$("#p2").mouseenter(function () {
				$("#p2").css('color','#fff');
				});
				$("#p2").mouseleave(function () {
				$("#p2").css('color','#ced2d2');
				});
				$("#p3").mouseenter(function () {
				$("#p3").css('color','#fff');
				});
				$("#p3").mouseleave(function () {
				$("#p3").css('color','#ced2d2');
				});
				$("#p4").mouseenter(function () {
				$("#p4").css('color','#fff');
				});
				$("#p4").mouseleave(function () {
				$("#p4").css('color','#ced2d2');
				});
				$("#p5").mouseenter(function () {
				$("#p5").css('color','#fff');
				});
				$("#p5").mouseleave(function () {
				$("#p5").css('color','#ced2d2');
				});

			};
	})

	$(document).ready(function() {
		$('.main2').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInLeft',
			offset: 200
		});
	});

	$(document).ready(function() {
		$('.main3part1').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInRight',
			offset: 200
		});
	});

	$(document).ready(function() {
		$('.stick2').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeIn',
			offset: 200
		});
	});

	$(document).ready(function() {
		$('.main4part1').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInLeft',
			offset: 200
		});
	});

	$(document).ready(function() {
		$('.topp').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeIn',
			offset: 200
		});
	});

	$(document).ready(function() {
		$('.m8p1').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInUp',
			offset: 200
		});
	});

	$(document).ready(function() {
		$('.m8p2').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInUp',
			offset: 400
		});
	});

	$(document).ready(function() {
		$('.m8p3').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInUp',
			offset: 500
		});
	});

	$(document).ready(function() {
		$('.main8p2part1').addClass("hidden").viewportChecker( {
			classToAdd: 'visible animated fadeInDown',
			offset: 250
		});
	});

})