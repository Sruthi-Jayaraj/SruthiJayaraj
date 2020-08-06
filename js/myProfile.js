function openNav() {
	document.getElementById("mySidenav").style.width = "160px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
$(window).scroll(function(){				 
	$('.story p').each(function(){
		var scrollTop = $(window).scrollTop(),
		elementOffset = $(this).offset().top,
		distance      = (elementOffset - scrollTop),
		windowHeight  = $(window).height(),
		breakPoint    = windowHeight*0.9;

		if(distance > breakPoint) {
			$(this).addClass("more-padding");	
		}
		if(distance < breakPoint) {
			$(this).removeClass("more-padding");	
		}
	});
});
$(document).ready(function() {
	$("#core-skills").mouseenter(function() {
		setInterval(function() {
			window.location.reload();
			}, 500);
	});
	$("#adv-skills").mouseenter(function() {
		setInterval(function() {
			window.location.reload();
			}, 500);
	});
});