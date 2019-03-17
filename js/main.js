// This is a scroll to top function
$(window).scroll(function(){
	if($(this).scrollTop()>300){
		$(".top").fadeIn();
	}else{
		$(".top").fadeOut();
	}
});
$(document).ready(function(){
	$(".top").click(function(){
		$("html , body").animate({scrollTop:0}, 1000);
	});
	//For  menu javascript
	$(".responsive_icon").click(function(){
		$(".responsive_menu_mobile").fadeToggle(1000);
	});
	
});


