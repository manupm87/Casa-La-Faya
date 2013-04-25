/**
 * @author Manuel Pérez Martínez
 */

var currentPage = 'Index';
$(document).ready(function(){
	$('body').click(function(){
		//$('.content').fadeOut();
	});
	
});
$(function(){
	var $toPage;
	$('.sdt_wrap').click(function(){
		$toPage = $(this).find('.sdt_link').html();
		if($toPage != 'Gallery'){
			switchToPage($toPage);
		}
		
	});
	$('.sdt_box > a').click(function(){
		$toPage = $(this).find('.sub_nav_link').html();
		switchToPage($toPage);
	});
});
function switchToPage($toPage){
	/**
	 * Possible pages:
	 * 		-> Index
	 * 		-> Indoor
	 * 		-> Outdoor
	 * 		-> Fares
	 * 		-> Location
	 */
	switch($toPage){
		case "Index":
			if($toPage == currentPage)
				break;
			$('.content').fadeOut();
			$('#content_index').fadeIn();
			currentPage = $toPage;
		break;
		
		case "Indoor":
			if($toPage == currentPage)
				break;
			$('.content').fadeOut();
			$('#content_gallery_indoor').fadeIn();
			currentPage = $toPage;
		break;
		
		case "Outdoor":
		if($toPage == currentPage)
				break;
			$('.content').fadeOut();
			$('#content_gallery_outdoor').fadeIn();
			currentPage = $toPage;
		break;
		case "Fares":
			if($toPage == currentPage)
				break;
			$('.content').fadeOut();
			$('#content_fares').fadeIn();
			currentPage = $toPage;
		break;
		case "Location":
		if($toPage == currentPage)
				break;
			$('.content').fadeOut();
			$('#content_location').fadeIn();
			currentPage = $toPage;
		break;
		default:
		
	}
}


$(function() {
	/**
	 * for each main navigation element, on mouseenter, background is darkened
	 * and text is displaced.
	 */
	$('#nav_menu > li').bind('mouseenter', function() {
		var $elem = $(this);
		$elem.find('.sdt_link').stop(true).animate({
			'padding-left' : '40px',
		}, 500, 'easeOutBack').andSelf().find('.main_nav_link').stop(true)
		.animate({
			'background-color' : '#004000'
		});
		$elem.find('.sdt_box').stop(true).delay(200)
		.animate({
			'top':'51px'
			},300,'easeOutExpo');
		//.addClass('showSubNav',500);
	}).bind('mouseleave', function() {
		var $elem = $(this);
		//var $sub_menu = $elem.find('.sdt_box');
		$elem.find('.sdt_box').animate({
			'top': '0'
		},300);
		$elem.find('.main_nav_link').stop(true)
		.animate({
			'left' : '0px',
			'background-color' : '#00A000'
		}, 500).andSelf().find('.sdt_link').stop(true)
		.animate({
			'padding-left' : '0'
		});
	});
});
$(function() {
	/**
	 * for each sub navigation element, on mouseenter, background is darkened
	 * and text is displaced.
	 */
	$('div.sdt_box a').mouseenter(function(){
		$elem = $(this);
		$elem.animate({
			'background-color':'#004000'
		}).andSelf().find('.sub_nav_link').stop(true)
		.animate({
			'left':'45'
		},500,'easeOutBack');
	});
	$('div.sdt_box a').mouseleave(function(){
		$elem = $(this);
		$elem.animate({
			'background-color':'#00A000'
		}).andSelf().find('.sub_nav_link').stop(true)
		.animate({
			'left':'15'
		});
	});
})

$(function() {
	/**
	 * e-mail animation.
	 */
	var $mail = $('#mail');
	$('#mail').hover(function() {
		$(this).stop(true).animate({
			'font-size' : '16pt'
		}, 200, 'easeOutBack');
	});
	$mail.mouseleave(function() {
		$(this).stop(true).animate({
			'font-size' : '12pt'
		}, 300, 'easeOutBack');
	});

	/**
	  * Activate slider.
	  */
	$('#banner-fade').bjqs({
		height : 450,
		width : 800,
		responsive : true,
		animtype : 'slide'
	});
	
	/**
	 * Navigation var is set as scrollToFixed.
	 */
	$('nav').scrollToFixed();
});
