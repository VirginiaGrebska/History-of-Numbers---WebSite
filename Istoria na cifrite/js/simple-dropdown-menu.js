/*
 * Simple Drop Down Menu w/ CSS & jQuery
 * Author: Георги Калайджиев
 * Web: http://joro.me/blog/
 * Email: ripsterbg[at]gmail[dot]com
 * Tutorial: http://joro.me/blog/simple-drop-down-menu-with-css-and-jquery/
 */
 
$(document).ready(function () {	
	$('.main li:has(ul) > a').addClass('more'); //Tursi vsqko LI, v koeto ima UL i LI e roditelski element na A. Ako sa izpylneni usloviqta, dobavq na A class "more". Taka ako v LI imame UL, shte stava qsno, che imame submenu i shte podtikvame user-a da click-a.
	$('a.more').append('<span class="arrow">&nbsp;&nbsp;&raquo;</span>'); //S tozi red dobavqme strelkichki na vsqko A, koeto ima class "more".
	$('.main li').hover(function () {
		$(this).find('ul:first').stop(true, true).animate({opacity: 'toggle', height: 'toggle'}, 200).addClass('active_list');
	}, function () {
		$(this).children('ul.active_list').stop(true, true).animate({opacity: 'toggle', height: 'toggle'}, 200).removeClass('active_list');
	});	 
});